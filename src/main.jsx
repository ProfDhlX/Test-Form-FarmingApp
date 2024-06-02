import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Signup from './Components/Signup/Signup.jsx'
import Login from './Components/Login/Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)