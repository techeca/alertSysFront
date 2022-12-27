import { fetchWrapper } from '../helpers'
import { BACKEND_DATA } from '../data/constants.js'

const URL_API = 'http://localhost:3001'

export const statusService = {
  getStatusBackend
}

function getStatusBackend(){
  return fetchWrapper.get(`${BACKEND_DATA.DEVELOPMENT}${BACKEND_DATA.HEALTH}`)
         .then(resp => {
           return resp.backendStatus
         })
}
