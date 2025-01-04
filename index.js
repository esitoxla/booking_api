import express from 'express';
import { bookingRouter } from "./routes/booking.js";
import userRouter from './routes/users.js';
import mongoose from 'mongoose';
import "dotenv/config";
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json())

//define route
app.use(bookingRouter,userRouter);

await mongoose.connect(process.env.MONGO_URI);

//listen for incoming request
app.listen(3001,() => {
    console.log('Port is working');
});

