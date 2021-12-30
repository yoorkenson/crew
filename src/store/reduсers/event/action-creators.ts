import { AppDispatch } from "../..";
import { getMyPosts, getPosts } from "../../../api/UserService";
import { IEvent } from "../../../models/IEvent";
import { EventActionEnum, GetCreatedEventsAction, GetEventsAction, SetIsLoadingAction } from "./types";


export const EventActionCreators = {
    setIsLoading: (loading: boolean): SetIsLoadingAction => ({type: EventActionEnum.SET_IS_LOADING, payload: loading}),
    setPosts: (posts: IEvent[]): GetEventsAction => ({type: EventActionEnum.GET_EVENTS, payload: posts}),
    setCreatedPosts: (posts: IEvent[]): GetCreatedEventsAction => ({type: EventActionEnum.GET_CREATED_EVENTS, payload: posts}),
    getPosts: () =>  async (dispatch: AppDispatch) => {
        dispatch(EventActionCreators.setIsLoading(true))
        const posts = await getPosts()
        dispatch(EventActionCreators.setIsLoading(false))
        console.log('ALL POSTS: ', posts)
        return dispatch(EventActionCreators.setPosts(posts))
    },
    getCreatedPosts: (id: number) =>  async (dispatch: AppDispatch) => {
        dispatch(EventActionCreators.setIsLoading(true))
        const posts = await getMyPosts(id)
        dispatch(EventActionCreators.setIsLoading(false))
        console.log('CREATED POSTS: ', posts)
        return dispatch(EventActionCreators.setCreatedPosts(posts))
    }
}