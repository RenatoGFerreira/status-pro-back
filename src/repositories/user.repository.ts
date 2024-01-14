import { db } from "../database/db.connection";
import { SignUpParams } from "utils/protocols";

async function getUserByEmailDB(email: string) {
   const isUser = db.query(
      `SELECT * FROM users WHERE email=$1`,
      [email]
   )
   return isUser;
}

async function createUserDB({name, nickname, email, password}: SignUpParams) {
   return db.query(
      `INSERT INTO users (name, nickname, email, password) VALUES ($1,$2,$3,$4)`,
      [name, nickname, email, password]
   )
}

export const userRepository = {
   getUserByEmailDB,
   createUserDB
}

// export async function getUserByEmailDB(email:string) {
//    const query = `SELECT * FROM users WHERE email=$1;`
//    const result = await connection.query(query,[email])

//    return result.rows
// }


