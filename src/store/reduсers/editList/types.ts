export interface EditorListState {
    list: Array<string>
}

export enum EditListActionEnum {
    ADD_ITEM = 'ADD_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM'
}

export interface AddItemAction {
    type: EditListActionEnum.ADD_ITEM
    payload: string
}

export interface RemoveItemAction {
    type: EditListActionEnum.REMOVE_ITEM
    payload: number
}

export type EditListAction =
    AddItemAction |
    RemoveItemAction