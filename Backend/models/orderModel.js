import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: { type: Array, required: true },
    address: { type: Object, required: true },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
    payment: { type: Boolean, default: false },
    status: { type: String, default: "Order Placed" },
    date: { type: Date, default: Date.now },
    razorpay_order_id: { type: String }, // ✅ Add this
});

const orderModel = mongoose.model("Order", orderSchema);

export default orderModel;
