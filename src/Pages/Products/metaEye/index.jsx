import SlideSwiper from 'components/SlideSwiper'
import TableSpecification from 'components/TableSpecification'
import SlideShowSwiper from 'components/SlideShowSwiper'
import SlideSwiperConfig from 'components/SlideSwiperConfig'

import SlideProduct from './components/SlideProduct'
import DeviceParameters from './components/DeviceParameters'
import ShowProducts from './components/ShowProducts'

import imgProduct_eYe from 'assets/image_products/meta_eye/main.webp'

const MetaEye = () => {
  return (
    <div className="App">
      {/* Banner sản phẩm  */}
      <section>
        <div className="md: bg-bg-img-product p-3 md:flex md:p-7">
          <div className="m-auto text-center md:w-1/2">
            <div className="mb-[5%]">
              <h1 className="xxl:text-[7rem] font-roboto text-5xl font-black text-white xl:text-[5rem]">
                Meta eYe <br />
              </h1>
            </div>
            <div>
              <i className="font-roboto text-white xl:text-2xl">
                Thiết bị thực tế ảo tăng cường
              </i>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={imgProduct_eYe} alt="imgProduct_eYe" />
          </div>
        </div>
      </section>
      <section>
        <div className="m-auto w-3/4">
          <SlideShowSwiper slidesShow={SlideProduct} />
        </div>
      </section>
      {/* Chi tiết sản phẩm  */}
      <section>
        <div className="m-auto grid gap-3 p-3 lg:w-2/3 lg:grid-cols-2">
          <div>
            <div className="mb-3 ml-2">
              <i className="text-center text-3xl font-bold text-main-colors">
                Meta eYe
              </i>
            </div>

            <p className="text-left font-roboto text-main-colors">
              Công nghệ Meta Reality đột phá, bao gồm tính năng AR và camera màu
              Passthrough. <br />
              Thiết kế mỏng, thoải mái, mang lại sự thoải mái tuyệt đối trong
              thời gian sử dụng kéo dài. <br />
              Chip Qualcomm Snapdragon XR2 Gen 2 đời mới, tiêu hao điện năng ít
              nhưng vẫn có thể cung cấp khả năng xử lý mạnh mẽ.
            </p>
          </div>
          <div className="mt-3">
            <div className="mb-2">
              <u className="text-xl font-semibold text-main-colors">
                Giá Tiền:
              </u>
            </div>
            <div className="">
              <div>
                <span className="text-4xl font-bold text-blue-500">
                  25.000.000 VNĐ
                </span>
              </div>
              <button className="mt-5 rounded bg-red-500 px-8 py-4 text-xl font-bold text-white hover:bg-red-700">
                Mua Ngay
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Thông số kỹ thuật  */}
      <section>
        <TableSpecification data={DeviceParameters} />
      </section>
      {/* Xem thêm sản phẩm */}
      <section>
        <div className="m-auto w-3/4">
          <SlideSwiper
            slides={ShowProducts}
            SlideSwiperConfig={SlideSwiperConfig}
          />
        </div>
      </section>
    </div>
  )
}
export default MetaEye
