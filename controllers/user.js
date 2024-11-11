import { UserModel } from "../models/user.js";
import { userLoginValidator, userRegisterValidator, userUpdateValidator } from "../validators/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const userRegister = async (req, res, next) => {
  try {
    //validate user input
    const {error, value } = userRegisterValidator.validate(req.body);
    if (error) {
        return res.status(422).json(error);
    }
      // check if user doesnot exist
      const user = await UserModel.findOne({email: value.email });
      if (user) {
        return res.status(409).json('user already exist');
      }
      // hash their password
      const hashedpassword = bcrypt.hashSync(value.password, 10);
      // save the user into database
      await UserModel.create({
          ...value,
          password: hashedpassword
      });
      // send user confirmation email
      await mailTransporter.sendMail({
          to: value.email,
          subject: 'user '
      })
      // respond to request
      res.json('User registered!');
  } catch (error) {
    next (error)
  }
}


export const userLogin = async (req, res, next) => {
  try {
      // validate user input
      const { error, value } = userLoginValidator.validate(req.body);
      if (error) {
          return res.status(422).json(error)
      }
      // find one user with identifier
      const user = await UserModel.findOne({ email: value.email });
      if (!user) {
          return res.status(404).json('user does not exist')
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
          message: 'User logged in successfully',
          accessToken: token
      });
  } catch (error) {
      next(error)

  }
}


export const userLogout = (req, res, next) => {
  res.json('User logged out successfully');
}


export const userUpdate = async (req, res, next) => {
try {
  // validate user input
  const { error, value } = userUpdateValidator.validate({
    ...req.body
  });
  if (error) {
    return res.status(422).json(error);
  }
    // update user
    await UserModel.findByIdAndUpdate(req.auth.id, value);
    // respond to request 
    res.json('user updated')
} catch (error) {
  next (error)
}
}