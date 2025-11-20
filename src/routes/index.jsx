import {createBrowserRouter} from 'react-router-dom'
import ErrorPage from 'pages/errorPage'
import Layout from 'layout/index'
import HtcEkycPlatform from 'pages/solutions/HtcEkycPlatform'
import RarEkycPlatform from 'pages/solutions/RarEkycPlatform'
import CheckIdSr from 'pages/products/checkID-SR'
import CheckIdEt from 'pages/products/checkID-ET100'
import CheckIdRt from 'pages/products/checkID-R301'
import CheckIdHn from 'pages/products/checkID-HN212'
import MetaEye from 'pages/products/meta-eye'
import HomePage from 'pages/homePage/index'
import Model from 'pages/model'
import News from 'pages/news'
import Documents from 'pages/documents'
import RarVNeidPlatform from 'pages/solutions/RarVNeidPlatform'
import NewsDetail from 'pages/news/pageNews/NewsDetail'
import ModelDetail from 'pages/model/pageModel/ModelDetail'
import DocumentsDetail from 'pages/documents/pageDocuments/DocumentsDetail'

const solutionsRoutes = [
  {path: 'HtcEkycPlatform', element: <HtcEkycPlatform />},
  {path: 'RarEkycPlatform', element: <RarEkycPlatform />},
  {path: 'RarVNeidPlatform', element: <RarVNeidPlatform />},
]

const productsRoutes = [
  {path: 'checkID-SR', element: <CheckIdSr />},
  {path: 'checkID-ET100', element: <CheckIdEt />},
  {path: 'checkID-R301', element: <CheckIdRt />},
  {path: 'checkID-HN212', element: <CheckIdHn />},
  {path: 'meta-eye', element: <MetaEye />},
]

// route con cho tin tức
const newsRoutes = [
  {path: '', element: <News />}, // /newDocuments/tin-tuc
  {path: ':id', element: <NewsDetail />}, // /newDocuments/tin-tuc/:id
]

// route con cho tài liệu
const documentRoutes = [
  {path: '', element: <Documents />}, // /newDocuments/tai-lieu
  {path: ':id', element: <DocumentsDetail />}, // /newDocuments/tai-lieu/:id
]

// nhóm newDocuments, trong đó path 'tin-tuc' dùng children từ newsRoutes
const newDocumentsRoutes = [
  {
    path: 'tin-tuc',
    children: newsRoutes,
  },
  {
    path: 'tai-lieu',
    children: documentRoutes,
  },
]

const modelsRoutes = [
  {path: '', element: <Model />},
  {path: ':id', element: <ModelDetail />},
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
      {path: 'solution', children: solutionsRoutes},
      {path: 'newDocuments', children: newDocumentsRoutes},
      {path: 'products', children: productsRoutes},
      {path: 'mo-hinh', children: modelsRoutes},
    ],
  },
  {path: '*', element: <ErrorPage />},
])

export default Routers
