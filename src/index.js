import express from "express"
import cors from "cors"
import dotenv from "dotenv"  
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())


app.get("/health", (req, res) => {
    res.send("It's working!")
})

const port = process.env.PORT || 5000
app.listen(port, ()=> console.log(`Server is up and running on port ${port}.`))