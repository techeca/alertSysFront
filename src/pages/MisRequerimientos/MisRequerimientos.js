import React, {useContext} from 'react'
import Table from '../../components/ui/Table.js'
import TableData from '../../components/ui/TableData.js'
import Button from '../../components/ui/Button.js'
import { Link } from 'react-router-dom'
import { EXAMPLE_DATA } from '../../data/constants.js'
import ContextUser from '../../context/UserContext.js'

export default function MisRequerimientos(){
  const { userData } = useContext(ContextUser)
  //console.log('Mis requerimientos');
  //console.log(userData.userValue.name);
  //console.log(userData.getRequirements('admin').requerimientos);

  return(
    userData ?
    <div className={`w-full bg-white`}>
      <div className={'w-full px-0 md:px-6'}>
      <div className={'w-52 pl-3'}>
        {<Link to={'/GestionRequerimientos/NuevoRequerimiento'}>
        <Button text={'Nuevo Requerimiento'} type={'button'} bgColor={'green-500'} hoverColor={'green-600'} />
        </Link>}
      </div>

        <div className={'flex bg-white flex-col p-6 rounded-md m-3 border'}>
          <h1 className={`text-xl text-gray-900 font-semibold mb-3`}>Mis Requerimientos</h1>
          <Table headers={EXAMPLE_DATA.reqHeadersUser}>
          {userData.getRequirements('admin').requerimientos.map((td, i) =>
            <tr key={`${td}${i}`} className="bg-white border-b hover:bg-gray-100 cursor-pointer">
                <TableData data={td.nombre} />
                <TableData data={td.descripcion} />
                <TableData data={td.solicitante} />
                <TableData data={td.estado} type={'status'} />
                <td className="py-4 px-6">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Modificar</a>
                </td>
            </tr>
          )}
          </Table>
        </div>
      </div>
    </div>
    :
    <></>
  )
}
