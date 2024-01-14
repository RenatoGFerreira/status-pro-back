import { validateSchema } from "../middlewares/validateSchema";
import { signUp } from "../controllers/index";
import { Router } from "express";
import { userSchema } from "../schemas/userSchema";

const authRouter = Router()

authRouter.post("/signup", validateSchema(userSchema), signUp)

export {authRouter}