
// Thiết bị có camera
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

// Cả 2 thiết bị (Toàn cảnh)
import img_all from 'assets/image_products/checkID-SR/all/18.webp'
import img_allq from 'assets/image_products/checkID-SR/all/19.webp'
import img_allw from 'assets/image_products/checkID-SR/all/20.webp'

// Class css chung cho khung chứa ảnh để tránh lặp lại code (DRY)
const imageWrapperClass = 'w-full h-[200px] md:h-[280px] flex items-center justify-center overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 p-2';
const imageClass = 'max-h-full max-w-full object-contain';

const Testimonials = [
  {
    id: 1,
    name: 'CheckID-SR (Toàn cảnh)',
    designation: 'Mặt trước và mặt nghiêng hai phiên bản',
    images: [img_all, img_allq, img_allw], // Gom nhóm ảnh để dùng cho Slider nếu cần
    content: (
      <div className={imageWrapperClass}>
        <img src={img_all} alt='CheckID-SR Comparison' className={imageClass} />
      </div>
    ),
  },
  {
    id: 2,
    name: 'CheckID-SR (Có Camera - Góc thẳng)',
    designation: 'Mặt trước tích hợp camera nhận diện',
    images: [img_camq, img_camw, img_came, img_camr],
    content: (
      <div className={imageWrapperClass}>
        <img src={img_camq} alt='CheckID-SR with Camera Front' className={imageClass} />
      </div>
    ),
  },
  {
    id: 3,
    name: 'CheckID-SR (Có Camera - Góc nghiêng)',
    designation: 'Góc nghiêng sang trọng, tinh tế',
    content: (
      <div className={imageWrapperClass}>
        <img src={img_camw} alt='CheckID-SR with Camera Angle' className={imageClass} />
      </div>
    ),
  },
  {
    id: 4,
    name: 'CheckID-SR (Có Camera - Chi tiết)',
    designation: 'Cận cảnh chi tiết cụm camera',
    content: (
      <div className={imageWrapperClass}>
        <img src={img_came} alt='CheckID-SR with Camera Detail' className={imageClass} />
      </div>
    ),
  },
  {
    id: 5,
    name: 'CheckID-SR (Không Camera - Góc thẳng)',
    designation: 'Mặt trước phiên bản tiêu chuẩn',
    images: [img_nocam, img_nocamq, img_nocamw, img_nocame, img_nocamr],
    content: (
      <div className={imageWrapperClass}>
        <img src={img_nocam} alt='CheckID-SR without Camera Front' className={imageClass} />
      </div>
    ),
  },
  {
    id: 6,
    name: 'CheckID-SR (Không Camera - Góc nghiêng)',
    designation: 'Thiết kế mặt nghiêng tinh tế',
    content: (
      <div className={imageWrapperClass}>
        <img src={img_nocamw} alt='CheckID-SR without Camera Angle' className={imageClass} />
      </div>
    ),
  },
  {
    id: 7,
    name: 'CheckID-SR (Không Camera - Mặt sau)',
    designation: 'Hoàn thiện sắc sảo đến từng chi tiết',
    content: (
      <div className={imageWrapperClass}>
        <img src={img_nocame} alt='CheckID-SR without Camera Back' className={imageClass} />
      </div>
    ),
  }
]

export default Testimonials
