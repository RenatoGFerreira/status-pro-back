import Joi from "joi";

export const userSchema = Joi.object({
    name: Joi.string().required(),
    nickname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
    confirmṔassword: Joi.string().min(3).required().valid(Joi.ref("password"))
})