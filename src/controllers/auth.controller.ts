import { Request, Response } from "express"
import { userService } from "../services/index";
import { SignUpParams } from "utils/protocols"
import httpStatus from "http-status";

export async function signUp(req:Request, res:Response) {
    const {name, nickname, email, password} = req.body as SignUpParams;
    const user = await userService.createUserDB({name, nickname, email, password})
 
    return res.status(httpStatus.CREATED).send(`Bem-Vindo!`) 
}