import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import User from "../models/user";

const columns = {
  email: "us_email",
  active: "us_active",
};

export const generateVerifyToken = (
  id: number,
  email: string,
  name: string,
  expires: string
) => {
  const token = jwt.sign(
    { id, [columns.email]: email, name: name },
    process.env.JWT_SECRET,
    {
      expiresIn: expires,
    }
  );
  return token;
};

export const verifyEmail = async (req: Request, res: Response) => {
  const { token } = req.query;
  if (typeof token === "string") {
    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
      ) as jwt.JwtPayload;
      console.log(decoded, "<<<<<decoded verify email");
      await User.update(
        { [columns.active]: true },
        { where: { id: decoded.id } }
      );
      return res.redirect(`${process.env.BASE_URL_FRONTEND}/verify-success`);
    } catch (error) {
      return res.redirect(`${process.env.BASE_URL_FRONTEND}/verify-failed`);
    }
  }
};
