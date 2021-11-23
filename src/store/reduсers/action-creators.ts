import { EditActionCreators } from "./edit/action-creators";
import { RegisterActionCreators } from "./register/action-creators";


export const allActionCreators = {
    ...RegisterActionCreators,
    ...EditActionCreators
}