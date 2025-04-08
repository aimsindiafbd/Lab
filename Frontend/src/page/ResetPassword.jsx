import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [otpExpired, setOtpExpired] = useState(false);
    const [countdown, setCountdown] = useState(300); // 5 minutes
    const [otpVerified, setOtpVerified] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [userId, setUserId] = useState(null);

    const inputRefs = useRef([]);
    const navigate = useNavigate();
    const otp = inputRefs.current.map((input) => input?.value || '').join('');

    // Format time to MM:SS
    const formatTime = (seconds) => {
        const m = String(Math.floor(seconds / 60)).padStart(2, '0');
        const s = String(seconds % 60).padStart(2, '0');
        return `${m}:${s}`;
    };

    // Countdown
    useEffect(() => {
        if (otpSent && countdown > 0) {
            const interval = setInterval(() => {
                setCountdown((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        setOtpExpired(true);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [otpSent, countdown]);

    // Submit email
    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/user/send-reset-otp', { email });

            if (response.data.success) {
                toast.success('OTP sent to your email!');
                setOtpSent(true);
                setOtpExpired(false);
                setCountdown(300);
                setUserId(response.data.userId); // save userId for password reset
            }
        } catch (err) {
            const message = err.response?.data?.message || 'Error sending OTP';
            toast.error(message);
        }
    };

    // Verify OTP
    const verifyOtp = async () => {
        try {
            const response = await axios.post('http://localhost:4000/api/user/verify-reset-otp', {
                email,
                otp
            });

            if (response.data.success) {
                toast.success('OTP verified successfully!');
                setOtpVerified(true);
            } else {
                toast.error(response.data.message);
            }
        } catch (err) {
            toast.error(err.response?.data?.message || "Verification failed");
        }
    };

    // New Password Submit
    const onSubmitNewPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/user/reset-password', {
                userId,
                newPassword
            });

            if (response.data.success) {
                toast.success('Password reset successful!');
                setTimeout(() => navigate('/register'), 2000); // redirect after delay
            } else {
                toast.error(response.data.message);
            }
        } catch (err) {
            toast.error(err.response?.data?.message || "Reset failed");
        }
    };

    // OTP input handling
    const handleInput = (e, index) => {
        const val = e.target.value;
        if (/^[0-9]$/.test(val) && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e) => {
        const paste = e.clipboardData.getData('text').slice(0, 6).split('');
        paste.forEach((digit, index) => {
            if (inputRefs.current[index]) {
                inputRefs.current[index].value = digit;
            }
        });
    };

    const handleResendOTP = () => {
        setCountdown(300);
        setOtpExpired(false);
        toast.info('You can resend the OTP now.');
        // Optional: Trigger resend logic here
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
            <ToastContainer />
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                {!otpSent ? (
                    <form onSubmit={handleEmailSubmit}>
                        <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded mb-4"
                            required
                        />
                        <button className="w-full bg-blue-500 text-white py-2 rounded">Send OTP</button>
                    </form>
                ) : !otpVerified ? (
                    <>
                        <h2 className="text-2xl font-bold mb-4 text-center">Enter OTP</h2>
                        <div className="flex justify-center mb-4">
                            {Array(6).fill('').map((_, i) => (
                                <input
                                    key={i}
                                    type="text"
                                    maxLength="1"
                                    disabled={otpExpired}
                                    ref={(el) => (inputRefs.current[i] = el)}
                                    onInput={(e) => handleInput(e, i)}
                                    onKeyDown={(e) => handleKeyDown(e, i)}
                                    onPaste={handlePaste}
                                    className="w-10 h-10 mx-1 text-center border rounded"
                                />
                            ))}
                        </div>
                        {!otpExpired ? (
                            <p className="text-center text-sm mb-4">Expires in: <b>{formatTime(countdown)}</b></p>
                        ) : (
                            <p className="text-center text-red-500 mb-4">OTP expired. <button onClick={handleResendOTP} className="underline text-blue-600">Resend</button></p>
                        )}
                        <button onClick={verifyOtp} disabled={otpExpired} className="w-full bg-green-500 text-white py-2 rounded">
                            Verify OTP
                        </button>
                    </>
                ) : (
                    <form onSubmit={onSubmitNewPassword}>
                        <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="New Password"
                            className="w-full px-4 py-2 border rounded mb-4"
                            required
                        />
                        <button className="w-full bg-indigo-500 text-white py-2 rounded">Set New Password</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ResetPassword;
