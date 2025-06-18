import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

const SlideSwiper = ({slides}) => {
  return (
    <div className=' py-8 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='base_title'>Các sản phẩm khác</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full'></div>
        </div>
        <div className='relative'>
          <Swiper
            breakpoints={{
              640: {slidesPerView: 1},
              768: {slidesPerView: 2},
              1024: {slidesPerView: 3},
              1280: {slidesPerView: 4},
            }}
            className='pb-12'
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className='px-2'>
                <NavLink to={slide.linkProduct} className='group'>
                  <div className='rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 h-full flex flex-col'>
                    <div className='p-4 flex-1'>
                      <div className='aspect-w-4 aspect-h-3 rounded-lg overflow-hidden'>
                        <img
                          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                          src={slide.slideContent}
                          alt={slide.slideName}
                          loading='lazy'
                        />
                      </div>
                    </div>
                    <div className='p-6 border-t border-gray-100'>
                      <h4 className='text-lg font-bold text-gray-900 line-clamp-1'>
                        {slide.slideName}
                      </h4>
                      <p className='mt-2 text-sm text-gray-500 line-clamp-2'>
                        {slide.slideDescription}
                      </p>
                      <div className='mt-4 flex items-center justify-between'>
                        <span className='text-sm font-mulish text-blue-600'>Xem chi tiết</span>
                        <svg
                          className='w-5 h-5 text-blue-400'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M14 5l7 7m0 0l-7 7m7-7H3'
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

SlideSwiper.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      slideContent: PropTypes.string.isRequired,
      slideName: PropTypes.string.isRequired,
      slideDescription: PropTypes.string.isRequired,
      linkProduct: PropTypes.string.isRequired,
    }),
  ).isRequired,
  swiperConfig: PropTypes.shape({
    spaceBetween: PropTypes.number,
    pagination: PropTypes.object,
    freeMode: PropTypes.bool,
    breakpoints: PropTypes.object,
  }),
}

SlideSwiper.defaultProps = {
  swiperConfig: {
    spaceBetween: 20,
    freeMode: true,
  },
  slides: [],
}

export default SlideSwiper
