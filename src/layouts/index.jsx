import FooterWeb from './footer'
import HeaderWeb from './header'
import { Outlet } from 'react-router-dom'

function Layouts() {
  return (
    <>
      <HeaderWeb />
      <Outlet />
      <FooterWeb />
    </>
  )
}
export default Layouts
