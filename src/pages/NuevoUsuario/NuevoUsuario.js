import React from 'react'
import Input from '../../components/form/Input.js'
import Button from '../../components/ui/Button.js'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { adminService } from '../../services'
import useToast from '../../hooks/useToast.js'

export default function NuevoUsuario(){
  const mitoaster = useToast()

  const formik = useFormik({
    initialValues: { nombre: '', email:'', cargo:'', rut:'', password:'', repassword:'' },
    onSubmit: values => {
      console.log(values.nombre)
      //alert(values)
      console.log('Enviando formulario');
      adminService.newUser(values.email, values.password, values.nombre, values.cargo, true, values.rut)
      .then(resp => {
        console.log('hola?');
        console.log(resp);
      }).catch(err => {
        console.log(err);
        mitoaster.addToast(err, 'DANGER')
      })
    }
  })
  //{name, type, onchange, value}

  return(
    <div className={`w-full bg-white`}>
      <div className={'w-full md:p-6'}>
        <h1 className={`text-xl text-gray-900 font-semibold mb-6`}>Agregar Nuevo Usuario</h1>
        <form className={'flex flex-wrap bg-white rounded-md border p-3'} onSubmit={formik.handleSubmit}>

          <Input name='nombre' type='text' onchange={formik.handleChange} value={formik.values.nombre} />
          <Input name='rut' type='text' onchange={formik.handleChange} value={formik.values.rut} />

          <div className='flex flex-col md:flex-row'>
          <Input name='password' type='password' onchange={formik.handleChange} value={formik.values.password} />
          <Input name='repassword' type='password' onchange={formik.handleChange} value={formik.values.repassword} />
          </div>

          <Input name='email' type='text' onchange={formik.handleChange} value={formik.values.email} />
          <Input name='cargo' type='text' onchange={formik.handleChange} value={formik.values.cargo} />

          <div className='flex pl-3 gap-3'>

              <div className='flex md:w-72 w-48'>
                <Button text={'Guardar'} type={'submit'} bgColor={'green-500'} hoverColor={'green-600'} />
              </div>

            <Link to={'/GestionUsuarios'}>
              <div className='flex md:w-72 w-48'>
                <Button text={'Volver'} type={'button'} bgColor={'red-500'} hoverColor={'red-600'} />
              </div>
            </Link>

          </div>
        </form>

      </div>
    </div>
  )
}
