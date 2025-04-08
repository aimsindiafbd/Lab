import express from 'express';
import { placeOrder, allOrder, userOrder, updateStatus, payCash, verifyRazorpay } from '../controllers/orderControllers.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

// Admin Feature
orderRouter.post('/list', adminAuth, allOrder);
orderRouter.post('/status', adminAuth, updateStatus);

// Payment Feature
orderRouter.post('/cash', authUser, payCash);
orderRouter.post('/place-order', authUser, placeOrder);
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay);

// User Feature
orderRouter.post('/userorders', authUser, userOrder);

export default orderRouter;
