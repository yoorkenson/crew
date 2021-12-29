export interface IRegister {
    username?: string
    name?: string
    age?: string
    gender?: string
    phone_number?: string
    email_marketing?: boolean
}

export interface ExtendedIRegister {
    username: string
    name: string,
    password: string,
    age: number,
    gender: string,
    email_marketing: boolean,
    phone: string,
}