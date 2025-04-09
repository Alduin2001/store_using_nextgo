
export interface CreateUserDto{
    name:string
    surname:string
    email:string
    password:string
}

export interface LoginUserDto{
    email:string
    password:string
}