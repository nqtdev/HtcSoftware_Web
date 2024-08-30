import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { FreeMode, Pagination } from 'swiper/modules'
import { NavLink } from 'react-router-dom'
// kích thước 650 x 500
import imgProduct_ET from 'assets/image_products/check_et100/et_full.png'
// kích thước 500 x 500
import slide_image_1 from 'assets/image_products/check_et100/et_mat_truoc.png'
import slide_image_2 from 'assets/image_products/check_et100/et_mat_trai.png'
import slide_image_3 from 'assets/image_products/check_et100/et_mat_phai.png'
import slide_image_4 from 'assets/image_products/check_et100/et_mat_sau.png'
import slide_image_5 from 'assets/image_products/check_et100/et_mat_tren.png'
// kích thước 60 x 61
import SmartCard from 'assets/image_products/icon_function/smartCard.png'
import RichPort from 'assets/image_products/icon_function/RichPort.png'
import NFC from 'assets/image_products/icon_function/NFC.png'
import Camera from 'assets/image_products/icon_function/Camera.png'
import Fingerprint from 'assets/image_products/icon_function/Fingerprint.png'
import MRZ from 'assets/image_products/icon_function/MRZ.png'
// kích thước 500 x 650
import product_sr from 'assets/image_products/link_product/sr.png'
import product_metaEye from 'assets/image_products/link_product/metaEye.png'
const CheckIdEt = () => {
  return (
    <>
      {/* Banner sản phẩm  */}
      <section>
        <div className="md: bg-bg-img-product p-3 md:flex md:p-7">
          <div className="m-auto text-center md:w-1/2">
            <div className="mb-[5%]">
              <h1 className="xxl:text-[7rem] font-roboto text-[2.8rem] font-black text-white xl:text-[5rem]">
                Terminal eID <br />
                (CheckID-ET100)
              </h1>
            </div>
            <div>
              <i className="font-roboto text-white xl:text-2xl">
                Đọc Máy Quét Thẻ Hộ Chiếu Điện Tử ICAO ID Card
              </i>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={imgProduct_ET} alt="imgProduct_ET" />
          </div>
        </div>
      </section>
      {/* Hình ảnh sản phẩm  */}
      <section>
        <div>
          <h2 className="all-textList">Hình ảnh sản phẩm</h2>
        </div>
        <div>
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
              <img
                className="block w-full lg:w-[35%]"
                src={slide_image_1}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="block w-full lg:w-[35%]"
                src={slide_image_4}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="block w-full lg:w-[35%]"
                src={slide_image_2}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="block w-full lg:w-[35%]"
                src={slide_image_3}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="block w-full lg:w-[35%]"
                src={slide_image_5}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* Chi tiết sản phẩm  */}
      <section>
        <div className="m-auto grid gap-3 p-5 lg:w-2/3 lg:grid-cols-2">
          <div>
            <div className="mb-3 ml-2">
              <i className="text-center text-3xl font-bold text-main-colors">
                CheckID-ET100
              </i>
            </div>

            <p className="font-roboto text-main-colors">
              CheckID-ET100 được thiết kế để đáp ứng nhu cầu bảo mật cao mà
              không làm giảm sự tiện lợi. Thiết bị này có cổng USB loại A
              female, cho phép kết nối với máy tính. Nó hỗ trợ nhiều loại cảm
              biến sinh trắc học như SecuGen, SupreMa, ZKTeco và Morpho. Việc
              chọn cảm biến sinh trắc học nên dựa trên yêu cầu của khách hàng.
            </p>
          </div>
          <div className="mt-3">
            <div className="mb-2">
              <u className="text-xl font-semibold text-main-colors">
                Chức năng:
              </u>
            </div>
            <ul className="grid grid-cols-3 gap-2 md:grid-cols-6">
              <li className="m-auto cursor-pointer">
                <img
                  className="mb-1 cursor-pointer rounded-md border p-1"
                  src={SmartCard}
                  alt="SmartCard"
                />
                <p className="text-center font-roboto text-sm text-main-colors">
                  SmartCard
                </p>
              </li>
              <li className="m-auto cursor-pointer">
                <img
                  className="mb-1 cursor-pointer rounded-md border p-1"
                  src={RichPort}
                  alt="RichPort"
                />
                <p className="text-center font-roboto text-sm text-main-colors">
                  RichPorts
                </p>
              </li>
              <li className="m-auto cursor-pointer">
                <img
                  className="mb-1 cursor-pointer rounded-md border p-1"
                  src={NFC}
                  alt="NFC"
                />
                <p className="text-center font-roboto text-sm text-main-colors">
                  NFC
                </p>
              </li>
              <li className="m-auto cursor-pointer">
                <img
                  className="mb-1 cursor-pointer rounded-md border p-1"
                  src={Camera}
                  alt="Camera"
                />
                <p className="text-center font-roboto text-sm text-main-colors">
                  Camera
                </p>
              </li>
              <li className="m-auto cursor-pointer">
                <img
                  className="mb-1 cursor-pointer rounded-md border p-1"
                  src={Fingerprint}
                  alt="Fingerprint"
                />
                <p className="text-center font-roboto text-sm text-main-colors">
                  Fingerprint
                </p>
              </li>
              <li className="m-auto cursor-pointer">
                <img
                  className="mb-1 cursor-pointer rounded-md border p-1"
                  src={MRZ}
                  alt="MRZ"
                />
                <p className="text-center font-roboto text-sm text-main-colors">
                  MRZ
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Thông số kỹ thuật  */}
      <section className="mb-[2%]">
        <div>
          <h2 className="all-textList">Thông số kỹ thuật</h2>
        </div>
        <div className="m-auto max-h-screen overflow-auto lg:w-3/4">
          <table className="min-w-full table-auto">
            <thead className="border-collapse border border-slate-500">
              <tr>
                <th className="pdtable">Items</th>
                <th className="pdtable">Specification</th>
                <th className="pdtable">Items</th>
                <th className="pdtable">Specification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="ptb-item">Dimension (L x W x H)</td>
                <td className="ptb-specification">273 x 155 x 20 mm</td>
                <td className="ptb-item">Band</td>
                <td className="ptb-specification">
                  WCDMA band 1/8,
                  <br /> TD-SCDMA band 34/39, <br />
                  CDMA BC0,
                  <br />
                  TDD-LTE band 34/39/40/41 (38) FDD LTE band 1/3/5/8
                </td>
              </tr>
              <tr>
                <td className="ptb-item">Weight</td>
                <td className="ptb-specification">2.5 kg</td>
                <td className="ptb-item">WIFI</td>
                <td className="ptb-specification">
                  IEEE 802.11 a/b/g/n/ac,2.4G & 5G,AP
                </td>
              </tr>
              <tr>
                <td className="ptb-item">Relative Humidity</td>
                <td className="ptb-specification">10% - 95% noncondensing</td>
                <td className="ptb-item">Ethernet</td>
                <td className="ptb-specification">10/100M self-adaptive</td>
              </tr>
              <tr>
                <td className="ptb-item">Working Temprature</td>
                <td className="ptb-specification">
                  -10° - 50° C (14° - 122° F)
                </td>
                <td className="ptb-item">Card Slot</td>
                <td className="ptb-specification">
                  Nano SIM x 1 <br />
                  PSAM x 1 <br />
                  SD x 1
                </td>
              </tr>
              <tr>
                <td className="ptb-item">Storage Temprature</td>
                <td className="ptb-specification">
                  -20° - 60° C (-4° - 140° F)
                </td>
                <td className="ptb-item">BLE4.2</td>
                <td className="ptb-specification">BLE4.2</td>
              </tr>
              <tr>
                <td className="ptb-item">Operation System</td>
                <td className="ptb-specification"> Support remote upgrade</td>
                <td className="ptb-item">MRZ Reader</td>
                <td className="ptb-specification">
                  300dpi resolution, wide angle multiple spectral lights <br />
                  High-definition scan tube, high-definition image
                </td>
              </tr>
              <tr>
                <td className="ptb-item">Processor</td>
                <td className="ptb-specification">
                  8-Core ARM Cortex-A53 2.0G
                </td>
                <td className="ptb-item">NFC Interface</td>
                <td className="ptb-specification">
                  Support all 13.56 MHz NFC functions <br />
                  Followed ISO/IEC 14443 Type A/B
                </td>
              </tr>
              <tr>
                <td className="ptb-item">RAM</td>
                <td className="ptb-specification">
                  2GB <br />
                  4GB
                </td>
                <td className="ptb-item">Printer</td>
                <td className="ptb-specification">58mm</td>
              </tr>
              <tr>
                <td className="ptb-item">ROM</td>
                <td className="ptb-specification">
                  16GB <br />
                  32GB <br />
                  64GB
                </td>
                <td className="ptb-item">USB</td>
                <td className="ptb-specification">
                  USB 2.0 x 2 <br />
                  USB HID x 1 <br />
                  Micro-USB x 1
                </td>
              </tr>
              <tr>
                <td className="ptb-item">Resolution</td>
                <td className="ptb-specification">1280 x 800</td>
                <td className="ptb-item">Background Light</td>
                <td className="ptb-specification">Adjustable</td>
              </tr>
              <tr>
                <td className="ptb-item">Screen Size</td>
                <td className="ptb-specification">10.1 inch LCD</td>
                <td className="ptb-item">Touch</td>
                <td className="ptb-specification">Supported</td>
              </tr>
              <tr>
                <td className="ptb-item">Camera</td>
                <td className="ptb-specification">
                  Power Button x 1 <br />
                  Configurable Button x 2
                </td>
                <td className="ptb-item">Output</td>
                <td className="ptb-specification">12/3A DC</td>
              </tr>
              <tr>
                <td className="ptb-item">Speaker</td>
                <td className="ptb-specification">Supported</td>
                <td className="ptb-item">Location</td>
                <td className="ptb-specification">GPS</td>
              </tr>
              <tr>
                <td className="ptb-item">MIC</td>
                <td className="ptb-specification">Supported</td>
                <td className="ptb-item">Video</td>
                <td className="ptb-specification">
                  1080p HD video playing <br />
                  720p HD video recording
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* Xem thêm sản phẩm */}
      <section>
        <div className="m-auto pb-4 xl:w-3/4">
          <div>
            <h2 className="all-textList">Các sản phẩm khác</h2>
          </div>
          <div>
            <Swiper
              spaceBetween={30}
              freeMode={true}
              modules={[FreeMode]}
              pagination={{
                clickable: true
              }}
              breakpoints={{
                700: {
                  slidesPerView: 2
                },
                768: {
                  slidesPerView: 3
                },
                1024: {
                  slidesPerView: 4
                }
              }}
            >
              <SwiperSlide>
                <NavLink to="/checkid-sr">
                  <div className="box rounded-md border-2 bg-main-table/20 p-1">
                    <img className="m-auto w-3/4" src={product_sr} alt="" />
                    <div className="box bg-white p-2">
                      <h4 className="text-md font-roboto">CheckID-SR</h4>
                      <span className="font-roboto text-sm text-gray-600/30">
                        ID Card Reader/Scanner
                      </span>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
              <SwiperSlide>
                <NavLink to="/meta-eye">
                  <div className="box rounded-md border-2 bg-main-table/20 p-1">
                    <img
                      className="m-auto w-3/4"
                      src={product_metaEye}
                      alt=""
                    />
                    <div className="box bg-white p-2">
                      <h4 className="text-md font-roboto">Meta eYe</h4>
                      <span className="font-roboto text-sm text-gray-600/30">
                        Thiết bị thực tế ảo
                      </span>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
              <SwiperSlide>
                <NavLink to="/checkid-sr">
                  <div className="box rounded-md border-2 bg-main-table/20 p-1">
                    <img className="m-auto w-3/4" src={product_sr} alt="" />
                    <div className="box bg-white p-2">
                      <h4 className="text-md font-roboto">CheckID-SR</h4>
                      <span className="font-roboto text-sm text-gray-600/30">
                        ID Card Reader/Scanner
                      </span>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
              <SwiperSlide>
                <NavLink to="/meta-eye">
                  <div className="box rounded-md border-2 bg-main-table/20 p-1">
                    <img
                      className="m-auto w-3/4"
                      src={product_metaEye}
                      alt=""
                    />
                    <div className="box bg-white p-2">
                      <h4 className="text-md font-roboto">Meta eYe</h4>
                      <span className="font-roboto text-sm text-gray-600/30">
                        Thiết bị thực tế ảo
                      </span>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
              <SwiperSlide>
                <NavLink to="/checkid-sr">
                  <div className="box rounded-md border-2 bg-main-table/20 p-1">
                    <img className="m-auto w-3/4" src={product_sr} alt="" />
                    <div className="box bg-white p-2">
                      <h4 className="text-md font-roboto">CheckID-SR</h4>
                      <span className="font-roboto text-sm text-gray-600/30">
                        ID Card Reader/Scanner
                      </span>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
              <SwiperSlide>
                <NavLink to="/meta-eye">
                  <div className="box rounded-md border-2 bg-main-table/20 p-1">
                    <img
                      className="m-auto w-3/4"
                      src={product_metaEye}
                      alt=""
                    />
                    <div className="box bg-white p-2">
                      <h4 className="text-md font-roboto">Meta eYe</h4>
                      <span className="font-roboto text-sm text-gray-600/30">
                        Thiết bị thực tế ảo
                      </span>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}
export default CheckIdEt
