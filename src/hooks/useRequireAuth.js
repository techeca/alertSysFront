import { useEffect, useCallback } from 'react'
import { useRouter } from './useRouter.js'
import { useUAuth } from './useUAuth.js'

export function useRequireAuth(redirectUrl = '/Login'){
  const auth = useUAuth()
  const router = useRouter()

  const authCheck = useCallback((url) => {
  const publicPaths = ['/login', '/status']
   if(!Boolean(auth.user) && !Boolean(publicPaths.includes(url.toLowerCase()))) {
      //No logged & no está en ruta publica
      router.navigate('/Login', {replace: true});
      //setAuthorized(false)
      //setUserData(false)
    } else {
      if(auth.user){
        //setUserData(userService)
        if(router.pathname === '/' || router.pathname === '/login'){
          router.navigate('/Home')
        }
      }else {
        //setUserData(false)
        if(router.pathname === '/'){
          router.navigate('/Login')
        }
      }
      //setAuthorized(true)
   }
 }, [router])

  useEffect(() => {
    console.log('useEffect useRequireAuth');
    console.log(auth);
    //console.log(auth);
    authCheck(router.pathname);
  }, [authCheck, router.pathname])

  return auth
}
