import express from "express";

import { loginUser, registerUser, adminLogin, sendResetOtp, verifyResetOtp, resetPassword } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
userRouter.post('/send-reset-otp', sendResetOtp);
userRouter.post('/verify-reset-otp', verifyResetOtp);
userRouter.post('/reset-password', resetPassword);


export default userRouter;
