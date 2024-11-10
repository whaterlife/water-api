import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { plumberModel } from "../models/plumber.js";
import { plumberLoginValidator, plumberRegisterValidator, plumberUpdateValidator } from "../validators/plumber.js";


export const registerplumber = async (req, res, next) => {
   try {
     // validate plumber input
     const { error, value } = plumberRegisterValidator.validate(req.body);
     if (error) {
         return res.status(422).json(error);
     }
     // check if plumber does not exist
     const plumber = await plumberModel.findOne({ email: value.email });
     if (plumber) {
         return res.status(409).json('plumber already exist');
     }
     // hash their password
     const hashedpassword = bcrypt.hashSync(value.password, 10);
     // save the plumber into database
     await plumberModel.create({
      ...value,
      password: hashedpassword
  });
     // send plumber confirmation email

     // respond to request
     res.json('plumber registered');
   } catch (error) {
    next(error);
    
   }
}


export const getProfile = async (req, res, next) => {
  try {
      // find authenticated plumber from database
      const plumber = await plumberModel
          .findById(req.auth.id)
          .select({ password: false });
      // respond to request
      res.json(plumber);
  } catch (error) {
      next(error)

  }
}


export const loginplumber = async (req, res, next) => {
  try {
      // validate plumber input
      const { error, value } = plumberLoginValidator.validate(req.body);
      if (error) {
          return res.status(422).json(error)
      }
      // find one plumber with identifier
      const plumber = await plumberModel.findOne({ email: value.email });
      if (!plumber) {
          return res.status(404).json('plumber does not exist!')
      }
      // compare their passwords
      const correctPassword = bcrypt.compareSync(value.password, plumber.password);
      if (!correctPassword) {
          return res.status(401).json('invalid credentials!');
      }
      // sign a token for plumber
      const token = jwt.sign({
          id: plumber.id
      },
          process.env.JWT_PRIVATE_KEY,
          { expiresIn: '24h' }
      );
      // respond to request
      res.json({
          message: 'plumber logged in successfully',
          accessToken: token
      });
  } catch (error) {
      next(error)

  }
}


export const logoutplumber = (req, res, next) => {
  res.json('plumber logged out successfully');
}


export const updateprofile = async (req, res, next) => {
  try {
      // validate plumber input
      const { error, value } = plumberUpdateValidator.validate({
          ...req.body,
          avatar: req.file?.filename
      });
      if (error) {
          return res.status(422).json(error);
      }
      // update plumber
      await plumberModel.findByIdAndUpdate(req.auth.id, value);
      //  respond to request
      res.json('plumber profile was updated');
  } catch (error) {
      next();

  }
} 