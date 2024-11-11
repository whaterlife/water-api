import { Router } from "express";
import {hasPermission, isAuthenticated} from "../middlewares/auth.js"
import { getProfile, loginUser, logoutUser, registerUser, updateProfile  } from "../controllers/user.js";
import { plumberIconUpload } from "../middlewares/uploads.js";



// create routes
const userRouter = Router();


// define routes
userRouter.post('/users/register', plumberIconUpload.single('photo'), registerUser)
userRouter.post('/users/login', loginUser)
userRouter.get('/users/me', isAuthenticated, hasPermission ('get_profile'), getProfile)
userRouter.post('/users/logout', isAuthenticated, logoutUser)
userRouter.patch('/users/', isAuthenticated, hasPermission ('update_profile'), plumberIconUpload.single('photo'), updateProfile)




// export default
export default userRouter;