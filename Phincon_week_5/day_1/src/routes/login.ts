import { Router } from "express";
import UserController from "../controllers/user.controller";
import { validateAndCheckDuplicates } from "../middleware/validations/validation";
import { verifyEmail } from "../middleware/token";

const userRouter = Router();
const userController = new UserController();

userRouter.post(
  "/register",
  validateAndCheckDuplicates,
  userController.registerUser
);
// userRouter.post("/login", userController.loginUser);
// userRouter.get("/verify-email", verifyEmail);
userRouter.get("/get-user", userController.getAll);
// userRouter.get("/check-cookies", (req, res) => {
//   console.log(req.cookies.user);
//   res.status(200).send({
//     code: 200,
//     message: "success",
//     data: req.cookies.user,
//   });
// });

export default userRouter;
