import { IEvent } from "../../../models/IEvent"
import { EventAction, EventActionEnum, EventState } from "./types"



const initialState: EventState = {
    allEvents: {
        events: [] as IEvent[],
        myEvents: [] as IEvent[],
        joinedEvents: [] as IEvent[]
    },
    isLoading: false,
    error: ''
}

export default function EventReducer (state = initialState, action: EventAction) {
    switch (action.type) {
        case EventActionEnum.GET_EVENTS:
            return {...state, allEvents: {...state.allEvents, events: action.payload}}
        case EventActionEnum.GET_CREATED_EVENTS:
            return {...state, allEvents: {...state.allEvents, myEvents: action.payload}}
        case EventActionEnum.GET_JOINED_EVENTS:
            return {...state, allEvents: {...state.allEvents, joinedEvents: action.payload}}
        case EventActionEnum.ADD_EVENT:
            return {...state, allEvents: {...state.allEvents, myEvents: state.allEvents.myEvents.push(action.payload)}}
        default:
            return state
    }
}