import React from 'react'
import Button from './Button.js'
import TableData from './TableData.js'

export default function Table({headers, data, typeTable, children}){
  const getColorStatus = (sts) => {return sts ? 'green' : 'red'}

  return(
        <div className="overflow-x-auto overflow-y-auto relative">
            <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-700 uppercase">
                    <tr className={'text-indigo-600'}>
                      {headers.map((th, i) =>
                        <th key={`${th}${i}`} scope="col" className="py-3 px-6">{th}</th>
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
                <tbody className={''}>{children}</tbody>
            </table>
        </div>

  )
}
