import React, { useState, useContext, useEffect } from 'react'
import Footer from './Footer.js'
import Navbar from './Navbar.js'
import Sidebar from './Sidebar.js'
import { Outlet } from "react-router-dom";
import ContextUser, { UserContext } from '../context/UserContext.js'
import { useUAuth } from '../hooks/useUAuth.js'
import { useRouter } from '../hooks/useRouter.js'
import { useRequireAuth } from '../hooks/useRequireAuth.js'
//import useAuth from '../hooks/useAuth.js'
import Toaster from '../components/Toaster.js'
import useToast from '../hooks/useToast.js'

export default function Layout(){
  const {userData, authorized} = useContext(ContextUser)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const mitoast = useToast()
  const [toaster, setToaster] = useState(
    [
      {
        content:'Usuario agregado',
        type:'SUCCESS'
      },
      {
        content:'Usuario elimindo',
        type:'DANGER'
      },
      {
        content:'Usuario modificado',
        type:'SUCCESS'
      },
      {
        content:'Error al cargar datos',
        type:'WARNING'
      }
    ])

  return(

    <div className={'h-screen flex flex-col bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500'}>

        <UserContext>
        {<Navbar />}
        {/*<main>{children}</main>*/}
        <main className={`flex h-full`}>
            <div className={'flex lg:block hidden'}>
                {<Sidebar />}
            </div>
            <Outlet />
        </main>
        </UserContext>
        <Toaster />
    {/*<Footer />*/}
    </div>
  )
}
