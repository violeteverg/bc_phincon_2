import Joi from "joi";

const registerSchema = Joi.object({
  fullname: Joi.string().min(5).required(),
  username: Joi.string().min(5).max(10).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .max(30)
    .pattern(/(?=.*[a-z])/)
    .pattern(/(?=.*[A-Z])/)
    .pattern(/(?=.*[0-9])/)
    .pattern(/(?=.*[!@#$%^&*])/)
    .required(),
  phone_number: Joi.string().max(15).required(),
});

export default registerSchema;
