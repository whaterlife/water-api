import Joi from "joi"


export const userRegisterValidator = Joi.object({
    officeName: Joi.string(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required(),
    location: Joi.string().required(),
    photo: Joi.string().required(),
    phoneNumber: Joi.string(),
    password: Joi.string().required()
});

export const userLoginValidator = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
});

export const userUpdateValidator = Joi.object({
    location: Joi.string(),
    photo: Joi.string(),
    phoneNumber: Joi.string()
})