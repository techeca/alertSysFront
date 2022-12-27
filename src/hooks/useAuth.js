import React, { useState, useCallback, useEffect /*, useContext*/ } from 'react'
import { useLocation, useNavigate  } from 'react-router-dom'
//import UserContext from './UserContext'
//import useAuth from '../hooks/useAuth'
import { userService } from '../services'

export default function useAuth(){
  let navigate = useNavigate()
  const [authorized, setAuthorized] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  let actualPath = useLocation().pathname

  const authCheck = useCallback((url) => {
  const publicPaths = ['/' ,'/login', '/status']
    console.log(userService.userValue);
   if(!Boolean(userService.userValue) && !Boolean(publicPaths.includes(url.toLowerCase()))) {
      //No logged & no está en ruta publica
      navigate('/login', {replace: true});
      setAuthorized(false)
      setIsLogged(false)
    } else {

      if(Boolean(userService.userValue)){
        //navigate('/Home', {replace: true})
        setIsLogged(true)
        if(actualPath === '/'){
          navigate('/Home')
        }
      }else {
        //navigate('/login', {replace: true});
      }
      setAuthorized(true)
      //setIsLogged(true)
   }
  }, [navigate])

  useEffect(() => {
      console.log(actualPath)
      authCheck(actualPath);
  }, [authCheck, actualPath]);

  return {
    authorized,
    isLogged
  }
}
