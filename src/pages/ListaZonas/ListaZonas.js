import React, {useContext, useEffect, useState} from 'react'
import Table from '../../components/ui/Table.js'
import TableData from '../../components/ui/TableData.js'
import Button from '../../components/ui/Button.js'
import { Link } from 'react-router-dom'
import { EXAMPLE_DATA } from '../../data/constants.js'
import { ContextUser } from '../../context/UserContext'
import { Outlet } from "react-router-dom";
//import {adminService} from '../../services'

export default function ListaZonas(){
  const cntxt = useContext(ContextUser)
  const [tableData, setTableData] = useState(null)

  useEffect(() => {
    if(cntxt.userData){
      cntxt.userData.getAllZones().then(r => setTableData(r))
    }
  }, [cntxt])

  return(
    cntxt.userData ?
    <div className={`w-full bg-white`}>
      <div className={'w-full px-0 md:px-6'}>

      <div className={'w-48 pl-3'}>
        <Link to={'/GestionZonas/NuevaZona'}>
        <Button text={'Agregar Zona'} type={'button'} bgColor={'green-500'} hoverColor={'green-600'} />
        </Link>
      </div>

        <div className={'flex bg-white flex-col p-6 rounded-md m-3 border'}>
          <h1 className={`text-xl text-gray-900 font-semibold mb-3`}>Lista de Zonas</h1>

          <Table headers={EXAMPLE_DATA.zonasHeaders}>
            {tableData ?
              tableData.map((z, i) =>
                <tr key={`${z}${i}`} className="bg-white border-b hover:bg-gray-100 cursor-pointer">
                    <TableData data={z.name} />
                    <TableData data={z.description} />
                    <td className="py-4 px-6">
                        <Link to={`/GestionZonas/${z.name}/${z.description.replaceAll(' ', '-')}`}>
                          <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Modificar</p>
                        </Link>
                    </td>
                </tr>
              )
              :
              null
            }
          </Table>

        </div>

      </div>
    </div>
    :
    <></>
  )
}
