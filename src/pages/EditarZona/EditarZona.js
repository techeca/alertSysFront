import React from 'react'
import Input from '../../components/form/Input.js'
import Button from '../../components/ui/Button.js'
import { Link, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import { adminService } from '../../services'

export default function EditarZona(){
  let params = useParams()

  const formik = useFormik({
    initialValues: { nombre: `${params.zonaID}`, descripcion:`${params.zonaDesc.replaceAll('-', ' ')}` },
    onSubmit: values => {
      adminService.newZone(values.nombre, values.descripcion)
      .then(resp => {
        console.log(resp);
        formik.handleReset()
      }).catch(err => console.log(`Error al registrar zona: ${err}`))
      //alert(values)
    }
  })

  //{name, type, onchange, value}
  console.log('editar zona');
  console.log(params);

  return(
    <div className={`w-full bg-white`}>
      <div className={'w-full p-6'}>
        <h1 className={`text-xl text-gray-900 font-semibold mb-6`}>Editar Zona</h1>

          <form className={'flex flex-wrap bg-white rounded-md border p-3'} onSubmit={formik.handleSubmit}>
          <Input name='nombre' type='text' onchange={formik.handleChange} value={formik.values.nombre} />
          <Input name='descripcion' type='text' onchange={formik.handleChange} value={formik.values.descripcion} />

          <div className='flex w-72 pl-3 gap-3'>


              <div className='flex w-72'>
                <Button text={'Guardar'} type={'submit'} bgColor={'green-500'} hoverColor={'green-600'} />
              </div>

            <Link to={'/GestionZonas'}>
              <div className='flex w-72'>
                <Button text={'Volver'} type={'button'} bgColor={'red-500'} hoverColor={'red-600'} />
              </div>
            </Link>

          </div>
          </form>

      </div>
    </div>
  )
}
