import { EditActionCreators } from "./edit/action-creators";
import { RegisterActionCreators } from "./register/action-creators";
import { AuthActionCreators } from "./auth/action-creators";


export const allActionCreators = {
    ...RegisterActionCreators,
    ...EditActionCreators,
    ...AuthActionCreators
}