import { Router } from "express";
import { signUp } from "../controllers/auth.controller.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { userSchema } from "../schemas/userSchema.js";

const authRouter = Router()

authRouter.post("/signup", validateSchema(userSchema), signUp)

export default authRouter