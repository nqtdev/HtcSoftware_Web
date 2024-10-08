import { Outlet } from 'react-router-dom'
import CheckIdEt from '../pages/products/checkId_et'
import CheckIdSr from '../pages/products/checkId_sr'
import MetaEye from '../pages/products/metaEye'
import Layouts from '../layouts'

const RoutesProduct = [
  {
    path: 'product',
    element: <Layouts />,
    children: [
      { path: 'checkid-et100', element: <CheckIdEt /> },
      { path: 'meta-eye', element: <MetaEye /> },
      { path: 'checkid-sr', element: <CheckIdSr /> }
    ]
  }
]
export default RoutesProduct
