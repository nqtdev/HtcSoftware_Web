import FooterWeb from './footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './buttons/ScrollToTop'
import ButtonCall from './buttons/ButtonCall'
import ButtonMail from './buttons/ButtonMail'
import HeaderWeb from './header'

function Layouts() {
  return (
    <>
      <HeaderWeb />
      <Outlet />
      <FooterWeb />
      <ScrollToTop />
      <ButtonCall phoneNumber="0848565555" />
      <ButtonMail emailAddress="kinhdoanh@htcsoftware.vn" />
    </>
  )
}
export default Layouts
