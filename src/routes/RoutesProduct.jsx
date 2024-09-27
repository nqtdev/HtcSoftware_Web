import CheckIdEt from '../pages/products/checkId_et'
import CheckIdSr from '../pages/products/checkId_sr'
import MetaEye from '../pages/products/metaEye'
import { createBrowserRouter } from 'react-router-dom'

const RoutesProduct = createBrowserRouter([
  { path: 'checkid-sr', element: <CheckIdSr /> },
  { path: 'checkid-et100', element: <CheckIdEt /> },
  { path: 'meta-eye', element: <MetaEye /> }
])
export default RoutesProduct
