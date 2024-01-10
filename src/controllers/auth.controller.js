import bcrypt from "bcrypt"
import { createUserDB, getUserByEmailDB } from "../repositories/user.repository.js"

export async function signUp(req, res){
    const {name, nickname, email, password } = req.body
    //console.log(name, nickname, email, password)

    try{
        const user = await getUserByEmailDB(email)
        if(user.rowCount !== 0) return res.status(409).send({message: "Email já foi cadastrado."})
    
        const hash = bcrypt.hashSync(password, 10)

        console.log(name, nickname, email, hash)
        await createUserDB(name, nickname, email, hash)
        
        
        res.status(201).send("Bem-Vindo!")
    }catch(error){
        res.status(500).send(error.message)
    }
}