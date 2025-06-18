import TableSpecification from 'components/TableSpecification'
import {DeviceParameters, DeviceParametersCamera} from './data/DeviceParameters'
import SlideProduct from './data/SlideProduct'
import imgProduct_HN from 'assets/image_products/check-id-212/banner.png'
import SlideShowSwiper from 'components/SlideShowSwiper'
import OtherProduct from 'components/otherProducts'
import HanelView from 'components/softwareInterface/HanelView'
import DataGet from 'components/softwareInterface/DataGet'
import FeaturesSection from 'components/FeaturesSection'
import Features from './data/Features'
const CheckIdHn = () => {
  return (
    <div className='bg-gradient-to-br from-slate-50 to-blue-50'>
      {/* Banner sản phẩm  */}
      <section>
        <div className='relative min-h-[80vh] w-full overflow-hidden'>
          {/* Background với overlay */}
          <div
            className='absolute inset-0 bg-bg-img-product bg-cover bg-center bg-no-repeat'
            style={{
              backgroundAttachment: 'fixed',
              filter: 'brightness(0.7) contrast(1.1)',
            }}
          >
            <div className='absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/70'></div>
          </div>

          {/* Content */}
          <div className='relative z-10 container mx-auto px-4 py-16 md:py-24 h-full flex flex-col md:flex-row items-center'>
            {/* Text Content */}
            <div className='md:w-1/2 text-center md:text-left mb-12 md:mb-0 px-4'>
              <div className='mb-8 animate-fadeIn'>
                <h1 className='text-3xl md:text-6xl 2xl:text-7xl font-bold text-white leading-tight'>
                  CCID Smartcard Reader <br />
                  <span className='bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent'>
                    (HN-212)
                  </span>
                </h1>
                <div className='mt-4 h-1 w-24 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto md:mx-0 rounded-full'></div>
              </div>
              <p className='text-lg sm:text-xl md:text-2xl text-white/90 font-medium max-w-lg mx-auto md:mx-0 animate-fadeIn delay-100'>
                Đầu Đọc Thẻ Thông Minh Nhỏ Gọn, Dễ Sử Dụng, Hiệu Quả Chi Phí Cho PC, Hỗ Trợ Thẻ ISO
                7816 Class A, B và C.
              </p>
            </div>
            {/* Image Content */}
            <div className='md:w-1/2 flex justify-center animate-float'>
              <img
                src={imgProduct_HN}
                alt='CheckID-ET100 Terminal'
                className='w-full max-w-md lg:max-w-lg xl:max-w-xl drop-shadow-2xl transition-transform duration-500 hover:scale-105'
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2 className='base_title'>Hình ảnh sản phẩm</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full'></div>
        </div>
        <div className='m-auto w-5/6'>
          <SlideShowSwiper slidesShow={SlideProduct} />
        </div>
      </section>
      {/* Chi tiết sản phẩm  */}
      <section>
        <div className='m-auto px-3 md:w-3/4 '>
          <div>
            <div className='mb-3 ml-2'>
              <i className='text-center text-2xl font-roboto text-main-colors'>
                CCID Smartcard Reader
              </i>
            </div>
            <p className='text-left font-roboto text-main-colors'>
              - CheckID-HN212 đã đạt kết quả thử nghiệm QCVN 55:2023/BTTT; QCVN 96:2025/BTTT. <br />{' '}
              - Đạt khả năng chịu nhiệt theo TCVN 7699-2-2:2021; TCVN 4255:2008; <br /> - Đạt khả
              năng chống chạm vào bộ phận mang điện IEC 60529:2001; khả năng chống xâm nhập của nước
              ip41. <br /> - Đạt được yêu cầu kỹ thuật và các tiêu chuẩn, quy chuẩn Việt Nam theo
              quyết định số 1091/QD-BTTT ký ngày 01.07.2024. <br /> - Đạt được yêu cầu dán tem của
              Trung tâm RAR-C06-BCA
            </p>
          </div>
        </div>
      </section>
      <section>
        <FeaturesSection dataFeatures={Features} />
      </section>
      <section>
        <HanelView />
      </section>
      <section>
        <DataGet />
      </section>
      <section>
        <div>
          <h2 className='base_title'>Thông số kỹ thuật thiết bị Đọc</h2>
        </div>
        <TableSpecification data={DeviceParameters} />
        <div>
          <h2 className='base_title'>Thông số kỹ thuật thiết bị Camera</h2>
        </div>
        <TableSpecification data={DeviceParametersCamera} />
      </section>
      {/* Xem thêm sản phẩm */}
      <section>
        <OtherProduct />
      </section>
    </div>
  )
}
export default CheckIdHn
