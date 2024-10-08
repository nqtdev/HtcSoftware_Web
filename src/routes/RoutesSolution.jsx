import { Outlet } from 'react-router-dom'
import ChipToolkit from '../pages/solutions/ChipToolkit'
import EkycPlatform from '../pages/solutions/EkycPlatform'
import RarEkyc from '../pages/solutions/RarEkyc'
import Layouts from '../layouts'

const RoutesSolution = [
  {
    path: 'solution',
    element: <Layouts />,
    children: [
      { path: 'chip-toolkit', element: <ChipToolkit /> },
      { path: 'ekyc-platform', element: <EkycPlatform /> },
      { path: 'rar-ekyc', element: <RarEkyc /> }
    ]
  }
]
export default RoutesSolution
