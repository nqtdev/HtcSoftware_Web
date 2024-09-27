import Introduction from '../pages/Introduction'
import { createBrowserRouter } from 'react-router-dom'
import RoutesSolution from './RoutesSolution'
import RoutesProduct from './RoutesProduct'
import HomePage from '../pages/HomePage'

const routers = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: 'solution', element: <RoutesSolution /> },
  { path: 'introduction', element: <Introduction /> },
  { path: 'product', element: <RoutesProduct /> }
])
export default routers
