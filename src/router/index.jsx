import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from 'components/ComingSoon'
import Layout from 'layouts/index'
import HomePage from 'pages/HomePage'
import Introduction from 'pages/NQ_57'

// Solutions Pages
import ChipToolkit from 'pages/solutions/ChipToolkit'
import EkycPlatform from 'pages/solutions/EkycPlatform'
import RarEkyc from 'pages/solutions/RarEkyc'

// Products Pages
import CheckIdSr from 'pages/products/check-id-sr'
import CheckIdEt from 'pages/products/check-id-et'
import CheckIdRt from 'pages/products/check-id-r301'
import CheckIdHn from 'pages/products/check-id-hn212'
import MetaEye from 'pages/products/meta-eye'

// Model Pages
import Model from 'pages/model'
import ModelDetail from 'pages/model/pageModel/ModelDetail'

const solutionsRoutes = [
  { path: 'chip-toolkit', element: <ChipToolkit /> },
  { path: 'ekyc-platform', element: <EkycPlatform /> },
  { path: 'rar-ekyc', element: <RarEkyc /> }
]

const productsRoutes = [
  { path: 'check-id-sr', element: <CheckIdSr /> },
  { path: 'check-id-et100', element: <CheckIdEt /> },
  { path: 'check-id-r301', element: <CheckIdRt /> },
  { path: 'check-id-hn212', element: <CheckIdHn /> },
  { path: 'meta-eye', element: <MetaEye /> }
]

const modelsRoutes = [
  { path: '', element: <Model /> }, // Trang danh sách mô hình
  { path: ':id', element: <ModelDetail /> } // Trang chi tiết mô hình
]

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: 'nghiquyet-57', element: <Introduction /> },
      { path: 'solution', children: solutionsRoutes },
      { path: 'products', children: productsRoutes },
      { path: 'mo-hinh', children: modelsRoutes }
    ]
  },
  { path: '*', element: <ErrorPage /> }
])

export default Routers
