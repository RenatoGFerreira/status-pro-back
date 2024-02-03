import { Request, Response } from "express";
import * as userService from "../services/user-service"
import httpStatus from "http-status";
import { SignInParams, UserCreateOrUpdate } from "../protocols";

export async function getAllUsers(req: Request, res: Response) {
    /* 
    #swagger.description = 'Rota de recuperação de usuários cadastrados'
    #swagger.responses[200] = {
           description: 'Sucesso',
           schema: { $ref: `#/definitions/User` }
    } 
    */
    const users = await userService.getAllUsers();

    res.status(httpStatus.OK).send(users)
}

export async function createUser(req: Request, res: Response) {
    /* 
    #swagger.description = 'Rota de cadastro de usuário'
    #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/User"

                    }
                }  
            }
        }
    }
    #swagger.responses[200] = {
           description: 'Sucesso',
           schema: { $ref: `#/components/schemas/User` }
    } 
    */
    const user = req.body as UserCreateOrUpdate;
    await userService.createUser(user)

    res.sendStatus(httpStatus.CREATED)
}

export async function signIn(req: Request, res: Response) {
    /* 
    #swagger.description = 'Rota de autorização de usuário'
    #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Signin"

                    }
                }  
            }
        }
    }
    #swagger.responses[200] = {
           description: 'Sucesso',
           schema: { $ref: `#/components/schemas/User` }
    } 
    */
    const user = req.body as SignInParams;
    const result = await userService.signIn(user);

    res.status(httpStatus.OK).send(result)
}