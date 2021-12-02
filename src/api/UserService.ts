import axios, { AxiosResponse } from "axios";
import { IEvent } from "../models/IEvent";
import { IUser } from "../models/IUser";

export default class UserService {
    static async getEvents(): Promise<AxiosResponse<IEvent[]>> {
        return axios.get<IEvent[]>('./events.json')
    }
    static async getUser(): Promise<AxiosResponse<IUser[]>> {
        return axios.get<IUser[]>('./users.json')
    }
    static async getUserInfo(): Promise<AxiosResponse<IUser>> {
        return axios.get<IUser>('./user.json')
    }
}