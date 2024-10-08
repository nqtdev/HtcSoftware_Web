import CoNavbar from 'components/CoNavbar'
import FooterWeb from './footer'
// import HeaderWeb from './header'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './buttons/ScrollToTop'
import ButtonCall from './buttons/ButtonCall'
import ButtonMail from './buttons/ButtonMail'

function Layouts() {
  return (
    <>
      <CoNavbar />
      <Outlet />
      <FooterWeb />
      <ScrollToTop />
      <ButtonCall phoneNumber="0708896666" />
      <ButtonMail emailAddress="kinhdoanh@htcsoftware.vn" />
    </>
  )
}
export default Layouts
