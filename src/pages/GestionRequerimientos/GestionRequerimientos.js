import React from 'react'
import Table from '../../components/ui/Table.js'
import TableData from '../../components/ui/TableData.js'
import Button from '../../components/ui/Button.js'
import { Link, Outlet } from 'react-router-dom'
import { EXAMPLE_DATA } from '../../data/constants.js'
import ContextUser from '../../context/UserContext.js'

export default function GestionRequerimientos(){

  return(
    <Outlet />
  )
}
