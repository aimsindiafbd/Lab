import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Razorpay from "razorpay";
import crypto from 'crypto';
// placing order using razorpay
const payCash = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "cod",
            payment: false,
            date: Date.now()
        }
        const newOrder = new orderModel(orderData)
        await newOrder.save()
        await userModel.findByIdAndUpdate(userId, { cartData: {} })
        res.json({ success: true, message: "Order Placed" })
    } catch (error) {
        console.log(error);
    }
}

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});


const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: 'RazorPay',
            payment: false,
            status: "Order Placed",
            date: Date.now(),
        };

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        const options = {
            amount: amount * 100, // Convert to paisa
            currency: "INR",
            receipt: newOrder._id.toString(), // This will be the order ID in Razorpay
        };

        razorpayInstance.orders.create(options, async (error, order) => {
            if (error) {
                console.log(error);
                return res.status(500).json({ success: false, message: "Razorpay order creation failed" });
            }

            // Save the Razorpay order ID in our database
            newOrder.razorpay_order_id = order.id;
            await newOrder.save();

            res.json({ success: true, order });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};


const verifyRazorpay = async (req, res) => {
    try {
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

        console.log("🔵 Received Payment Verification Request:", req.body);

        // Step 1: Verify Razorpay Signature
        const generated_signature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(razorpay_order_id + "|" + razorpay_payment_id)
            .digest("hex");

        if (generated_signature !== razorpay_signature) {
            return res.status(400).json({ success: false, message: "Invalid Signature" });
        }

        console.log("✅ Payment verified successfully!");

        // Step 2: Find the Order in Database using `razorpay_order_id`
        const order = await orderModel.findOne({ razorpay_order_id });

        if (!order) {
            return res.status(404).json({ success: false, message: "Order not found" });
        }

        // Step 3: Update Order Payment Status
        order.payment = true;
        order.payment_status = "Paid";
        order.payment_id = razorpay_payment_id;
        await order.save();

        console.log("✅ Order updated successfully!");

        res.status(200).json({ success: true, message: "Payment verified and order updated!" });

    } catch (error) {
        console.error("❌ Error in verifyRazorpay:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};




// display all order data in admin panel

const allOrder = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, orders });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// user order Data for frontend
const userOrder = async (req, res) => {
    try {
        const { userId } = req.body
        const orders = await orderModel.find({ userId })
        res.json({ success: true, orders })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// update Order status from admin panel

const updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body
        await orderModel.findByIdAndUpdate(orderId, { status })
        res.json({ success: true, message: "Status Updated" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export { placeOrder, allOrder, userOrder, updateStatus, payCash, verifyRazorpay }