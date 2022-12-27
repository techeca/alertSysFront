import React from 'react'
import Table from '../../components/ui/Table.js'
import Button from '../../components/ui/Button.js'
import { Link } from 'react-router-dom'
import { EXAMPLE_DATA } from '../../data/constants.js'

export default function GestionUsuarios(){

  return(
    <div className={`w-full bg-white`}>
      <div className={'w-full px-0 md:px-6'}>
      <div className={'w-48 pl-3'}>
        <Link to={'/GestionUsuarios/NuevoUsuario'}>
        <Button text={'Agregar Usuario'} type={'button'} bgColor={'green-500'} hoverColor={'green-600'} />
        </Link>
      </div>

        <div className={'flex bg-white flex-col p-6 rounded-md m-3 border'}>
          <h1 className={`text-xl text-gray-900 font-semibold mb-3`}>Lista de Usuarios</h1>
          <Table headers={EXAMPLE_DATA.userHeaders} tableData={EXAMPLE_DATA.users} typeTable={'user'} />
        </div>
      </div>
    </div>
  )
}
