import Joi = require("joi");

export const userRegisterValidator = Joi.object({
    firstname:Joi.string().required(),
    lastname:Joi.string().required(),
    email:Joi.string().required(),
    location:Joi.string().required(),
    password:Joi.string().required()
})

export const userLoginValidator = Joi.object({
    email:Joi.string().required(),
    password:Joi.string().required()
})

export const userUpdateValidator = Joi.object({
    location:Joi.string().required(),
    password:Joi.string().required()
})