export interface UserDto{
    id: string,
    email: string,
    name: string,
    surname: string,
    age: number,
    username: string
}

export interface createUserRequest{
    email: string,
    name: string,
    surname: string,
    age: number,
    username: string,
    password: string,
    confirmationPassword: string
}

export interface updateUserRequest{
    name: string,
    surname: string,
    age: number
}

