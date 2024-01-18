import { SignInParams, UserCreateOrUpdate } from "../protocols";
import *  as userRepository from "../repositories/user-repository"
import bcrypt from "bcrypt"
import { emailExists, nicknameExists, passwordorEmailWrong } from "../errors/errorlist";


export async function getAllUsers() {
    return await userRepository.getAll()
}

export async function createUser(user: UserCreateOrUpdate) {
    const { name, nickname, email, password } = user
    await validateUniqueNickname(nickname)

    await validateUniqueEmail(email)

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { name, nickname, email, password: hashedPassword }
    return userRepository.createUser(newUser)
}

export async function signIn(user: SignInParams) {
    const { email, password } = user
    
    const findUser = await userRepository.findUser(email)

    const userOK = bcrypt.compareSync(password, findUser)
    if(!userOK) throw passwordorEmailWrong()


    return userRepository.signIn(email)
}

async function validateUniqueNickname(nickname: string) {
    const userNickname = await userRepository.getUserByNickname(nickname)

    if (userNickname !== 0) {
        throw nicknameExists();
    }
}

async function validateUniqueEmail(email: string) {
    const userEmail = await userRepository.getUserByEmail(email)

    if (userEmail !== 0) {
        throw emailExists();
    }
}