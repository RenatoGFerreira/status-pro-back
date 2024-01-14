import { SignUpParams } from "../utils/protocols";
import { userRepository } from "../repositories/index"
import { duplicatedEmailError } from "../errors/duplicateEmailError";
import bcrypt from "bcrypt"

export async function createUserDB({ name, nickname, email, password }: SignUpParams) {
    //await canEnrollOrFail();
    await validateUniqueEmail(email);

    const hashedPassword = await bcrypt.hash(password, 10)
    return userRepository.createUserDB({
        name,
        nickname,
        email,
        password: hashedPassword
    })
}

async function validateUniqueEmail(email: string) {
    const userEmail = await userRepository.getUserByEmailDB(email)
    console.log(userEmail.rowCount)
    if (userEmail.rowCount !== 0) {  
       // throw duplicatedEmailError()
       throw { type: "badRequest", message: "Dados inválidos" }; 
    }
}

export const userService = {
    createUserDB,
};
