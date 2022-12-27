import React from 'react'
import { router } from './routes/routes.js'
import { RouterProvider } from "react-router-dom";
import Layout from './Layout'

export default function App(){

  return(
      <RouterProvider router={router} />
  )
}
