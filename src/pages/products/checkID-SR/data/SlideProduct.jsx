import img_camq from 'assets/image_products/checkID-SR/camera/1.webp'
import img_camw from 'assets/image_products/checkID-SR/camera/2.webp'
import img_came from 'assets/image_products/checkID-SR/camera/3.webp'
import img_camr from 'assets/image_products/checkID-SR/camera/4.webp'
// Thiết bị không camera
import img_nocam from 'assets/image_products/checkID-SR/un_camera/12.webp'
import img_nocamq from 'assets/image_products/checkID-SR/un_camera/13.webp'
import img_nocamw from 'assets/image_products/checkID-SR/un_camera/14.webp'
import img_nocame from 'assets/image_products/checkID-SR/un_camera/15.webp'
import img_nocamr from 'assets/image_products/checkID-SR/un_camera/16.webp'
// 2 thiết bị
import img_all from 'assets/image_products/checkID-SR/all/18.webp'
import img_allq from 'assets/image_products/checkID-SR/all/19.webp'
import img_allw from 'assets/image_products/checkID-SR/all/20.webp'

const SlideProductCam = [
  {image: img_camq, alt: 'CheckID-SR có Camera 1', slideContent: img_camq},
  {image: img_camw, alt: 'CheckID-SR có Camera 2', slideContent: img_camw},
  {image: img_camr, alt: 'CheckID-SR có Camera 3', slideContent: img_camr},
  {image: img_came, alt: 'CheckID-SR có Camera 4', slideContent: img_came},
]

const SlideProductNoCam = [
  {image: img_nocam, alt: 'CheckID-SR không Camera 1', slideContent: img_nocam},
  {image: img_nocamq, alt: 'CheckID-SR không Camera 2', slideContent: img_nocamq},
  {image: img_nocamw, alt: 'CheckID-SR không Camera 3', slideContent: img_nocamw},
  {image: img_nocame, alt: 'CheckID-SR không Camera 4', slideContent: img_nocame},
  {image: img_nocamr, alt: 'CheckID-SR không Camera 5', slideContent: img_nocamr},
]

const SlideProduct = [
  {image: img_all, alt: 'CheckID-SR so sánh 1', slideContent: img_all},
  {image: img_allw, alt: 'CheckID-SR so sánh 2', slideContent: img_allw},
  {image: img_allq, alt: 'CheckID-SR so sánh 3', slideContent: img_allq},
]

export {SlideProductCam, SlideProductNoCam, SlideProduct}
