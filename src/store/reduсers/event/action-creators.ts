import { AppDispatch } from "../..";
import { IEvent } from "../../../models/IEvent";
import { AddEventAction, EventActionEnum } from "./types";


export const EventActionCreators = {
    // addEvent: (payload: IEvent): AddEventAction => ({type: EventActionEnum.ADD_EVENT, payload}),
    // fetchEvents: () => async (dispatch: AppDispatch) => {
    //     try {
    //         const 
    //     }
    // }
    addEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as IEvent[]
            json.push(event)
            // dispatch(EventActionCreators.AddEventAction(json))
            localStorage.setItem('events', JSON.stringify(json))
        } catch (e) {
            console.log(e)
        }
    }
}