import React from 'react'
import Input from '../../components/form/Input.js'
import Button from '../../components/ui/Button.js'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'

export default function NuevoUsuario(){

  const formik = useFormik({
    initialValues: { nombre: '', email:'', cargo:'', rut:'', password:'', repassword:'' },
    onSubmit: values => {
      console.log(values.nombre)
      //alert(values)
      console.log('Enviando formulario');
    }
  })

  //{name, type, onchange, value}

  return(
    <div className={`w-full bg-white`}>
      <div className={'w-full md:p-6'}>
        <h1 className={`text-xl text-gray-900 font-semibold mb-6`}>Agregar Nuevo Usuario</h1>
        <div className={'flex flex-wrap bg-white rounded-md border p-3'}>

          <Input name='nombre' type='text' onchange={formik.handleChange} value={formik.values.nombre} />
          <Input name='rut' type='text' onchange={formik.handleChange} value={formik.values.rut} />

          <div className='flex w-full'>
          <Input name='password' type='password' onchange={formik.handleChange} value={formik.values.password} />
          <Input name='re-password' type='password' onchange={formik.handleChange} value={formik.values.repassword} />

          </div>

          <Input name='email' type='text' onchange={formik.handleChange} value={formik.values.email} />
          <Input name='cargo' type='text' onchange={formik.handleChange} value={formik.values.cargo} />
        </div>



        <div className='flex w-72 pl-3 gap-3'>

          <Link to={''}>
            <div className='flex w-72'>
              <Button text={'Guardar'} type={'button'} bgColor={'green-500'} hoverColor={'green-600'} />
            </div>
          </Link>

          <Link to={'/GestionUsuarios'}>
            <div className='flex w-72'>
              <Button text={'Volver'} type={'button'} bgColor={'red-500'} hoverColor={'red-600'} />
            </div>
          </Link>

        </div>

      </div>
    </div>
  )
}
