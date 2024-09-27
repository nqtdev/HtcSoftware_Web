import CoNavbar from 'components/CoNavbar'
import FooterWeb from './layouts/footer'
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
