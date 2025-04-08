import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './config/Mongoodb.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Connect to Database
connectDB();

// Middlewares
app.use(express.json());
app.use(cookieParser()); // ✅ Fixed: Added parentheses
app.use(cors({ credentials: true }));

// API Endpoints
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res) => {
    res.send("API is Working");
});

// Start Server
app.listen(port, () => console.log(`Server started on PORT ${port}`)); // ✅ Fixed: Added dynamic port
