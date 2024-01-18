import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export function errorHandler(error: any, req: Request, res: Response, next: NextFunction){
    console.log(error)

    if(error.type === "NotFoundError") {
        return res.status(httpStatus.NOT_FOUND).send(error.message)
    }
    if(error.type === "NicknameExists") {
        return res.status(httpStatus.CONFLICT).send(error.message)
    }
    if(error.type === "EmailExists") {
        return res.status(httpStatus.CONFLICT).send(error.message)
    }
    if(error.type === "EmailNotFound") {
        return res.status(httpStatus.NOT_FOUND).send(error.message)
    }
    if(error.type === "PasswordorEmailWrong") {
        return res.status(httpStatus.UNAUTHORIZED).send(error.message)
    }

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(`Sorry, something went wrong`)
}