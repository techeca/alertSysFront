import { BehaviorSubject } from 'rxjs';
import { fetchWrapper } from '../helpers'
import { BACKEND_DATA, EXAMPLE_DATA } from '../data/constants.js'

const userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')))
const adminSubject = new BehaviorSubject('')

export const userService = {
    user: userSubject.asObservable(),
    get userValue() { return userSubject.value },
    login,
    logout,
    getRequirements,
    getDashboard,
    getAllZones
}

export const adminService = {
  admin: adminSubject.asObservable(),
  get adminValue() { return adminSubject.value },
  newZone,
  newUser
}

function login(email, password) {
  return fetchWrapper.postSn(`${BACKEND_DATA.DEVELOPMENT}${BACKEND_DATA.LOGIN}`, {email, password})
         .then(user => {
           userSubject.next(user);
           localStorage.setItem('user', JSON.stringify(user));
           return user;
         }).catch(err => {
           console.log(`Error: ${err}`);
         })
}

function logout(){
  localStorage.removeItem('user');
  userSubject.next(false);
}

function getRequirements(userEmail){
  return {headers:EXAMPLE_DATA.reqHeadersUser, requerimientos:EXAMPLE_DATA.requerimientos.filter(r => r.asignado === userEmail)}
}

function getDashboard(userEmail){
  return {req:EXAMPLE_DATA.requerimientos.filter(r => r.asignado === userEmail).length, users:EXAMPLE_DATA.users.length, zonas:EXAMPLE_DATA.zonas.length}
}

function getAllZones(){
  return fetchWrapper.get(`${BACKEND_DATA.DEVELOPMENT}${BACKEND_DATA.ZONES}`)
         .then(z => {
           return z
         })
}

function newZone(name, description){
  return fetchWrapper.post(`${BACKEND_DATA.DEVELOPMENT}${BACKEND_DATA.NEWZONE}`, {name, description})
         .then(z => {
           return z
         })
}

function newUser(email, password, name, cargo, estado, rut){
  return fetchWrapper.post(`${BACKEND_DATA.DEVELOPMENT}${BACKEND_DATA.NEWUSER}`, {email, password, name, cargo, estado, rut})
         .then(u => {
           return u
         })
}
