import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import plumberRouter from "./routes/plumber.js";
import userRouter from "./routes/user.js";



// connect mongodb
await mongoose.connect(process.env.MONGO_URI);

//  create an express app
const app = express();


// use middlewares
app.use(express.json());
app.use(cors());


// use routes
app.use(plumberRouter)
app.use(userRouter)

//  listen for incoming requests
app.listen(3100, () => {
    console.log('app is listening on port 3100');
});