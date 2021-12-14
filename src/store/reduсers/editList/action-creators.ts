import { AddItemAction, EditListActionEnum, RemoveItemAction } from "./types";


export const EditListActionCreators = {
    addItem: (payload: string): AddItemAction => ({type: EditListActionEnum.ADD_ITEM, payload}),
    removeItem: (payload: number): RemoveItemAction => ({type: EditListActionEnum.REMOVE_ITEM, payload})
}