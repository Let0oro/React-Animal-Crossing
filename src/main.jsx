import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from "./components/NotFound/NotFound"
import App from './App.jsx'
import './index.css'
// import { ACContext } from './context/context'

const router = createBrowserRouter([
  {path: '/', element: <App />, errorElement: <NotFound />,  children: [
  ]},
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
