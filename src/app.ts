import express, { json, Request, Response } from "express";
import cors from "cors"
import "express-async-errors"
import httpStatus from "http-status"
import swaggerUi from "swagger-ui-express"
import swaggerdoc from "../swaggerdoc.json"
import { errorHandler } from "./middleware/error-middleware"
import swaggerFile from '../swagger_doc.json';

import appRouter from "./routes/app-routes";
import userRouter from "./routes/user-routes"

const app = express()

app.use(json())
app.use(cors());
app.use(appRouter)
app.use(userRouter)
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerdoc))
app.get("/health", (req: Request, res: Response) => {
    res.status(httpStatus.OK).send("Tudo certo com a api!")
})
app.use(errorHandler)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is up and running in port ${port}`))