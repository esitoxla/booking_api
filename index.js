import express from 'express';
import { bookingRouter } from './routes/route.js';
import mongoose from 'mongoose';
import "dotenv/config";

await mongoose.connect(process.env.MONGO_URI);


const app = express();

app.use(express.json())
//define route
app.use(bookingRouter);


//listen for incoming request
app.listen(3001,() => {
    console.log('Port is working');
});

