import React, { useMemo } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'

export function useRouter(){
  const params = useParams()
  const location = useLocation()
  //const match = useRouteMatch()
  const navigate = useNavigate()

  return useMemo(() => {
    return {
      pathname: location.pathname,
      query: {
        ...queryString.parse(location.search),
        ...params
      },
      location,
      history,
      navigate
    };
  }, [params, location, history, navigate])
}
