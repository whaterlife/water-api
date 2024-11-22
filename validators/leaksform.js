import Joi from "joi";

export const leaksformValidator = Joi.object({
    // firstName: Joi.string().required(),
    // lastName: Joi.string().required(),
    gpsAddress: Joi.string().required(),
    contact: Joi.string().required(),
    description: Joi.string().required(),
    date: Joi.string().required(),
    photo: Joi.string(),
    signature: Joi.string().required()
})