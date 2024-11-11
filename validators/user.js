import Joi from "joi"


export const plumberRegisterValidator = Joi.object({
    officeName: Joi.string(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().required(),
    location: Joi.string().required(),
    photo: Joi.string(),
    phoneNumber: Joi.string(),
    password: Joi.string().required()
});

export const plumberLoginValidator = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
});

export const plumberUpdateValidator = Joi.object({
    location: Joi.string(),
    photo: Joi.string(),
    phoneNumber: Joi.string()
})