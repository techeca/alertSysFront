import React from 'react'
import Input from '../../components/form/Input.js'
import Button from '../../components/ui/Button.js'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'

export default function NuevaZona(){

  const formik = useFormik({
    initialValues: { nombre: '', descripcion:'' },
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
        <h1 className={`text-xl text-gray-900 font-semibold mb-6`}>Agregar Nueva Zona</h1>
        <div className={'flex flex-wrap bg-white rounded-md border p-3'}>

          <Input name='nombre' type='text' onchange={formik.handleChange} value={formik.values.nombre} />
          <Input name='descripcion' type='text' onchange={formik.handleChange} value={formik.values.descripcion} />

        </div>



        <div className='flex w-72 pl-3 gap-3'>

          <Link to={''}>
            <div className='flex w-72'>
              <Button text={'Guardar'} type={'button'} bgColor={'green-500'} hoverColor={'green-600'} />
            </div>
          </Link>

          <Link to={'/GestionZonas'}>
            <div className='flex w-72'>
              <Button text={'Volver'} type={'button'} bgColor={'red-500'} hoverColor={'red-600'} />
            </div>
          </Link>

        </div>

      </div>
    </div>
  )
}
