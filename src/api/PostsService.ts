import { authorizedAxios } from "./apiUtils"


export const getPost = async (id: string | number) => {
  return authorizedAxios.get(`/wp/v2/posts/${id}`).then(response => response.status === 200 ? {
    ...response.data,
    members: response.data.meta.members ? response.data.meta.members.split('|').map((id: string) => parseInt(id)) : [] 
  } : false);
}

export const getUserName = async (id: string | number) => {
  return authorizedAxios.get(`/wp/v2/users/${id}`).then(response => response.status === 200 ? response.data.name : false);
}

export const joinEvent = async (eventId: number) => {
  return authorizedAxios.post(`/wp/v2/join`, {eventId: eventId}).then(response => response.status === 200)
}