import { IRegister } from "../../../models/IRegister";



export interface RegisterState {
    registerInfo: IRegister
    isLoading: boolean
    error: string
}

export enum RegisterActionEnum {
    SET_REGISTER = 'SET_REGISTER',
    SET_SIGN_UP = 'SET_SIGN_UP',
    SET_ERROR = 'SET_ERROR',
    SET_IS_LOADING = 'SET_IS_LOADING'
}

export interface SetRegisterAction {
    type: RegisterActionEnum.SET_REGISTER
    payload: IRegister
}

export interface SetSignUpAction {
    type: RegisterActionEnum.SET_SIGN_UP
    payload: boolean
}

export interface SetErrorAction {
    type: RegisterActionEnum.SET_ERROR
    payload: string
}

export interface SetIsLoadingAction {
    type: RegisterActionEnum.SET_IS_LOADING
    payload: boolean;
}

export type RegisterAction =
    SetRegisterAction |
    SetSignUpAction |
    SetErrorAction |
    SetIsLoadingAction