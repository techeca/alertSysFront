import React, { useState, useEffect, createContext } from 'react'
import { userService } from '../services'
import { useNavigate } from 'react-router-dom'

export const ContextUser = createContext(false)

export function UserContext({children}){
  const [userData, setUserData] = useState(false)
  //let userData = userService.user
  let navigate = useNavigate()

  useEffect(() => {
    console.log('Check si user está logeado')
    //console.log(userData);
    if(userService.userValue){
      console.log('usuario logeado')
      setUserData(userService.userValue)
      console.log(userService);
    }else {
      console.log('usuario no logeado')
      setUserData(false)
      //navigate('/login', { replace: true })
    }
  }, [userService.userValue])


  return(
    <ContextUser.Provider value={{userData}}>
      {children}
    </ContextUser.Provider>
  )
}

export default ContextUser
