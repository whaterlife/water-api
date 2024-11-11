import Joi from "joi";


export const reportValidator = Joi.object({
    fullname:Joi.string.required(),
    email:Joi.string.required(),
    photo:Joi.string.required(),
    message:Joi.string.required()
})