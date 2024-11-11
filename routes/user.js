import { Router } from "express";
import {hasPermission, isAuthenticated} from "../middlewares/auth.js"
import { getProfile, loginplumber, logoutplumber, registerplumber, updateprofile,  } from "../controllers/user.js";
import { plumberIconUpload } from "../middlewares/uploads.js";



// create routes
const userRouter = Router();


// define routes
userRouter.post('/plumbers/register', plumberIconUpload.single('photo'), registerplumber)
userRouter.post('/plumbers/login', loginplumber)
userRouter.get('/plumbers/me', isAuthenticated, hasPermission ('get_profile'), getProfile)
userRouter.post('/plumbers/logout', isAuthenticated, logoutplumber)
userRouter.patch('/plumbers/', isAuthenticated, hasPermission ('update_profile'), plumberIconUpload.single('photo'), updateprofile)




// export default
export default userRouter;