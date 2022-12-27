import { BehaviorSubject } from 'rxjs';
import { fetchWrapper } from '../helpers'
import { BACKEND_DATA } from '../data/constants.js'

const userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')))

export const userService = {
    user: userSubject.asObservable(),
    get userValue() { return userSubject.value },
    login,
    logout
}

function login(email, password) {
  console.log('Enviando a API');
  return fetchWrapper.postSn(`${BACKEND_DATA.DEVELOPMENT}${BACKEND_DATA.LOGIN}`, {email, password})
         .then(user => {
           console.log(`Data de usuario ${user}`);
           userSubject.next(user);
           localStorage.setItem('user', JSON.stringify(user));
           console.log('User logged, info saved in localStorage');
           return user;
         }).catch(err => {
           console.log(`Error: ${err}`);
         })
}

function logout(){
  localStorage.removeItem('user');
  userSubject.next(null);
}
