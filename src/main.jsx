import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChipToolkit from './pages/solutions/ChipToolkit'
import EkycPlatform from './pages/solutions/EkycPlatform'
import RarEkyc from './pages/solutions/RarEkyc'
import Introduction from './pages/Introduction'
import HomePage from './pages/HomePage'
import CheckIdEt from './pages/products/CheckIdEt'
import CheckIdSr from './pages/products/CheckIdSr'
import MetaEye from './pages/products/MetaEye'
import OnTop from './OnTop'
import ButtonCall from './components/buttons/ButtonCall'
import ButtonMail from './components/buttons/ButtonMail'
import ScrollToTop from './components/buttons/ScrollToTop'
import './css/output.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <OnTop />
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/chip-toolkit" element={<ChipToolkit />} />
          <Route path="/ekyc-platform" element={<EkycPlatform />} />
          <Route path="/rar-ekyc" element={<RarEkyc />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/checkid-sr" element={<CheckIdSr />} />
          <Route path="/checkid-et100" element={<CheckIdEt />} />
          <Route path="/meta-eye" element={<MetaEye />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
    <ButtonCall phoneNumber="0708896666" />
    <ButtonMail emailAddress="kinhdoanh@htcsoftware.vn" />
  </React.StrictMode>
)
