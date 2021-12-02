import MyEvents from "../../../pages/MyEvents"
import { EventAction, EventActionEnum, EventState } from "./types"



const initialState: EventState = {
    events: [],
    myEvents: [],
    joinedEvents: []
}

export default function EventReducer(state = initialState, action: EventAction) {
    switch (action.type) {
        case EventActionEnum.GET_EVENTS:
            return {...state, events: action.payload}
        case EventActionEnum.GET_CREATED_EVENTS:
            return {...state, myEvents: action.payload}
        case EventActionEnum.GET_JOINED_EVENTS:
            return {...state, joinedEvents: action.payload}
        case EventActionEnum.ADD_EVENT:
            return {...state, myEvents: state.myEvents.push(action.payload)}
        default:
            return state
    }
}