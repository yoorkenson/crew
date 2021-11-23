import { IEdit } from "../../../models/IEdit";

export interface EditState {
    editInfo: IEdit
    isLoading: boolean
    error: string
}

export enum EditActionEnum {
    SET_EDIT = 'SET_EDIT',
    SET_ERROR = 'SET_ERROR',
    SET_IS_LOADING = 'SET_IS_LOADING'
}

export interface SetEditAction {
    type: EditActionEnum.SET_EDIT
    payload: IEdit
}

export interface SetErrorAction {
    type: EditActionEnum.SET_ERROR
    payload: string
}

export interface SetIsLoadingAction {
    type: EditActionEnum.SET_IS_LOADING
    payload: boolean;
}

export type EditAction =
    SetEditAction |
    SetErrorAction |
    SetIsLoadingAction