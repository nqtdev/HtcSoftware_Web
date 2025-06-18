import ShowProducts from './ShowProducts'
import SlideSwiper from './SlideSwiper'
// import SlideSwiperConfig from './SlideSwiperConfig'
const OtherProduct = () => {
  return (
    <div className='m-auto w-5/6'>
      <SlideSwiper slides={ShowProducts} />
    </div>
  )
}

export default OtherProduct
