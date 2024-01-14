import express, { json, Request, Response } from "express"
import httpStatus from "http-status"
import swaggerUi from "swagger-ui-express"
import swaggerdoc from "../swaggerdoc.json"
import { authRouter } from "./routes/index"
import dotenv from "dotenv"
dotenv.config()

const app = express()
app.use(json())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerdoc))
app.use('/', authRouter)



app.get("/health", (req: Request, res: Response) => {
    res.status(httpStatus.OK).send("It's working!");
})

const port = process.env.PORT || 5001
app.listen(port, () => console.log(`Server is up and running on port ${port}.`))