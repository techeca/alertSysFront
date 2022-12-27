import React from 'react'
import { useFormik } from 'formik'
import Input from '../../components/form/Input.js'
import Button from '../../components/ui/Button.js'
import Card from '../../components/ui/Card.js'
import { useNavigate } from 'react-router-dom'
import { userService } from '../../services'

export default function Login(){
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: values => {
      console.log(values.email)
      console.log(values.password)
      //alert(values)
      console.log('Enviando formulario');
    return userService.login(values.email, values.password)
      .then(r => {
        console.log(`respuesta de API recibida: ${r}`);
        navigate('/Home', {replace:true})
      }).catch(err => {
        console.log(err);
      })
    }
  })
  console.log('load login');

  return(
    <div className={'h-full w-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center'}>
      <Card>
          <form onSubmit={formik.handleSubmit}>
            <h1 className={'text-3xl font-bold mb-3 text-center'}>Login</h1>
            <Input name={'email'} type={'email'} onchange={formik.handleChange} value={formik.values.email} />
            <Input name={'password'} type={'password'} onchange={formik.handleChange} value={formik.values.password} />
            {/*<Input name={'test'} type={'text'} onchange={formik.handleChange} value={formik.values.test} />*/}
            {/*<button className={`bg-indigo-500 hover:bg-pink-500 w-full text-white rounded-md p-2 mt-3 transition ease-in duration-500 font-semibold`} type={'button'}>{'test'}</button>*/}
            <Button text={'Enter'} type={'submit'} bgColor={'indigo-500'} hoverColor={'pink-500'} />
          </form>
      </Card>
    </div>
  )
}
