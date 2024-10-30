import express from "express";
import mongoose from "mongoose";
import cors from "cors";



// connect mongodb
await mongoose.connect(process.env.MONGO_URI);

//  create an express app
const app = express();


// use middlewares
app.use(express.json());
app.use(cors());


// use routes


//  listen for incoming requests
app.listen(3310, () => {
    console.log('app is listening on port 3100');
});