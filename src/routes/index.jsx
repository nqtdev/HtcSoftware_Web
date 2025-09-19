import {createBrowserRouter} from 'react-router-dom'
import ErrorPage from 'pages/errorPage'
import Layout from 'layout/index'
import HtcEkycPlatform from 'pages/solutions/HtcEkycPlatform'
import RarEkycPlatform from 'pages/solutions/RarEkycPlatform'
import Model from 'pages/model'
import ModelDetail from 'pages/model/pageModel/ModelDetail'
import Introduction from 'pages/NQ_57'
import CheckIdSr from 'pages/products/checkID-SR'
import CheckIdEt from 'pages/products/checkID-ET100'
import CheckIdRt from 'pages/products/checkID-R301'
import CheckIdHn from 'pages/products/checkID-HN212'
import MetaEye from 'pages/products/meta-eye'
import HomePage from 'pages/HomePage'
import BreakingNews from 'pages/news'
import AnbinhBank from 'pages/news/contentNews/anbinhBank'
import RarVNeidPlatform from 'pages/solutions/RarVNeidPlatform'

const solutionsRoutes = [
  {path: 'HtcEkycPlatform', element: <HtcEkycPlatform />},
  {path: 'RarEkycPlatform', element: <RarEkycPlatform />},
  {path: 'RarVNeidPlatform', element: <RarVNeidPlatform />},
]
const newsRoutes = [
  {path: '', element: <BreakingNews />},
  {path: 'ban-giao-thiet-bi-ABBank', element: <AnbinhBank />},
  {path: 'checkID-ET100', element: <CheckIdEt />},
]
const productsRoutes = [
  {path: 'checkID-SR', element: <CheckIdSr />},
  {path: 'checkID-ET100', element: <CheckIdEt />},
  {path: 'checkID-R301', element: <CheckIdRt />},
  {path: 'checkID-HN212', element: <CheckIdHn />},
  {path: 'meta-eye', element: <MetaEye />},
]
const modelsRoutes = [
  {path: '', element: <Model />}, // Trang danh sách mô hình
  {path: ':id', element: <ModelDetail />}, // Trang chi tiết mô hình
]
const Routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {path: 'nghiquyet-57', element: <Introduction />},
      {path: 'solution', children: solutionsRoutes},
      {path: 'breaking-news', children: newsRoutes},
      {path: 'products', children: productsRoutes},
      {path: 'mo-hinh', children: modelsRoutes},
    ],
  },
  {path: '*', element: <ErrorPage />},
])

export default Routers
