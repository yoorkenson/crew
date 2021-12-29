import axios, { AxiosResponse } from "axios";
import { IEvent } from "../models/IEvent";
import { ExtendedIRegister } from "../models/IRegister";
import { IUser } from "../models/IUser";

export const _baseURL = "http://wpcrew.dodev.online/wp-json"
export const _wpApiBase = 'wp/v2'

export const routes = {
    jwt: 'jwt-auth/v1/token',
    posts: `${_wpApiBase}/posts`,
    currentUserData: `${_wpApiBase}/users/me`,
    register: `${_wpApiBase}/register`,
}

export async function getToken(username: string, password: string) {
    return sendLogin(routes.jwt, {username, password});
}

export async function registerUser(postParameters: ExtendedIRegister) {
    return registerPost(routes.register, postParameters);
}

export async function addPost(postParameters: any) {
    return sendPost(routes.posts, postParameters);
}

export async function addUserInfo(userParameters: any) {
    return sendUserData(routes.currentUserData, userParameters);
}

export async function getUserInfo() {
    return getPost(routes.currentUserData)
    .then(response => {
        const data = response.data
        return {
            ...data,
            am_list: data.am_list.split('|'),
            interests_list: data.interests_list.split('|'),
            alcohol: data.alcohol === '1',
            alcohol_visible: data.alcohol_visible === '1',
            smoking: data.smoking === '1',
            smoking_visible: data.smoking_visible === '1',
        }
    })
}

export async function registerPost(endpoint: string, body: any) {
    console.log('BODY:_________', body)
    try {
        return await axios.post(`${_baseURL}/${endpoint}`, body,{
            headers: {
            'Content-Type': 'application/json',
            },
        })
    } catch (error) {
        console.log('registerPost Error')
    }

}

export async function sendLogin(endpoint: string, body: any) {
    try {
        return await axios.post(`${_baseURL}/${endpoint}`, body, {
            headers: {
            'Content-Type': 'application/json',
            },
        }).then(user => {
            // console.log(user.data.token)
            console.log(user.data)

            localStorage.setItem('token', user.data.token)
        });
    } catch (error) {
        console.log('sendLogin Error')
    }

}

export async function sendUserData(endpoint: string, body: any) {
    return await axios.post(`${_baseURL}/${endpoint}`, {meta: body}, {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    })
}

export async function sendPost(endpoint: string, body: any) {
    return await axios.post(`${_baseURL}/${endpoint}`, body, {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    })
}

export async function getPost(endpoint: string) {
    return await axios.get(`${_baseURL}/${endpoint}`, {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
}