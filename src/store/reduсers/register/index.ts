import { IRegister } from '../../../models/IRegister'
import { RegisterAction, RegisterActionEnum, RegisterState } from './types'

const initialState: RegisterState = {
    registerInfo: {} as IRegister,
    isLoading: false,
    error: ''
}

export default function registerReducer (state = initialState, action : RegisterAction) {
    switch (action.type) {
        // case RegisterActionEnum.SET_REGISTER:
        //     return {...state, registerInfo: action.payload, isLoading: false, error: ''}
        case RegisterActionEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case RegisterActionEnum.SET_ERROR:
            return {...state, error: action.payload, isLoading: false}
        case RegisterActionEnum.SET_SIGN_UP:
            return {...state}
        default:
            return state
    }
}