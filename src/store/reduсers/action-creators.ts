import { EditActionCreators } from "./edit/action-creators";
import { RegisterActionCreators } from "./register/action-creators";
import { AuthActionCreators } from "./auth/action-creators";
import { EventActionCreators } from "./event/action-creators";
import { EditListActionCreators } from "./editList/action-creators";


export const allActionCreators = {
    ...RegisterActionCreators,
    ...EditActionCreators,
    ...AuthActionCreators,
    ...EventActionCreators,
    ...EditListActionCreators
}