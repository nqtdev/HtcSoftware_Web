import React from 'react'
import Introduction from './Introduction'
import NavProduct from './NavProduct'
import NavSolution from './NavSolution'
import Home from './Home'
import Company from './Company'

const NavMenu = () => {
  return (
    <ul class="nav__list">
      <Home />
      <NavProduct />
      <NavSolution />
      <Introduction />
      <Company />
    </ul>
  )
}

export default NavMenu
