import {Outlet} from 'react-router-dom'
import AutomaticSEO from 'components/AutomaticSEO'
import ButtonCall from './buttons/ButtonCall'
import ButtonMail from './buttons/ButtonMail'
import ScrollToTop from './buttons/ScrollToTop'
import LayoutFooter from './layoutFooter'
import LayoutHeader from './layoutHeader'
import OnTop from './OnTop'

const Layout = () => {
  return (
    <>
      <AutomaticSEO />
      <OnTop />
      <header>
        <LayoutHeader />
      </header>
      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50/30'>
        <Outlet />
        <ScrollToTop />
        <ButtonCall phoneNumber='0708896666' />
        <ButtonMail emailAddress='kinhdoanh@htcsoftware.vn' />
      </div>
      <footer>
        <LayoutFooter />
      </footer>
    </>
  )
}

export default Layout
