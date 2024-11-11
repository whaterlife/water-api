import { Router } from "express";
import { userLogin, userLogout, userRegister, userUpdate } from "../controllers/user.js";
import {isAuthenticated} from "../middlewares/auth.js"

// create routes
const userRouter = Router();

//define routes
userRouter.post('/users/register', userRegister)
userRouter.post('/users/login', userLogin)
userRouter.post('/users/logout', userLogout)
userRouter.patch('/users/update', userUpdate)

//export default
export default userRouter;