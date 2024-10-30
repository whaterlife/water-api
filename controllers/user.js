import { json } from "express";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


export const registerUser = async (req, res, next) => {
   try {
     // validate user input
     // check if user does not exist
     // hash their password
     // save the user into database
     // send user confirmation email
     // respond to request
   } catch (error) {
    next(error);
    
   }
}