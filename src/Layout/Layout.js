import React, { useState, useContext, useEffect } from 'react'
import Footer from './Footer.js'
import Navbar from './Navbar.js'
import Sidebar from './Sidebar.js'
import { Outlet } from "react-router-dom";
import { UserContext } from '../context/UserContext.js'
import useAuth from '../hooks/useAuth.js'

export default function Layout(){
  //const userData = useContext(ContextUser)
  const [loading, setLoading] = useState(true)
  const mihook = useAuth()
  //console.log(mihook.authorized)

  useEffect(() => {
    console.log('useEffect layout');
    setLoading(false)
  },[])

  return(

    <div className={'h-screen flex flex-col bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500'}>
      <UserContext>
      {loading ?
        <h1>loading</h1>
        :
        <>
        {mihook.isLogged ?
            <Navbar />
            :
            <></>
        }
          {/*<main>{children}</main>*/}
          <main className={`flex h-full`}>
            {mihook.isLogged ? <><div className={'flex lg:block hidden'}><Sidebar /></div><Outlet /></> : <><Outlet /></>}
          </main>
        </>
      }
      </UserContext>
    {/*<Footer />*/}

    </div>

  )
}
