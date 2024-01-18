export function notFoundError(){
    return {
        type: "NotFoundError",
        message: "Element was not found!"
    }
}

export function nicknameExists(){
    return {
        type: "NicknameExists",
        message: "Nickname already exists!"
    }
}

export function emailExists(){
    return {
        type: "EmailExists",
        message: "Email already exists!"
    }
}

export function emailNotFound(){
    return {
        type: "EmailNotFound",
        message: "Email not found!"
    }
}

export function passwordorEmailWrong(){
    return {
        type: "PasswordorEmailWrong",
        message: "Password or email is incorrect!"
    }
}