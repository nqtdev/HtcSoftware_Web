import React from 'react'

const NavSolution = () => {
  return (
    <li class="dropdown__item">
      <div class="nav__link dropdown__button">
        Discover <i class="ri-arrow-down-s-line dropdown__arrow"></i>
      </div>
      <div class="dropdown__container">
        <div class="dropdown__content">
          <div class="dropdown__group">
            <div class="dropdown__icon">
              <i class="ri-flashlight-line"></i>
            </div>

            <span class="dropdown__title">Most viewed courses</span>

            <ul class="dropdown__list">
              <li>
                <a href="#" class="dropdown__link">
                  HTML for beginners
                </a>
              </li>
              <li>
                <a href="#" class="dropdown__link">
                  Advanced CSS
                </a>
              </li>
              <li>
                <a href="#" class="dropdown__link">
                  JavaScript OOP
                </a>
              </li>
            </ul>
          </div>

          <div class="dropdown__group">
            <div class="dropdown__icon">
              <i class="ri-heart-3-line"></i>
            </div>

            <span class="dropdown__title">Popular courses</span>

            <ul class="dropdown__list">
              <li>
                <a href="#" class="dropdown__link">
                  Development with Flutter
                </a>
              </li>
              <li>
                <a href="#" class="dropdown__link">
                  Web development with React
                </a>
              </li>
              <li>
                <a href="#" class="dropdown__link">
                  Backend development expert
                </a>
              </li>
            </ul>
          </div>

          <div class="dropdown__group">
            <div class="dropdown__icon">
              <i class="ri-book-mark-line"></i>
            </div>

            <span class="dropdown__title">Careers</span>

            <ul class="dropdown__list">
              <li>
                <a href="#" class="dropdown__link">
                  Web development
                </a>
              </li>
              <li>
                <a href="#" class="dropdown__link">
                  Applications development
                </a>
              </li>
              <li>
                <a href="#" class="dropdown__link">
                  UI/UX design
                </a>
              </li>
              <li>
                <a href="#" class="dropdown__link">
                  Informatic security
                </a>
              </li>
            </ul>
          </div>

          <div class="dropdown__group">
            <div class="dropdown__icon">
              <i class="ri-file-paper-2-line"></i>
            </div>

            <span class="dropdown__title">Certifications</span>

            <ul class="dropdown__list">
              <li>
                <a href="#" class="dropdown__link">
                  Course certificates
                </a>
              </li>
              <li>
                <a href="#" class="dropdown__link">
                  Free certifications
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  )
}

export default NavSolution
