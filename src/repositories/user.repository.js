import { db } from "../database/db.connection.js"

export function getUserByEmailDB(email){
    return db.query(`SELECT * FROM users WHERE email=$1;`, [email])
}

export function createUserDB(name, nickname, email, password){
    return db.query(
        `INSERT INTO users (name, nickname, email, password) VALUES ($1, $2, $3, $4);`,
        [name, nickname, email, password]
    )

}