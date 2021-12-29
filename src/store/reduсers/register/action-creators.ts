import { AppDispatch } from "../.."
import { addUserInfo, getToken, registerUser } from "../../../api/UserService";
import { useActions } from "../../../hooks/useActions";
import { ExtendedIRegister, IRegister } from '../../../models/IRegister'
import { RegisterActionEnum, SetErrorAction, SetIsLoadingAction } from "./types";


export const RegisterActionCreators = {
    setIsLoading: (loading: boolean): SetIsLoadingAction => ({type: RegisterActionEnum.SET_IS_LOADING, payload: loading}),
    setError: (error: string): SetErrorAction => ({type: RegisterActionEnum.SET_ERROR, payload: error}),
    setRegister: (register: ExtendedIRegister) => async (dispatch: AppDispatch) => {
        dispatch(RegisterActionCreators.setIsLoading(true))
        console.log('register ', register)
        await registerUser(register)
        dispatch(RegisterActionCreators.setIsLoading(false))

    }
} 