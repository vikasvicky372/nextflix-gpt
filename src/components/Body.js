import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login'
import Browse from './Browse';

const Body = () => {

  const routerConfig = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/browse",
      element: <Browse/>
    }
  ])

  return (
    <RouterProvider router={routerConfig}>
      <div>Body</div>
    </RouterProvider>
    
  )
}

export default Body