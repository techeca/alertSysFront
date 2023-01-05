import React from 'react'

export default function TableData({data, type, name}){
  const getColorStatus = (sts) => {return sts ? 'green' : 'red'}

  return(
    type === 'double' ?
    <td className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap ">
        <div className="pl-3">
            <div className="text-base font-semibold">{data[0]}</div>
            <div className="font-normal text-gray-500">{data[1]}</div>
        </div>
    </td>
    :
    type === 'status' ?
    <td className="py-4 px-6">
        <div className="flex items-center">
            <div className={`rounded-full border border-${getColorStatus(data)}-500 py-1 px-2 text-${getColorStatus(data)}-500`}>
              {data ? name === 'user' ? 'Habilitado' : 'Completado' : data === 'user' ? 'Bloqueado' : 'Incompleto'}
            </div>
        </div>
    </td>
    :
      <td className="py-4 px-6">{data}</td>
  )
}
