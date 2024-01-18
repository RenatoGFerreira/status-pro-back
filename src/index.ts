import express, {json, Request, Response} from "express"
import "express-async-errors"
import httpStatus from "http-status"
import swaggerUi from "swagger-ui-express"
import swaggerdoc from "../swaggerdoc.json"
import userRouter from "./routes/user-routes"
import { errorHandler } from "./middleware/error-middleware"

const app = express()

app.use(json())
app.use(userRouter)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerdoc))
app.get("/health", (req: Request, res: Response) => {
    res.status(httpStatus.OK).send("Tudo certo com a api!")
})
app.use(errorHandler)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is up and running in port ${port}`))