//export const URL_API = 'http://localhost:3001'
import {userService} from '../services'
import { BACKEND_DATA } from '../data/constants.js'

export const fetchWrapper = {
  get,
  post,
  postSn
  //put,
  //delete: _delete
};

function get(url){
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(url) }
};
  return fetch(url, requestOptions).then(handleResponse);
}

function post(url, body){
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeader(url) },
    credentials: 'include',
    body: JSON.stringify(body)
  };
  return fetch(url, requestOptions).then(handleResponse)
}

function postSn(url, body){
  console.log('configurando opciones de encabezado');
  console.log(url);
  console.log(body);
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }
  return fetch(url, requestOptions).then(handleResponse);
}

function authHeader(url){
  const user = userService.userService;
  const isLoggenIn = user && user.token;
  const isAPIUrl = url.startsWith(BACKEND_DATA.DEVELOPMENT);
  if(isLoggenIn && isAPIUrl){
    return { Authorization: `Bearer ${user.token}` };
  }else {
    return {}
  }
}

function handleResponse(response){
  return response.text().then(text => {
    console.log(`Data solicitud a API: ${text}`);
    const data = text && JSON.parse(text);
    if(!response.ok){
      if([401, 403].includes(response.status) && userService.userService){
        userService.logout();
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
