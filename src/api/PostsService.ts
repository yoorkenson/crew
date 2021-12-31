import { IEvent } from "../models/IEvent";
import { authorizedAxios } from "./apiUtils"

export const getPostMiddleware = (post: any) => ({
  ...post,
  members: post.meta.members ? post.meta.members.split('|').map((id: string) => parseInt(id)) : [] 
})

export const getPost = async (id: string | number) => {
  return authorizedAxios.get(`/wp/v2/posts/${id}`).then(response => response.status === 200 ? 
      getPostMiddleware(response.data) : false);
}

export const getUserName = async (id: string | number) => {
  return authorizedAxios.get(`/wp/v2/users/${id}`).then(response => response.status === 200 ? response.data.name : false);
}

export const joinEvent = async (eventId: number) => {
  return authorizedAxios.post(`/wp/v2/join`, {eventId: eventId}).then(response => response.status === 200)
}

export const getCertainPosts = async (ids: (number | string)[]) : Promise<IEvent[]> => {
  if (!ids.length) return [];
  return authorizedAxios.get(`/wp/v2/posts/?include=${ids.join()}`).then(response => response.status === 200 ?
      response.data.map((post: any) => getPostMiddleware(post)) : [] ) 
}