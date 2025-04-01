import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/output.css'
import { RouterProvider } from 'react-router-dom'
import Routers from './router/index'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Routers} />
  </StrictMode>
)
