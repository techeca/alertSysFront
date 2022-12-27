import React from 'react'
import Button from './Button.js'

export default function Table({headers, tableData, typeTable}){
  const getColorStatus = (sts) => {return sts ? 'green' : 'red'}

  return(
        <div className="overflow-x-auto overflow-y-auto relative">
            <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-700 uppercase">
                    <tr className={'text-indigo-600'}>
                      {headers.map((th, i) =>
                        <th key={`${th}${i}`} scope="col" className="py-3 px-6">
                            {th}
                        </th>
                      )}
                        {/*<th scope="col" className="py-3 px-6">
                            Nombre
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Cargo
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Status
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Acción
                        </th>*/}
                    </tr>
                </thead>
                <tbody className={''}>
                    {tableData.map((td, i) =>
                      <tr key={`${td}${i}`} className="bg-white border-b hover:bg-gray-100 cursor-pointer">
                          <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap ">
                              <div className="pl-3">
                                  <div className="text-base font-semibold">{td.nombre}</div>
                                  <div className="font-normal text-gray-500">{td.email}</div>
                              </div>
                          </th>
                          <td className="py-4 px-6">
                              {td.cargo}
                              {td.descripcion}
                          </td>
                          {typeTable === 'user' || typeTable ==='requerimiento' ? <td className="py-4 px-6">
                              <div className="flex items-center">
                                  <div className={`rounded-full border border-${getColorStatus(td.estado)}-500 py-1 px-2 text-${getColorStatus(td.estado)}-500`}>
                                    {td.estado ? typeTable === 'user' ? 'Habilitado' : 'Completado' : typeTable === 'user' ? 'Bloqueado' : 'Incompleto'}
                                  </div>
                              </div>
                          </td>
                          :
                          <></>
                        }
                          <td className="py-4 px-6">
                              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Modificar</a>
                          </td>
                      </tr>
                    )}
                </tbody>
            </table>
        </div>

  )
}
