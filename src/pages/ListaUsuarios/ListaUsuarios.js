import React from 'react'
import Table from '../../components/ui/Table.js'
import Button from '../../components/ui/Button.js'
import { Link } from 'react-router-dom'
import TableData from '../../components/ui/TableData.js'
import { EXAMPLE_DATA } from '../../data/constants.js'

export default function ListaUsuarios(){
  //console.log(EXAMPLE_DATA.users);

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
          <Table headers={EXAMPLE_DATA.userHeaders}>
          {EXAMPLE_DATA.users.map((td, i) =>
            <tr key={`${td}${i}`} className="bg-white border-b hover:bg-gray-100 cursor-pointer">
                <TableData data={[td.nombre, td.email]} type={'double'} />
                <TableData data={td.cargo} />
                <TableData data={td.estado} type={'status'} name={'user'} />
                <td className="py-4 px-6">
                  <Link to={`/GestionUsuarios/${td.email}`}>
                    <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Modificar</p>
                  </Link>
                </td>
            </tr>
          )}
          </Table>
        </div>
      </div>
    </div>
  )
}
