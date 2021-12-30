import { authorizedAxios } from "./apiUtils"


export const getPost = async (id: string | number) => {
  return authorizedAxios.get(`/wp/v2/posts/${id}`).then(response => response.status === 200 ? response.data : false);
}