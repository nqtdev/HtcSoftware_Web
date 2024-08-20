import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChipToolkit from './Pages/Solutions/ChipToolkit'
import EkycPlatform from './Pages/Solutions/EkycPlatform'
import RarEkyc from './Pages/Solutions/RarEkyc'
import Introduction from './Pages/Introduction'
import HomePage from './Pages/HomePage'
import CheckIdEt from './Pages/Products/CheckIdEt'
import CheckIdSr from './Pages/Products/CheckIdSr'
import MetaEye from './Pages/Products/MetaEye'
import OnTop from './OnTop'
import ButtonCall from './Components/ButtonCall'
import ButtonMail from './Components/ButtonMail'
import ScrollToTop from './Components/ScrollToTop'
import './CSS/output.css'
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
