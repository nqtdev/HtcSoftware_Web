import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChipToolkit from './pages/solutions/ChipToolkit.jsx'
import EkycPlatform from './pages/solutions/EkycPlatform.jsx'
import RarEkyc from './pages/solutions/RarEkyc.jsx'
import Introduction from './pages/Introduction.jsx'
import HomePage from './pages/HomePage.jsx'
import CheckIdEt from './pages/products/checkId_et'
import CheckIdSr from './pages/products/checkId_sr'
import MetaEye from './pages/products/metaEye'
import OnTop from 'components/OnTop'
import './css/output.css'
import ScrollToTop from './layouts/buttons/ScrollToTop.jsx'
import ButtonCall from './layouts/buttons/ButtonCall.jsx'
import ButtonMail from './layouts/buttons/ButtonMail.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <OnTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="solution">
            <Route path="chip-toolkit" element={<ChipToolkit />} />
            <Route path="ekyc-platform" element={<EkycPlatform />} />
            <Route path="rar-ekyc" element={<RarEkyc />} />
          </Route>
          <Route path="introduction" element={<Introduction />} />
          <Route path="products">
            <Route path="checkid-sr" element={<CheckIdSr />} />
            <Route path="checkid-et100" element={<CheckIdEt />} />
            <Route path="meta-eye" element={<MetaEye />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    <ScrollToTop />
    <ButtonCall phoneNumber="0708896666" />
    <ButtonMail emailAddress="kinhdoanh@htcsoftware.vn" />
  </React.StrictMode>
)
