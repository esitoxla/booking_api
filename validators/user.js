import Joi from "joi"

export const registerUserValidator = Joi.objectbject ({
    firstname: Joi.string(),
    lastname: Joi.string(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

export const loginUserValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

export const getUserProfileValidator = Joi.object({
    username: Joi.string(),
    avatar: Joi.string()
});


