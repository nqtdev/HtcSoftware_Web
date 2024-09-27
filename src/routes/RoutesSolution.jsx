import ChipToolkit from '../pages/solutions/ChipToolkit'
import EkycPlatform from '../pages/solutions/EkycPlatform'
import RarEkyc from '../pages/solutions/RarEkyc'
import { createBrowserRouter } from 'react-router-dom'

const RoutesSolution = createBrowserRouter([
  { path: 'chip-toolkit', element: <ChipToolkit /> },
  { path: 'ekyc-platform', element: <EkycPlatform /> },
  { path: 'rar-ekyc', element: <RarEkyc /> }
])
export default RoutesSolution
