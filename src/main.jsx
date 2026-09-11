import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {HelmetProvider} from 'react-helmet-async'
import {RouterProvider} from 'react-router-dom'
import Routers from 'routes'
import './css/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={Routers} />
    </HelmetProvider>
  </StrictMode>,
)
