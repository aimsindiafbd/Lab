import userModel from "../models/userModel.js";
import validator from 'validator'
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import sendEmail from "../utils/sendEmail.js";
import nodemailer from 'nodemailer';

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}
const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    port: 465,
    auth: {
        user: 'byash0720@gmail.com',
        pass: 'bigp npay rsbo vbkd'
    }
});
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User doesn't exist" })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (isMatch) {
            const token = createToken(user._id)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invalid Credentials" })
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // checking user already exists or not
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: "User Already exists" });
        }

        // validating email format & strong password
        if (!validator.isEmail) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })
        const user = await newUser.save()
        await sendEmail(
            email,
            "Welcome to Asian Lab!",
            `Hello ${name},\n\nThank you for registering with Asian Lab! We're excited to have you onboard.`
        );
        const token = createToken(user._id);
        res.json({ success: true, token })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

const sendResetOtp = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        const otp = String(Math.floor(100000 + Math.random() * 900000));
        user.resetOtp = otp;
        user.resetOtpExprieAt = Date.now() + 10 * 60 * 1000; // 10 min expiry

        await user.save();

        await transporter.sendMail({
            from: `"Asian Lab" <byash0720@gmail.com>`,
            to: email,
            subject: "Password Reset OTP",
            text: `Your OTP to reset password is: ${otp}. It will expire in 10 minutes.`,
        });

        res.json({ success: true, message: "OTP sent to email", userId: user._id });

    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
};

const verifyResetOtp = async (req, res) => {
    try {
        const { email, otp } = req.body;
        const user = await userModel.findOne({ email });

        if (!user || !user.resetOtp) {
            return res.json({ success: false, message: "OTP not found or already used" });
        }

        if (user.resetOtp !== otp) {
            return res.json({ success: false, message: "Invalid OTP" });
        }

        if (user.resetOtpExprieAt < Date.now()) {
            return res.json({ success: false, message: "OTP expired" });
        }

        user.resetOtp = null;
        user.resetOtpExprieAt = null;
        await user.save();

        res.json({ success: true, message: "OTP verified successfully" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

const resetPassword = async (req, res) => {
    try {
        const { userId, newPassword } = req.body;
        const user = await userModel.findById(userId);
        if (!user) return res.json({ success: false, message: "User not found" });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);
        await user.save();

        res.json({ success: true, message: "Password reset successful" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};



const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET);
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invaild Credentials" })
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export { loginUser, registerUser, adminLogin, sendResetOtp, verifyResetOtp, resetPassword }