import axios from "axios"

export const baseUrl = "http://wpcrew.dodev.online/wp-json"


export const authorizedAxios = axios.create({
  baseURL: baseUrl,
  transformRequest: [ ( data, headers ) => {
    if ( headers ) headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    return data;
  }, ...( axios.defaults.transformRequest as [] ) ]
})