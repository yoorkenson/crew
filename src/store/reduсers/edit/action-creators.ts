import { AppDispatch } from "../.."
import { IEdit } from "../../../models/IEdit"
import { EditActionEnum, SetEditAction, SetErrorAction, SetIsLoadingAction } from "./types"

export const EditActionCreators = {
    setEdit: (edit: IEdit): SetEditAction => ({type: EditActionEnum.SET_EDIT, payload: edit}),
    setIsLoading: (loading: boolean): SetIsLoadingAction => ({type: EditActionEnum.SET_IS_LOADING, payload: loading}),
    setError: (error: string): SetErrorAction => ({type: EditActionEnum.SET_ERROR, payload: error}),
}