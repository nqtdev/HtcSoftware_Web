import loading from 'assets/loading.gif'
import Layout from 'layout/index'
import ErrorPage from 'pages/errorPage'
import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
// Helper tự động thử lại khi gặp lỗi tải module động (do HMR Vite hoặc cập nhật phiên bản)
const lazyWithRetry = componentImport =>
  lazy(async () => {
    const pageHasBeenRefreshed = JSON.parse(
      window.sessionStorage.getItem('retry-lazy-refreshed') || 'false'
    )
    try {
      const component = await componentImport()
      window.sessionStorage.setItem('retry-lazy-refreshed', 'false')
      return component
    } catch (error) {
      if (!pageHasBeenRefreshed) {
        window.sessionStorage.setItem('retry-lazy-refreshed', 'true')
        window.location.reload()
        return { default: () => null }
      }
      throw error
    }
  })

// ===== Lazy pages =====
const HomePage = lazyWithRetry(() => import('pages/homePage/index'))

const HtcEkycPlatform = lazyWithRetry(() => import('pages/solutions/HtcEkycPlatform'))
const RarEkycPlatform = lazyWithRetry(() => import('pages/solutions/RarEkycPlatform'))
const RarVNeidPlatform = lazyWithRetry(() => import('pages/solutions/RarVNeidPlatform'))

const CheckIdSr = lazyWithRetry(() => import('pages/products/checkID-SR'))
const CheckIdEt = lazyWithRetry(() => import('pages/products/checkID-ET100'))
const CheckIdRt = lazyWithRetry(() => import('pages/products/checkID-R301'))
const CheckIdHn = lazyWithRetry(() => import('pages/products/checkID-HN212'))
const MetaEye = lazyWithRetry(() => import('pages/products/meta-eye'))

const News = lazyWithRetry(() => import('pages/news'))
const NewsDetail = lazyWithRetry(() => import('pages/news/pageNews/NewsDetail'))

const Documents = lazyWithRetry(() => import('pages/documents'))
const DocumentsDetail = lazyWithRetry(() => import('pages/documents/pageDocuments/DocumentsDetail'))

const Model = lazyWithRetry(() => import('pages/model'))
const ModelDetail = lazyWithRetry(() => import('pages/model/pageModel/ModelDetail'))

// Wrapper để không phải viết Suspense lặp lại
const withSuspense = element => (
  <Suspense
    fallback={
      <div className='h-screen w-full bg-[#2b013f] flex justify-center items-center'>
        <img src={loading} alt='Loading...' className='w-1/3' />
      </div>
    }
  >
    {element}
  </Suspense>
)

const solutionsRoutes = [
  {path: 'HtcEkycPlatform', element: withSuspense(<HtcEkycPlatform />)},
  {path: 'RarEkycPlatform', element: withSuspense(<RarEkycPlatform />)},
  {path: 'RarVNeidPlatform', element: withSuspense(<RarVNeidPlatform />)},
]

const productsRoutes = [
  {path: 'checkID-SR', element: withSuspense(<CheckIdSr />)},
  {path: 'checkID-ET100', element: withSuspense(<CheckIdEt />)},
  {path: 'checkID-R301', element: withSuspense(<CheckIdRt />)},
  {path: 'checkID-HN212', element: withSuspense(<CheckIdHn />)},
  {path: 'meta-eye', element: withSuspense(<MetaEye />)},
]

// route con cho tin tức
const newsRoutes = [
  {path: '', element: withSuspense(<News />)}, // /newDocuments/tin-tuc
  {path: ':id', element: withSuspense(<NewsDetail />)}, // /newDocuments/tin-tuc/:id
]

// route con cho tài liệu
const documentRoutes = [
  {path: '', element: withSuspense(<Documents />)}, // /newDocuments/tai-lieu
  {path: ':id', element: withSuspense(<DocumentsDetail />)}, // /newDocuments/tai-lieu/:id
]

// nhóm newDocuments
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
  {path: '', element: withSuspense(<Model />)},
  {path: ':id', element: withSuspense(<ModelDetail />)},
]

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: withSuspense(<HomePage />),
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
