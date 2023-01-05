import { useState, useEffect } from 'react'
import { userService } from '../services'
import { useRouter } from './useRouter.js'

export function useProvideAuth(){
  const [user, setUser] = useState(null)
  //const router = useRouter()

  useEffect(() => {
    console.log('useProvide hook');
    console.log(userService.userValue);
    if(userService.userValue) {
      setUser(userService.userValue)
    }else {
      setUser(false)
    }
  }, [userService.userValue])

  return {
      user
  }
}
