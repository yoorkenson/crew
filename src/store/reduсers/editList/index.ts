import { EditListAction, EditListActionEnum, EditorListState } from "./types"



const initialState: EditorListState = {
    list: ['art', 'food (the good stuff)', 'film', 
    'hikes', 'beach', 'explore the city', 'road tripping', 'sports',
    'shopping', 'barbeque', 'travel', 'music', 'gym / fitness']
}


export default function editListReducer(state = initialState, action: EditListAction) {
    switch (action.type) {
        case EditListActionEnum.ADD_ITEM:
            return {...state, list: [...state.list, action.payload]}
        case EditListActionEnum.REMOVE_ITEM:
            return {
                ...state,
                list: [
                    ...state.list.slice(0, action.payload),
                    ...state.list.slice(action.payload + 1)
                ]
            }
        default:
            return state
    }
}