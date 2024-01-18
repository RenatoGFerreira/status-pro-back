import { emailNotFound } from "../errors/errorlist";
import connection from "../database/database";
import { User, UserCreateOrUpdate } from "../protocols";

export async function getAll() {
    const query = `SELECT * FROM users;`
    const result = await connection.query<User>(query)

    return result.rows
}

export async function createUser(user: UserCreateOrUpdate) {
    const { name, nickname, email, password } = user
    const query = `INSERT INTO users (name, nickname, email, password) VALUES ($1, $2, $3, $4)`;

    const result = await connection.query<User>(query, [name, nickname, email, password])
    return result.rowCount;
}

export async function signIn(email: string) {
    const query = `SELECT * FROM users WHERE email=$1`;
    const result = await connection.query<User>(query, [email])
    
    return result.rows
}


export async function getUserByEmail(email: string) {
    const query = `SELECT * FROM users WHERE email=$1;`
    const result = await connection.query<User>(query, [email])
    return result.rowCount
}

export async function getUserByNickname(nickname: string) {
    const query = `SELECT * FROM users WHERE nickname=$1;`
    const result = await connection.query<User>(query, [nickname])
    return result.rowCount
}

export async function findUser(email: string) {
    const query = `SELECT * FROM users WHERE email=$1;`
    const result = await connection.query<User>(query, [email])
    
    if(result.rowCount === 0) {
        throw emailNotFound()
    }

    return result.rows[0].password
}