import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.js";
import reportRouter from "./routes/report.js";
import leakformRouter from "./routes/leakform.js";
import statusRouter from "./routes/leakstatus.js";
import reportStatusRouter from "./routes/reportstatus.js";


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
app.use(statusRouter)
app.use(reportStatusRouter)

//  listen for incoming requests
app.listen(3100, () => {
    console.log('app is listening on port 3100');
});