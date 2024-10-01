import React from 'react'

const NavProduct = () => {
  return (
    <li class="dropdown__item">
      <div class="nav__link dropdown__button">
        Resources <i class="ri-arrow-down-s-line dropdown__arrow"></i>
      </div>
      <div class="dropdown__container">
        <div class="dropdown__content">
          <div class="dropdown__group">
            <div class="dropdown__icon">
              <i class="ri-code-line"></i>
            </div>

            <span class="dropdown__title">Web templates</span>

            <ul class="dropdown__list">
              <li>
                <a href="#" class="dropdown__link">
                  Free templates
                </a>
              </li>
              <li>
                <a href="#" class="dropdown__link">
                  Premium templates
                </a>
              </li>
            </ul>
          </div>

          <div class="dropdown__group">
            <div class="dropdown__icon">
              <i class="ri-pen-nib-line"></i>
            </div>

            <span class="dropdown__title">Designs</span>

            <ul class="dropdown__list">
              <li>
                <a href="#" class="dropdown__link">
                  Web designs
                </a>
              </li>
              <li>
                <a href="#" class="dropdown__link">
                  App designs
                </a>
              </li>
              <li>
                <a href="#" class="dropdown__link">
                  Component design
                </a>
              </li>
            </ul>
          </div>

          <div class="dropdown__group">
            <div class="dropdown__icon">
              <i class="ri-apps-2-line"></i>
            </div>

            <span class="dropdown__title">Others</span>

            <ul class="dropdown__list">
              <li>
                <a href="#" class="dropdown__link">
                  Recent blogs
                </a>
              </li>
              <li>
                <a href="#" class="dropdown__link">
                  Tutorial videos
                </a>
              </li>
              <li>
                <a href="#" class="dropdown__link">
                  Webinar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  )
}

export default NavProduct
