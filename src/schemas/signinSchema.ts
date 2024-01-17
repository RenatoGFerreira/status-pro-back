import Joi from "joi";

const SigninSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(3).required(),
})

export default SigninSchema;