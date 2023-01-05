import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import ContextUser from '../context/UserContext.js'
import { userService } from '../services'
import { useUAuth } from '../hooks/useUAuth'

export default function Navbar(){
  const cntxt = useContext(ContextUser)
  //const test = useUAuth()
  const navigate = useNavigate()

  function byebyeUser(){
    cntxt.userData.logout()
    navigate('/Login', {replace:true})
  }

  return(
    cntxt.userData ?
    <nav className={'sticky top-0 z-10 bg-white font-bold w-full border-b flex justify-between items-center p-3'}>
      <ul className={'flex gap-3'}>
        <li><Link to={'Status'}>Alert<span>Sys</span></Link></li>
      </ul>

      <ul>
         <li className={'flex items-center gap-3'}>
          <span className={`text-indigo-700 hover:underline cursor-pointer`}>{cntxt.userData.userValue.email}</span>
          <button onClick={() => byebyeUser()} className={'border border-red-500 rounded-md p-1 bg-red-500 text-white hover:bg-red-600 hover:text-gray-200'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg>
          </button>
        </li>
      </ul>
    </nav>
    :
    <></>
  )
}
