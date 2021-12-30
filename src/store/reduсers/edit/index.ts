import { IEdit } from '../../../models/IEdit'
import { EditAction, EditActionEnum, EditState } from './types'

const initialState: EditState = {
    editInfo: {
        about:'',
        age:'',
        location:'',
        education:'',
        job:'',
        am_list: [],
        interests_list: [],
        alcohol: false,
        alcohol_visible: true,
        smoking: false,
        smoking_visible: true,
        id: -1
    } as IEdit,
    isLoading: false,
    error: ''
}

export default function editReducer(state = initialState, action: EditAction) {
    switch (action.type) {
        case EditActionEnum.SET_EDIT:
            return {...state, editInfo: action.payload, isLoading: false, error: ''}
        case EditActionEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case EditActionEnum.SET_ERROR:
            return {...state, error: action.payload, isLoading: false}
        default:
            return state
    }
}