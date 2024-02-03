import { Request, Response, Router } from "express";
import httpStatus from "http-status"


const appRouter = Router()

appRouter.get("/", (req: Request, res: Response) => {
  res.status(httpStatus.OK).send("API Status PRO")
  // #swagger.description = 'Rota index'

})
appRouter.get("/ping", (req: Request, res: Response) => {
  res.status(httpStatus.OK).send("pong <br><br>Tudo certo por aqui!")
  // #swagger.description = 'Rota de saúde da aplicação'
})

export default appRouter

