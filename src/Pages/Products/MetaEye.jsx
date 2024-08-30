import SlideSwiper from 'components/SlideSwiper'
import product_et from 'assets/image_products/link_product/et100.png'
import product_sr from 'assets/image_products/link_product/sr.png'
import TableSpecification from 'components/TableSpecification'
import SlideShowSwiper from 'components/SlideShowSwiper'
import slide_image_0 from 'assets/image_products/meta_eye/truoc.png'
import slide_image_1 from 'assets/image_products/meta_eye/tren.png'
import slide_image_2 from 'assets/image_products/meta_eye/ngang.png'
import slide_image_3 from 'assets/image_products/meta_eye/cheo.png'
import slide_image_4 from 'assets/image_products/meta_eye/trong.png'
import slide_image_5 from 'assets/image_products/meta_eye/full.png'
import imgProduct_eYe from 'assets/image_products/meta_eye/main.png'

const MetaEye = () => {
  // Style SwiperConfig
  const swiperConfig = {
    spaceBetween: 20,
    pagination: { clickable: true },
    freeMode: true
  }
  const DataSlideShow = [
    {
      slideContent: slide_image_0
    },
    {
      slideContent: slide_image_1
    },
    {
      slideContent: slide_image_2
    },
    {
      slideContent: slide_image_3
    },
    {
      slideContent: slide_image_4
    },
    {
      slideContent: slide_image_5
    }
  ]
  const DataTableCheckIdSr = [
    {
      itemA: 'CPU',
      specificationA: 'Qualcomm Snapdragon XR2 Gen 2',
      itemB: 'RAM',
      specificationB: '8GB'
    },
    {
      itemA: 'Màn hình',
      specificationA:
        '4K+ Infinite Display \n2 màn LCD độ phân giải 2064 x 2208 mỗi mắt ',
      itemB: 'Thấu kính',
      specificationB: 'Pancake'
    },
    {
      itemA: 'Camera tracking',
      specificationA:
        '4 IR Camera theo dõi ngoài \n2 camera màu nhìn xuyên thấu 18PPD (passthrough)',
      itemB: 'Tần số quét',
      specificationB: '90Hz (mặc định) \n120Hz (đang thử nghiệm)'
    },
    {
      itemA: 'Góc nhìn FOV (Field of View)',
      specificationA: 'Ngang 110 độ \n Dọc 96 độ',
      itemB: 'Trọng lượng',
      specificationB: '515 gram'
    },
    {
      itemA: 'Kích thước',
      specificationA: '184 x 160 x 98 (mm)',
      itemB: 'Thời lượng pin',
      specificationB: 'Tối đa 3 tiếng'
    },
    {
      itemA: 'Thời gian sạc',
      specificationA: 'Khoảng 2 tiếng',
      itemB: 'Kết nối',
      specificationB: 'Wifi 6e \nBluetooth 5.2 \nUSB-C (kết nối Oculus link)'
    },
    {
      itemA: 'Đai đeo đầu (Strap)',
      specificationA: 'Đai bằng vải mềm',
      itemB: 'Communicate interface',
      specificationB: 'USB 2.0 high-speed interface'
    },
    {
      itemA: 'Điều chỉnh IPD',
      specificationA: 'Điều chỉnh IPD vật lý khoảng khách 58 - 71mm',
      itemB: 'Lưu trữ (SSD)',
      specificationB: '128GB'
    }
  ]
  const dataSlides = [
    {
      slideContent: product_et,
      slideName: 'CheckID-ET100',
      slideDescription: 'ID Card Reader/Scanner',
      linkProduct: '/checkid-et100'
    },
    {
      slideContent: product_sr,
      slideName: 'CheckID-SR',
      slideDescription: 'ID Card Reader/Scanner',
      linkProduct: '/checkid-sr'
    },
    {
      slideContent: product_et,
      slideName: 'CheckID-ET100',
      slideDescription: 'ID Card Reader/Scanner',
      linkProduct: '/checkid-et100'
    },
    {
      slideContent: product_sr,
      slideName: 'CheckID-SR',
      slideDescription: 'ID Card Reader/Scanner',
      linkProduct: '/checkid-sr'
    },
    {
      slideContent: product_et,
      slideName: 'CheckID-ET100',
      slideDescription: 'ID Card Reader/Scanner',
      linkProduct: '/checkid-et100'
    },
    {
      slideContent: product_sr,
      slideName: 'CheckID-SR',
      slideDescription: 'ID Card Reader/Scanner',
      linkProduct: '/checkid-sr'
    }
  ]

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
          <SlideShowSwiper slidesShow={DataSlideShow} />
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
        <TableSpecification data={DataTableCheckIdSr} />
      </section>
      {/* Xem thêm sản phẩm */}
      <section>
        <div className="m-auto w-3/4">
          <SlideSwiper slides={dataSlides} swiperConfig={swiperConfig} />
        </div>
      </section>
    </div>
  )
}
export default MetaEye
