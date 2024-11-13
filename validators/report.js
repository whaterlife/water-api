import Joi from "joi";


export const reportValidator = Joi.object({
    fullName:Joi.string().required(),
    email:Joi.string().required(),
    photo:Joi.string().required(),
    message:Joi.string().required(),
    location:Joi.string().required()
})


