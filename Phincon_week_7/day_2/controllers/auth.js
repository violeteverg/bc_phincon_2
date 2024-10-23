const { Op } = require("sequelize");
const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { username, fullname, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(username, fullname, email, hashedPassword);
    await User.create({
      username,
      fullname,
      email,
      password: hashedPassword,
    });
    await User;
    return res.status(201).send({
      code: 201,
      status: "Succes create",
    });
  } catch (error) {
    return res.status(401).send({
      code: 401,
      message: error,
    });
  }
};

const login = async (req, res) => {
  try {
    const { userlogin, password } = req.body;

    const user = await User.findOne({
      where: {
        [Op.or]: [{ username: userlogin }, { email: userlogin }],
      },
    });

    if (!user) {
      return res.status(404).send({
        code: 404,
        status: "User not found",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send({
        code: 401,
        status: "Invalid credentials",
      });
    }
    console.log(process.env.JWT_SECRET, "<<<");

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
    });

    return res.status(200).send({
      code: 200,
      status: "Login successful",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error: ", error);
    return res.status(500).send({
      code: 500,
      status: "Internal server error",
    });
  }
};

module.exports = {
  register,
  login,
};
