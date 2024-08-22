import React from "react"
import ReactDOOM from "react-dom/client"
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Sobre from "/1espx/WedDev/2 Semestre/vite-project/src/pages/Sobre.jsx"

const router = createBrowserRouter([
{
  path: "/",
  element: <App/>,
  children:[
    {path: "sobre", element: <Sobre/>}
  ]
},
{
  path: "/sobre",
  element: <Sobre/>
}

])



ReactDOOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
