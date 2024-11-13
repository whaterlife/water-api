import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.js";
import reportRouter from "./routes/report.js";
import leakformRouter from "./routes/leakform.js";



// connect mongodb
await mongoose.connect(process.env.MONGO_URI);

//  create an express app
const app = express();


// use middlewares
app.use(express.json());
app.use(cors());


// use routes
app.use(userRouter)
app.use(reportRouter)
app.use(leakformRouter)

//  listen for incoming requests
app.listen(3100, () => {
    console.log('app is listening on port 3100');
});