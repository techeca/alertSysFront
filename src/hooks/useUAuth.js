import { useContext } from 'react'
import { authContext } from '../context/AuthContext.js'

export const useUAuth = () => {
  return useContext(authContext)
}
