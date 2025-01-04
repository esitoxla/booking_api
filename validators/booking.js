import Joi from "joi";

export const addBookingValidator = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  sex: Joi.string().required(),
  seatnumber: Joi.number().required(),
  email: Joi.string().required(),
});

export const updateBookingValidator = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  sex: Joi.string().required(),
  seatnumber: Joi.number().required(),
  email: Joi.string().required(),
});