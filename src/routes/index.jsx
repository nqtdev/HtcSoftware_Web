import Introduction from '../pages/Introduction'
import { createBrowserRouter } from 'react-router-dom'
import RoutesSolution from './RoutesSolution'
import RoutesProduct from './RoutesProduct'
import HomePage from '../pages/HomePage'
import Layouts from '../layouts'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'product', element: <RoutesProduct /> },
      { path: 'solution', element: <RoutesSolution /> },
      { path: 'introduction', element: <Introduction /> }
    ]
  }
])
export default routers
