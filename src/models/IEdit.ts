import { IRegister } from "./IRegister";

export interface IEdit extends IRegister {
    id?: number
    about: string
    location: string
    education: string
    job: string
    am_list: Array<string>
    interests_list: Array<string>
    alcohol: boolean
    alcohol_visible: boolean
    smoking: boolean
    smoking_visible: boolean
    joined_events: number[]
    phone: string
}

export interface IEditServer extends IRegister {
    about: string
    location: string
    education: string
    job: string
    am_list: string
    interests_list: string
    alcohol: boolean
    alcohol_visible: boolean
    smoking: boolean
    smoking_visible: boolean
}