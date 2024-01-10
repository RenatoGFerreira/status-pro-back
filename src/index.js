import express from "express"
import cors from "cors"
import swaggerUi from "swagger-ui-express"
import swaggerdoc from "../swaggerdoc.json" assert {type: 'json'}  //with or assert
import router from "./routes/index.js"
import dotenv from "dotenv"  
dotenv.config()


const app = express()
app.use(cors())
app.use(express.json())
app.use(router)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerdoc))



app.get("/health", (req, res) => {
    res.send("It's working!")
})

const port = process.env.PORT || 5000
app.listen(port, ()=> console.log(`Server is up and running on port ${port}.`))