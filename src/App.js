import React from 'react'
import { router } from './routes/Routes.js'
import { RouterProvider } from "react-router-dom";
import Layout from './Layout'
import { ProvideAuth } from './context/AuthContext.js'

export default function App(){

  return(
      <RouterProvider router={router} />
  )
}
