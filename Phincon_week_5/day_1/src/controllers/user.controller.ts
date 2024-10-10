import { Request, Response } from "express";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";
import Handlebars from "handlebars";
import fs from "fs";
import path from "path";
import { generateVerifyToken } from "../middleware/token";
import { Op } from "sequelize";
import Token from "../models/token";
import { getClientIP } from "../helpers/getClientIp";
import { Navigator } from "node-navigator";
import db from "../models";
import { ResponseStatusMsg } from "../helpers/statusMessage";
const responseStatus = new ResponseStatusMsg();
class UserController {
  async getAll(req: Request, res: Response) {
    try {
      const user = await db.User.findAll({
        attributes: [
          "id",
          "us_fullname",
          "us_username",
          "us_email",
          "us_phone_number",
        ],
        include: [
          {
            model: db.Role,
            as: "roles",
            attributes: ["rl_code"],
            through: { attributes: [] },
          },
        ],
      });

      // res.status(200).json({
      //   message: "success",
      //   data: user,
      // });
      return responseStatus.responseStatusMsg(res, 200, "OK", "success", user);
    } catch (error) {
      // res.status(500).json({
      //   message: error,
      // });
      return responseStatus.responseStatusMsg(
        res,
        500,
        "INTERNAL_SERVER_ERROR",
        error,
        "error"
      );
    }
  }
  async registerUser(req: Request, res: Response) {
    try {
      const verfication = "VERIFICATION";
      const { fullname, username, email, phone_number, password } = req.body;
      console.log(password);
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await db.User.create({
        us_fullname: fullname,
        us_username: username,
        us_email: email,
        us_phone_number: phone_number,
        us_password: hashedPassword,
        us_active: false,
      });
      console.log("user", newUser);
      const verificationToken = generateVerifyToken(
        newUser.id,
        newUser.us_email,
        verfication,
        "1h"
      );
      const emailTemplateSource = fs.readFileSync(
        path.join(__dirname, "../views/templates/emailVerification.hbs"),
        "utf8"
      );
      const template = Handlebars.compile(emailTemplateSource);
      const htmlToSend = template({
        logoUrl: `${process.env.BASE_URL}:${process.env.PORT}/images/logo-phincon-academy.png`,
        username: username,
        verificationLink: `${process.env.BASE_URL}:${process.env.PORT}/api/auth/verify-email?token=${verificationToken}`,
      });
      const transporter = nodemailer.createTransport({
        service: process.env.MAIL_SERVICE,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_APP_PASSWORD,
        },
      });
      const mailOption = {
        from: "phinconacademy@gmail.com",
        to: email,
        subject: "Verification Mail",
        html: htmlToSend,
      };
      await transporter.sendMail(mailOption);
      await db.Token.create({
        tkn_type: verfication,
        tkn_value: verificationToken,
        tkn_description: `description to ${newUser.id}`,
        tkn_client_ip: (await getClientIP()).ip,
        tkn_client_agent: new Navigator().userAgent,
        tkn_us_id: newUser.id,
        tkn_expired_on: new Date(Number(new Date()) + 60 * 60 * 1000),
        tkn_active: true,
        tkn_created_by: newUser.id,
        tkn_updated_by: newUser.id,
      });
      await db.UserRole.create({
        ur_us_id: newUser.id,
        ur_rl_id: 3,
        ur_active: true,
      });
      await db.Profile.create({
        pr_us_id: newUser.id,
        pr_gender: "male",
        pr_active: true,
      });

      return responseStatus.responseStatusMsg(
        res,
        201,
        "CREATED",
        "success",
        newUser
      );
    } catch (error) {
      // res.status(500).json({
      //   message: `ini error register :${error}`,
      // });
      return responseStatus.responseStatusMsg(
        res,
        500,
        "INTERNAL_SERVER_ERROR",
        "error",
        error
      );
    }
  }
  async loginUser(req, res) {
    try {
      const { userlogin, password } = req.body;
      console.log(userlogin, password);
      const user = await db.User.findOne({
        attributes: [
          "id",
          "us_password",
          "us_username",
          "us_email",
          "us_phone_number",
          "us_fullname",
          "us_active",
        ],
        where: {
          [Op.or]: [
            { us_email: userlogin },
            { us_phone_number: userlogin },
            { us_username: userlogin },
          ],
        },
      });
      if (!user) {
        return res.status(400).send({
          message: "ga bisa login",
        });
      }
      const loginToken = generateVerifyToken(
        user.id,
        user.us_email,
        "LOGIN",
        "1d"
      );
      const isActive = user.us_active;
      if (!isActive) {
        return res.status(401).send({
          message: "please verify ur email",
        });
      }
      const passwordUser = await bcrypt.compare(password, user.us_password);
      if (!passwordUser) {
        return res.status(400).send({
          message: " ur password must be correct",
        });
      }
      delete user.dataValues.us_password;
      user.dataValues["token"] = loginToken;
      const options = {
        expires: new Date(Number(new Date()) + 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      return res.cookie("user", user, options).status(200).send({
        status: "success",
        code: 200,
        data: user,
      });
    } catch (error) {
      return res
        .status(500)
        .send({ status: "failed", code: 500, message: error.message });
    }
  }
}

export default UserController;
