import React, { useContext, useEffect } from 'react'
import Card from '../../components/ui/Card.js'
import Button from '../../components/ui/Button.js'
import Table from '../../components/ui/Table.js'
import { Link, Outlet } from "react-router-dom";
import ContextUser from '../../context/UserContext'

export default function Home(){
  const cntxt = useContext(ContextUser)
  //let dash = cntxt.userData.getDashboard(cntxt.userData.userValue.name)
  const tableHeaders = ['Nombre', 'Cargo', 'Status', 'Acción']
  const tableData = [
    {nombre: 'Neil Sims', email:'neil.sims@email.com', cargo:'React Developer', estado:true},
    {nombre: 'Shrek', email:'shrek@email.com', cargo:'Backend Developer', estado:false}
  ]
  //console.log(cntxt);
  //console.log(cntxt.userData.getDashboard());

  return(
    cntxt.userData ?
    <div className={'w-full'}>

      {/*Resumen en numeros*/}
      <div className={'flex md:flex-row sm:flex-row items-center sm:justify-center flex-col md:justify-around py-3'}>

        {/*total de requerimientos*/}
        <div className={'w-52'}>
          <Card>
            <div className={'gap-3 flex flex-col text-center'}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#00f0" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="self-center w-12 h-12 flex-shrink-0 transition duration-75 text-indigo-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
              </svg>
              <p className={'text-gray-500'}>Requerimientos</p>
              {/*<Button text={'Ir'} type={'button'} bgColor={'blue-500'} hoverColor={'blue-400'} />*/}
              <h1 className={`text-4xl text-indigo-600`}>{cntxt.userData.getDashboard(cntxt.userData.userValue.name).req}</h1>
            </div>
          </Card>
        </div>
        {/*total de usuarios*/}
        <div className={'w-52'}>
          <Card>
            <div className={'gap-3 flex flex-col text-center'}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#00f0" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="self-center w-12 h-12 flex-shrink-0 transition duration-75 text-indigo-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
              <p className={'text-gray-500'}>Usuarios</p>
              {/*<Button text={'Ir'} type={'button'} bgColor={'blue-500'} hoverColor={'blue-400'} />*/}
              <h1 className={`text-4xl text-indigo-600`}>{cntxt.userData.getDashboard(cntxt.userData.userValue.name).users}</h1>
            </div>
          </Card>
        </div>
        {/*total de Zonas*/}
        <div className={'w-52'}>
          <Card>
            <div className={'gap-3 flex flex-col text-center'}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#00f0" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="self-center w-12 h-12 flex-shrink-0 transition duration-75 text-indigo-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
              </svg>
              <p className={'text-gray-500'}>Zonas</p>
              {/*<Button text={'Ir'} type={'button'} bgColor={'blue-500'} hoverColor={'blue-400'} />*/}
              <h1 className={`text-4xl text-indigo-600`}>{cntxt.userData.getDashboard(cntxt.userData.userValue.name).zonas}</h1>
            </div>
          </Card>
        </div>

      </div>

      {/*Últimos 10 usuarios registrados*/}
      <div className={'w-full px-0 md:px-6'}>
        <div className={'flex bg-white flex-col p-6 rounded-md m-3 border'}>
          <h1 className={`text-xl text-gray-900 font-semibold mb-3`}>Usuarios Recientes</h1>
          <Table headers={tableHeaders} tableData={tableData} />

          <Button text={'Ver todos los Usuarios'} type={'button'} bgColor={'indigo-500'} hoverColor={'indigo-600'} />
      </div>
      </div>

      {/*<div className={'w-full px-2 px-3'}>
        <div className={'flex bg-white flex-col p-6 rounded-md m-3 border'}>
          <h1 className={`text-xl text-gray-900 font-semibold mb-3`}>Usuarios Recientes</h1>
          <div className="overflow-x-auto relative">
              <table className="w-full text-sm text-left">
                  <thead className="text-xs text-gray-700 uppercase">
                      <tr className={'text-indigo-600'}>
                          <th scope="col" className="py-3 px-6">
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
                          </th>
                      </tr>
                  </thead>
                  <tbody className={''}>
                      <tr className="bg-white border-b hover:bg-gray-100 cursor-pointer">
                          <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap ">
                              <div className="pl-3">
                                  <div className="text-base font-semibold">Neil Sims</div>
                                  <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                              </div>
                          </th>
                          <td className="py-4 px-6">
                              React Developer
                          </td>
                          <td className="py-4 px-6">
                              <div className="flex items-center">
                                  <div className="rounded-full border border-green-500 py-1 px-2 text-green-500">Habilitado</div>
                              </div>
                          </td>
                          <td className="py-4 px-6">
                              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Modificar</a>
                          </td>
                      </tr>



                  </tbody>
              </table>
          </div>
          <Button text={'Ver todos los Usuarios'} type={'button'} bgColor={'indigo-500'} hoverColor={'indigo-600'} />
        </div>
      </div>*/}

    </div>
    :
    <></>
  )
}
