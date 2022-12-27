import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Login from '../pages/Login'
import Home from '../pages/Home'
import Status from '../pages/Status'
import Layout from '../Layout'
import GestionUsuarios from '../pages/GestionUsuarios'
import GestionZonas from '../pages/GestionZonas'
import GestionRequerimientos from '../pages/GestionRequerimientos'
import NuevoUsuario from '../pages/NuevoUsuario'
import NuevaZona from '../pages/NuevaZona'
import NuevoRequerimiento from '../pages/NuevoRequerimiento'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="Login" element={<Login />} />
      <Route path="Status" element={<Status />} />
      <Route path="Home" element={<Home />} />
      <Route path="GestionUsuarios" element={<GestionUsuarios />} />
      <Route path="GestionUsuarios/NuevoUsuario" element={<NuevoUsuario />} />
      <Route path="GestionZonas" element={<GestionZonas />} />
      <Route path="GestionZonas/NuevaZona" element={<NuevaZona />} />
      <Route path="GestionRequerimientos" element={<GestionRequerimientos />} />
      <Route path="GestionRequerimientos/NuevoRequerimiento" element={<NuevoRequerimiento />} />
    </Route>
  )
)
