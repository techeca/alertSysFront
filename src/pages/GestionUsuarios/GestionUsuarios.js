import React from 'react'
import Table from '../../components/ui/Table.js'
import Button from '../../components/ui/Button.js'
import { Link, Outlet } from 'react-router-dom'
import TableData from '../../components/ui/TableData.js'
import { EXAMPLE_DATA } from '../../data/constants.js'

export default function GestionUsuarios(){
  //console.log(EXAMPLE_DATA.users);

  return(
    <Outlet />
  )
}
