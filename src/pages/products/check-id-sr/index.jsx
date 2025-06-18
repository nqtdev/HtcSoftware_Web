import TableSpecification from 'components/TableSpecification'
import DeviceParameters from './data/DeviceParameters'
import imgProduct_SR from 'assets/image_products/check-id-sr/banner.webp'
import TabShowDevice from './tabShowDevice'
import OtherProduct from 'components/otherProducts'
import MobileIDView from 'components/softwareInterface/MobileIdView'
import DataGetSR from 'components/softwareInterface/DataGetSR'
import FeaturesSection from 'components/FeaturesSection'
import Features from './data/Features'

const CheckIdSr = () => {
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
                  ID Card Reader <br />
                  <span className='bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent'>
                    (CheckID-SR)
                  </span>
                </h1>
                <div className='mt-4 h-1 w-24 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto md:mx-0 rounded-full'></div>
              </div>

              <p className='text-lg sm:text-xl md:text-2xl text-white/90 font-medium max-w-lg mx-auto md:mx-0 animate-fadeIn delay-100'>
                Đầu đọc/quét thẻ ID cho kiosk tự phục vụ
              </p>
            </div>

            {/* Image Content */}
            <div className='md:w-1/2 flex justify-center animate-float'>
              <img
                src={imgProduct_SR}
                alt='imgProduct_SR'
                className='w-full max-w-md lg:max-w-lg xl:max-w-xl drop-shadow-2xl transition-transform duration-500 hover:scale-105'
              />
            </div>
          </div>
        </div>
      </section>
      {/* Xem thêm hình ảnh sản phẩm  */}
      <section className='lg:h-[41rem]'>
        <div>
          <h2 className='base_title'>Hình ảnh sản phẩm</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full'></div>
        </div>
        <div className='m-auto w-3/4'>
          <TabShowDevice />
        </div>
      </section>

      <section>
        <div className='m-auto px-3 md:w-3/4 '>
          <div>
            <div className='mb-3 ml-2'>
              <i className='text-center text-2xl font-roboto text-main-colors'>
                ID Card Reader/Scanner
              </i>
            </div>
            <p className='font-mulish text-main-colors'>
              Hưởng lợi từ việc nhập dữ liệu và xác minh chính xác <br />
              Thiết kế OEM cho cổng ABC và các Kiosk tự phục vụ <br />
              Thiết kế trực quan dễ sử dụng <br /> Kiểm tra tự động hành khách, vận hành 24/7 <br />{' '}
              Đọc và xác minh mọi loại thẻ bao gồm cả tài liệu điện tử du lịch
            </p>
          </div>
        </div>
      </section>
      <section>
        <FeaturesSection dataFeatures={Features} />
      </section>
      <section>
        <MobileIDView />
      </section>
      <section>
        <DataGetSR />
      </section>
      {/* Thông số kỹ thuật thiết bị  */}
      <section>
        <TableSpecification data={DeviceParameters} />
      </section>
      {/* Xem thêm sản phẩm */}
      <section>
        <OtherProduct />
      </section>
    </div>
  )
}
export default CheckIdSr
