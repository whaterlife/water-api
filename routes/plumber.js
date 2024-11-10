import { Router } from "express";
import {isAuthenticated} from "../middlewares/auth.js"
import { getProfile, loginplumber, logoutplumber, registerplumber, updateprofile,  } from "../controllers/plumber.js";



// create routes
const plumberRouter = Router();


// define routes
plumberRouter.post('plumbers/register', registerplumber)
plumberRouter.post('plumbers/login', isAuthenticated, loginplumber)
plumberRouter.get('plumbers/me', isAuthenticated, getProfile)
plumberRouter.post('plumbers/logout', isAuthenticated, logoutplumber)
plumberRouter.patch('plumbers/me', isAuthenticated, updateprofile)




// export default
export default plumberRouter;