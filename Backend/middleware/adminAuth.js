import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
    try {
        const { token } = req.headers;
        if (!token) {
            return res.json({ success: false, message: "Not Authorized, Login Again" });
        }

        // Verify the JWT token
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the decoded token email matches the admin email
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(403).json({ success: false, message: "Not Authorized" });
        }

        next(); // Continue to the next middleware

    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Invalid Token, Please Login Again" });
    }
};

export default adminAuth;
