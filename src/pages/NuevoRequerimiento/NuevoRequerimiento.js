import React from 'react'
import Input from '../../components/form/Input.js'
import Button from '../../components/ui/Button.js'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { EXAMPLE_DATA } from '../../data/constants.js'

export default function NuevoRequerimiento(){
  const data = EXAMPLE_DATA

  const formik = useFormik({
    initialValues: { nombre: '', descripcion:'', tecnico:'', descripcion:'', zona:'' , estado:false, nivel:'' },
    onSubmit: values => {
      values.nivel === 0 || values.tecnico === 0 || values.zona === 0 ? console.log('Debe seleccionar ') : console.log(values);;
      console.log(values.nombre)
      //alert(values)
    }
  })

  //{name, type, onchange, value}

  return(
    <div className={`w-full bg-white`}>
      <div className={'w-full md:p-6'}>
        <h1 className={`text-xl text-gray-900 font-semibold mb-6`}>Nuevo Requerimiento</h1>
        <div className={'flex flex-wrap bg-white rounded-md border p-3'}>

          <Input name='nombre' type='text' onchange={formik.handleChange} value={formik.values.nombre} />
          <Input name='descripcion' type='text' onchange={formik.handleChange} value={formik.values.descripcion} />
          <div className={'m-3 w-full text-gray-400'}>
            <select id={'nivel'} name={'nivel'} className={'px-3 p-2 w-full rounded-md border bg-white'} onChange={formik.handleChange} value={formik.values.nivel} placeholder='holaS'>
                <option className={'text-gray-500'}>Seleccionar Nivel</option>
                <option className={'text-gray-500'}>Bajo</option>
                <option className={'text-gray-500'}>Medio</option>
                <option className={'text-gray-500'}>Alto</option>
            </select>
          </div>
          {/*<div className='flex w-full'>
          <Input name='password' type='password' onchange={formik.handleChange} value={formik.values.password} />
          <Input name='re-password' type='password' onchange={formik.handleChange} value={formik.values.repassword} />
          </div>*/}

          <div className={'m-3 w-full text-gray-400'}>
            <select className={'px-3 p-2 w-full rounded-md border bg-white'}>
              <option className={'text-gray-500'}>Seleccionar Técnico</option>
              {data.users.filter(u => u.estado).map((u, i) =>
                <option key={`${u}${i}`} className={'text-gray-500'}>{u.nombre}</option>
              )}

            </select>
          </div>
          <div className={'m-3 w-full text-gray-400'}>
            <select className={'px-3 p-2 w-full rounded-md border bg-white'}>
              <option className={'text-gray-500'}>Seleccionar Zona</option>
              {data.zonas.map((z, i) =>
                <option key={`${z}${i}`} className={'text-gray-500'}>{z.nombre}</option>
              )}
            </select>
          </div>
        </div>



        <div className='flex w-72 pl-3 gap-3'>

          <Link to={''}>
            <div className='flex w-72'>
              <Button text={'Guardar'} type={'button'} bgColor={'green-500'} hoverColor={'green-600'} />
            </div>
          </Link>

          <Link to={'/GestionRequerimientos'}>
            <div className='flex w-72'>
              <Button text={'Volver'} type={'button'} bgColor={'red-500'} hoverColor={'red-600'} />
            </div>
          </Link>

        </div>

      </div>
    </div>
  )
}
