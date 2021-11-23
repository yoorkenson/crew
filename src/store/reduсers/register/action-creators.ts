import { AppDispatch } from "../.."
import { IRegister } from '../../../models/IRegister'
import { RegisterActionEnum, SetErrorAction, SetIsLoadingAction, SetRegisterAction } from "./types";


export const RegisterActionCreators = {
    setRegister: (register: IRegister): SetRegisterAction => ({type: RegisterActionEnum.SET_REGISTER, payload: register}),
    setIsLoading: (loading: boolean): SetIsLoadingAction => ({type: RegisterActionEnum.SET_IS_LOADING, payload: loading}),
    setError: (error: string): SetErrorAction => ({type: RegisterActionEnum.SET_ERROR, payload: error}),
}