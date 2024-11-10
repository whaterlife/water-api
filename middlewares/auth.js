import { expressjwt } from "express-jwt";
import {plumberModel} from "../models/plumber.js";

export const isAuthenticated = expressjwt({
    secret: process.env.JWT_PRIVATE_KEY,
    algorithms: ['HS256']
});


export const hasPermission = (action) => {
    return async (req, res, next) => {
        try {
               // find plumber from database
               const plumber = await plumberModel.findById(req.auth.id);
               // use the plumber role to find their permision
               const permission = permission.find(value => value.role === plumber.role);
               if (!permission) {
                return res.status(403).json('no permission found');
               }
               // check if permission actions include action
               if (permission.actions.includes(action)) {
                next();
            } else{
                res.status(403).json('Action not allowed');
            }
          
        } catch (error) {
            next(error)
        }
    }
   
     
}
