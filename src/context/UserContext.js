import React, { useState, useEffect, createContext, useCallback } from 'react'
import { userService } from '../services'
import { useNavigate, useLocation } from 'react-router-dom'

export const ContextUser = createContext(false)

export function UserContext({children}){
  const [userData, setUserData] = useState(false)
  const [authorized, setAuthorized] = useState(false)
  //let userData = userService.user
  let navigate = useNavigate()
  let actualPath = useLocation().pathname

  const authCheck = useCallback((url) => {
  const publicPaths = ['/login', '/status']
   if(!Boolean(userService.userValue) && !Boolean(publicPaths.includes(url.toLowerCase()))) {
      //No logged & no está en ruta publica
      navigate('/Login', {replace: true});
      setAuthorized(false)
      setUserData(false)
    } else {
      if(Boolean(userService.userValue)){
        setUserData(userService)
        if(actualPath === '/' || actualPath === '/Login'){
          navigate('/Home')
        }
      }else {
        setUserData(false)
        if(actualPath === '/'){
          navigate('/Login')
        }
      }
      setAuthorized(true)
   }
  }, [navigate])

  useEffect(() => {
    authCheck(actualPath);
  }, [authCheck, actualPath])


  return(
    <ContextUser.Provider value={{userData, authorized}}>
      {children}
    </ContextUser.Provider>
  )
}

export default ContextUser
