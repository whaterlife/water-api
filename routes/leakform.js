import { Router } from "express";
import { createLeakform, getLeakform, getLeakforms } from "../controllers/leaksform.js";
import {isAuthenticated} from "../middlewares/auth.js";
import { leakformPhotoUpload } from "../middlewares/uploads.js";

const leakformRouter = Router();

// define routes
leakformRouter.post("/leakforms/create", leakformPhotoUpload.single('photo'), isAuthenticated, createLeakform);
leakformRouter.get("/leakforms/all", isAuthenticated, getLeakforms)
leakformRouter.get("/leakforms/:id", isAuthenticated, getLeakform)


export default leakformRouter;