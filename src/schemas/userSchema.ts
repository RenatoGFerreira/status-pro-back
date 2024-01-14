import Joi from "joi";
import { CreateUserParams } from "../utils/protocols";

export const userSchema = Joi.object<CreateUserParams>({
    name: Joi.string().required(),
    nickname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
})