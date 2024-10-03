import React, { useState } from 'react'
import '../../scss/styles.scss'
import NavMenu from './navMenu'
import logo from 'assets/logo/logo_sw.png'
const HeaderWeb = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Hàm để toggle menu
  const toggleMenu = () => {
    console.log(toggleMenu)
    setIsOpen(!isOpen)
  }

  // Hàm để đóng menu
  // const closeMenu = () => {
  //   setIsOpen(false)
  // }
  return (
    <header class="header">
      <nav class="nav container ">
        <div class="nav__data">
          <a href="#" class="nav__logo">
            <img
              src={logo}
              className="w-1/3 md:w-1/2"
              alt="htc software logo"
            />
          </a>
          <div class="nav__toggle">
            <i onClick={toggleMenu} class="ri-menu-line nav__toggle-menu"></i>
            <i class="ri-close-line nav__toggle-close"></i>
          </div>
        </div>
        <div class="nav__menu" id="nav-menu">
          <NavMenu />
        </div>
      </nav>
    </header>
  )
}

export default HeaderWeb
