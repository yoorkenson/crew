import { IEvent } from "../../../models/IEvent";


export interface EventState {
    allEvents: {
        events: IEvent[]
        myEvents: IEvent[]
        joinedEvents: IEvent[]
    }
    isLoading: boolean
    error: string
}


export enum EventActionEnum {
    GET_EVENTS = 'GET_EVENTS',
    GET_CREATED_EVENTS = 'GET_CREATED_EVENTS',
    GET_JOINED_EVENTS = 'GET_JOINED_EVENTS',
    ADD_EVENT = 'ADD_EVENT',
    SET_IS_LOADING = "SET_IS_LOADING"
}

export interface SetIsLoadingAction {
    type: EventActionEnum.SET_IS_LOADING
    payload: boolean;
}

export interface GetEventsAction {
    type: EventActionEnum.GET_EVENTS
    payload: IEvent[]
}

export interface GetCreatedEventsAction {
    type: EventActionEnum.GET_CREATED_EVENTS
    payload: IEvent[]
}

export interface GetJoinedEventsAction {
    type: EventActionEnum.GET_JOINED_EVENTS
    payload: IEvent[]
}

export interface AddEventAction {
    type: EventActionEnum.ADD_EVENT
    payload: IEvent
}

export type EventAction =
    GetEventsAction |
    GetCreatedEventsAction |
    GetJoinedEventsAction |
    AddEventAction |
    SetIsLoadingAction