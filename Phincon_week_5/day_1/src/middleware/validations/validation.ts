import { Request, Response } from "express";
import registerSchema from "../../schema/register.schema";
import User from "../../models/user";

export const validateAndCheckDuplicates = async (req, res, next) => {
  const validationError = registerSchema.validate(req.body).error;
  if (validationError) {
    return res.status(400).json({
      status: "failed",
      code: 400,
      message: validationError.details,
    });
  }

  try {
    const { email, username, phone_number } = req.body;
    const checkEmail = await User.findOne({ where: { us_email: email } });
    if (checkEmail) {
      return res.status(400).json({
        status: "failed",
        code: 400,
        message: "email already exist",
      });
    }
    const checkUsername = await User.findOne({
      where: { us_username: username },
    });
    if (checkUsername) {
      return res.status(400).json({
        status: "failed",
        code: 400,
        message: "user already exist",
      });
    }
    const checkPhone = await User.findOne({
      where: { us_phone_number: phone_number },
    });
    if (checkPhone) {
      return res.status(400).json({
        status: "failed",
        code: 400,
        message: "phone number already exist",
      });
    }
    next();
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      code: 400,
      message: "cannot retrieve user",
    });
  }
};
