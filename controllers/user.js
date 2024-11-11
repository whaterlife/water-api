import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { userModel } from "../models/user.js";
import { userLoginValidator, userRegisterValidator, userUpdateValidator } from "../validators/user.js";


export const registerUser = async (req, res, next) => {
   try {
     // validate user input
     const { error, value } = userRegisterValidator.validate({
        ...req.body,
        photo: req.file?.filename
     });
     if (error) {
         return res.status(422).json(error);
     }
     // check if user does not exist
     const user = await userModel.findOne({ email: value.email });
     if (user) {
         return res.status(409).json('user already exist');
     }
     // hash their password
     const hashedpassword = bcrypt.hashSync(value.password, 10);
     // save the user into database
     await userModel.create({
      ...value,
      password: hashedpassword
  });
     // send user confirmation email

     // respond to request
     res.json('user registered');
   } catch (error) {
    next(error);
    
   }
}


export const getProfile = async (req, res, next) => {
  try {
      // find authenticated user from database
      const user = await userModel
          .findById(req.auth.id)
          .select({ password: false });
      // respond to request
      res.json(user);
  } catch (error) {
      next(error)

  }
}


export const loginUser = async (req, res, next) => {
  try {
      // validate user input
      const { error, value } = userLoginValidator.validate(req.body);
      if (error) {
          return res.status(422).json(error)
      }
      // find one user with identifier
      const user = await userModel.findOne({ email: value.email });
      if (!user) {
          return res.status(404).json('user does not exist!')
      }
      // compare their passwords
      const correctPassword = bcrypt.compareSync(value.password, user.password);
      if (!correctPassword) {
          return res.status(401).json('invalid credentials!');
      }
      // sign a token for user
      const token = jwt.sign({
          id: user.id
      },
          process.env.JWT_PRIVATE_KEY,
          { expiresIn: '24h' }
      );
      // respond to request
      res.json({
          message: 'user logged in successfully',
          accessToken: token
      });
  } catch (error) {
      next(error)

  }
}


export const logoutUser = (req, res, next) => {
  res.json('user logged out successfully');
}


export const updateProfile = async (req, res, next) => {
  try {
      // validate user input
      const { error, value } = userUpdateValidator.validate({
          ...req.body,
          photo: req.file?.filename
      });
      if (error) {
          return res.status(422).json(error);
      }
      // update user
      await userModel.findByIdAndUpdate(req.auth.id, value);
      //  respond to request
      res.json('user profile was updated');
  } catch (error) {
      next();

  }
} 