export interface IRegister {
    username?: string
    name?: string
    age?: string
    gender?: string
    email?: string
    email_marketing?: boolean
}

export interface ExtendedIRegister {
    username: string
    name: string,
    password: string,
    age: number,
    gender: string,
    email_marketing: boolean,
    email: string,
}