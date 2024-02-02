import { Router } from "express";
import * as userControllers from "../controllers/user-controller"
import { validateSchema } from "../middleware/validate-middleware";
import UserSchema from "../schemas/userSchema";
import SigninSchema from "../schemas/signinSchema";
const userRouter = Router()

userRouter.get("/users", userControllers.getAllUsers)
userRouter.post("/signup", validateSchema(UserSchema), userControllers.createUser)
userRouter.post("/signin", validateSchema(SigninSchema), userControllers.signIn )
//userRouter.post("/signout")

export default userRouter

