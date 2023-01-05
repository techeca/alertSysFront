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
import MisRequerimientos from '../pages/MisRequerimientos'
import EditarZona from '../pages/EditarZona'
import EditarUsuario from '../pages/EditarUsuario'
import ListaZona from '../pages/ListaZonas'
import ListaUsuarios from '../pages/ListaUsuarios'
import ListaRequerimientos from '../pages/ListaRequerimientos'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="Login" element={<Login />} />
      <Route path="Status" element={<Status />} />
      <Route path="Home" element={<Home />} />
      <Route path="MisRequerimientos" element={<MisRequerimientos />} />

      <Route path="GestionUsuarios" element={<GestionUsuarios />} >
        <Route index element={<ListaUsuarios />} />
        <Route path=":usuarioEmail" element={<EditarUsuario/>} />
        <Route path="NuevoUsuario" element={<NuevoUsuario />} />
      </Route>

      <Route path="GestionZonas" element={<GestionZonas />} >
        <Route index element={<ListaZona />} />
        <Route path=":zonaID/:zonaDesc" element={<EditarZona />} />
        <Route path="NuevaZona" element={<NuevaZona />} />
      </Route>

      <Route path="GestionRequerimientos" element={<GestionRequerimientos />} >
        <Route index element={<ListaRequerimientos />} />
        <Route path="NuevoRequerimiento" element={<NuevoRequerimiento />} />
      </Route>
    </Route>
  )
)
