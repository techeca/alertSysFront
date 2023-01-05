import React from 'react'
import Input from '../../components/form/Input.js'
import Select from '../../components/form/Select.js'
import Button from '../../components/ui/Button.js'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { EXAMPLE_DATA } from '../../data/constants.js'

export default function NuevoRequerimiento(){
  const data = EXAMPLE_DATA
  //const niveles = EXAMPLE_DATA.zonas.map(n => n.nombre)
  //console.log(niveles);

  const formik = useFormik({
    initialValues: { nombre: '', descripcion:'', tecnico:'', descripcion:'', zona:'' , estado:false, nivel:'' },
    onSubmit: values => {
      values.nivel === 0 || values.tecnico === 0 || values.zona === 0 ? console.log('Debe seleccionar ') : console.log(values);;
      console.log(values.nombre)
    }
  })

  return(
    <div className={`w-full bg-white`}>
      <div className={'w-full md:p-6'}>
        <h1 className={`text-xl text-gray-900 font-semibold mb-6`}>Nuevo Requerimiento</h1>
        <div className={'flex flex-wrap bg-white rounded-md border p-3'}>

          <Input name='nombre' type='text' onchange={formik.handleChange} value={formik.values.nombre} />
          <Input name='descripcion' type='text' onchange={formik.handleChange} value={formik.values.descripcion} />
          <div className={'m-3 w-full text-gray-400'}>
            <Select onchange={formik.handleChange} value={formik.values.nivel} options={EXAMPLE_DATA.optionsReq} foption={'Seleccionar Nivel'}/>
          </div>
          {/*<div className={'m-3 w-full text-gray-400'}>
            <select className={'px-3 p-2 w-full rounded-md border bg-white'}>
              <option className={'text-gray-500'}>Seleccionar Técnico</option>
              {data.users.filter(u => u.estado).map((u, i) =>
                <option key={`${u}${i}`} className={'text-gray-500'}>{u.nombre}</option>
              )}
            </select>
          </div>*/}
          <div className={'m-3 w-full text-gray-400'}>
            <Select onchange={formik.handleChange} value={formik.values.zona} options={EXAMPLE_DATA.zonas.map(n => n.nombre)} foption={'Seleccionar Zona'} />
          </div>
        </div>

        <div className='flex w-72 pl-3 gap-3'>
          <Link to={''}>
            <div className='flex w-72'>
              <Button text={'Guardar'} type={'button'} bgColor={'green-500'} hoverColor={'green-600'} />
            </div>
          </Link>
          <Link to={'/MisRequerimientos'}>
            <div className='flex w-72'>
              <Button text={'Volver'} type={'button'} bgColor={'red-500'} hoverColor={'red-600'} />
            </div>
          </Link>
        </div>

      </div>
    </div>
  )
}
