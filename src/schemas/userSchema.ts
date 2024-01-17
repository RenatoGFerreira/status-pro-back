import Joi from "joi";

const UserSchema = Joi.object({
    name: Joi.string().required(),
    nickname: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(3).required(),
    confirmPassword: Joi.any().valid(Joi.ref('password')).required()
})

export default UserSchema;