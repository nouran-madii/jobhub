import React from 'react'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './Components/NotFound/NotFound'

let routers = createBrowserRouter([
  {path:'/' , element:<Layout/> , children:[
    {index:true , element:<Home/>},
    {path:'*' , element:<NotFound/>}
  ]}
])

export default function App() {
  return <RouterProvider router={routers}/>
}

