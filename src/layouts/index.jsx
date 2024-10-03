import CoNavbar from 'components/CoNavbar'
import FooterWeb from './footer'
// import HeaderWeb from './header'
import { Outlet } from 'react-router-dom'

function Layouts() {
  return (
    <>
      <CoNavbar />
      <Outlet />
      <FooterWeb />
    </>
  )
}
export default Layouts
