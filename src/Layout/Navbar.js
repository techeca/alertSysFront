import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import ContextUser from '../context/UserContext.js'
import { userService } from '../services'

export default function Navbar(){
  console.log('load navbar')
  const cntxt = useContext(ContextUser)
  const navigate = useNavigate()
  //console.log(cntxt.userData.email);
  //console.log(userService.userValue.email);

  function byebyeUser(){
    userService.logout()
    navigate('/Login', {replace:true})
  }

  return(
    <nav className={'sticky top-0 z-10 bg-white font-bold w-full border-b flex justify-between items-center p-3'}>
      <ul className={'flex gap-3'}>
        <li><Link to={'Status'}>Alert<span>Sys</span></Link></li>
      </ul>

      <ul className={''}>
        {userService ? <li onClick={() => byebyeUser()} className={`text-indigo-700 hover:underline cursor-pointer`}>
          {userService?.userValue?.email}
        </li>
        :
        <></>
      }

      </ul>
    </nav>
  )
}
