// @ Page sản phẩm Rar eKYC Platform
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Banner from 'assets/page_RarEkyc/banner.webp'
import CheckTicker from 'assets/page_RarEkyc/check_ticket.png'
import IconNFC from 'assets/page_RarEkyc/section_content/scan_nfc.png'
import IconLiveNess from 'assets/page_RarEkyc/section_content/liveness.png'
import IconConnect from 'assets/page_RarEkyc/section_content/connect.png'
import IconShow from 'assets/page_RarEkyc/section_content/view.png'
import IconNfc from 'assets/page_RarEkyc/section_content_b/icon_nfc.png'
import IconSdk from 'assets/page_RarEkyc/section_content_b/icon_sdk.png'
import IconApi from 'assets/page_RarEkyc/section_content_b/icon_api.png'
import Banner_CCDV from 'assets/page_RarEkyc/section_content_b/banner_section.png'
import PartnerLogo from 'components/PartnerLogo'
import Certificate from 'components/Certificate'

const HomePage = () => {
  useEffect(() => {
    AOS.init()
  })
  return (
    <div className="container m-auto w-full xl:w-10/12">
      <section className="flex max-w-full flex-col justify-between lg:flex-row">
        <div className="container m-auto box-border px-2">
          <h1 className="m-2 text-center text-4xl font-bold italic text-main-colors md:text-[3.2rem] xl:text-6xl">
            RAR eKYC Platform
          </h1>
          <div className="text-center sm:m-2">
            <span className="text-md text-main-colors xl:text-2xl">
              Xác thực căn cước công dân gắn chip chính xác{' '}
              <span className="text-base font-bold text-green-600 xl:text-2xl">
                100%
              </span>{' '}
              với cơ sở dữ liệu
              <span className="text-base font-bold text-green-600 xl:text-2xl">
                {' '}
                RAR-C06
              </span>{' '}
              của Bộ Công An
            </span>
          </div>
          <div>
            <span className="text-md ml-1 text-gray-400">
              RAR eKYC Platform là dịch vụ xác minh tính đúng đắn, tính toàn vẹn
              thông tin, xác minh chữ ký trên thẻ chip với trung tâm RAR-C06 của
              Bộ Công An, Dịch vụ RAR eKYC Platform có khả năng chống giả mạo ở
              mức tuyệt đối, giảm tối đa các rủi ro trong giao dịch định danh
              điện tử, tăng trải nghiệm khách hàng và đáp ứng nhu cầu chuyển đổi
              số cho các doanh nghiệp.
            </span>
          </div>
        </div>
        <div className="container m-auto p-2">
          <img className="w-full" src={Banner} alt="logo banner" />
        </div>
      </section>
      {/* Giá trị của sản phẩm */}
      <section className="mx-1 mb-2">
        <div data-aos="zoom-in" data-aos-duration="1000">
          <h2 className="base_title">Giá trị chúng tôi đem lại</h2>
        </div>
        <div className="m-auto h-max w-full rounded-3xl border-2 border-solid border-blue-950 bg-bg-img lg:w-4/5">
          <ul className="lg:p-7">
            <li className="sticker_check">
              <div className="w-1/12">
                <img
                  className="m-auto w-1/2"
                  src={CheckTicker}
                  alt="check_ticket"
                  data-aos="fade-right"
                  data-aos-duration="1100"
                />
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                className="ml-3"
              >
                <span className="sticker_describe">
                  Onboard khách hàng nhanh chóng và an toàn{' '}
                </span>
              </div>
            </li>
            <li className="sticker_check">
              <div className="w-1/12">
                <img
                  className="m-auto w-1/2"
                  src={CheckTicker}
                  alt="check_ticket"
                  data-aos="fade-right"
                  data-aos-duration="1600"
                />
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="1500"
                className="ml-3"
              >
                <span className="sticker_describe">
                  Phát hiện gian lận, giả mạo về hình ảnh, thông tin giấy tờ.{' '}
                </span>
              </div>
            </li>
            <li className="sticker_check">
              <div className="w-1/12">
                <img
                  className="m-auto w-1/2"
                  src={CheckTicker}
                  alt="check_ticket"
                  data-aos="fade-right"
                  data-aos-duration="2100"
                />
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="2000"
                className="ml-3"
              >
                <span className="sticker_describe">
                  Mang lại giá trị tốt nhất.{' '}
                </span>
              </div>
            </li>
            <li className="sticker_check">
              <div className="w-1/12">
                <img
                  className="m-auto w-1/2"
                  data-aos="fade-right"
                  data-aos-duration="2600"
                  src={CheckTicker}
                  alt="check_ticket"
                />
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="2500"
                className="ml-3"
              >
                <span className="sticker_describe">
                  Rút ngắn thời gian thẩm định.{' '}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* Thao tác sử dụng  */}
      <section>
        <div data-aos="zoom-in" data-aos-duration="1000">
          <h2 className="base_title">
            Thao tác <span className="text-5xl text-green-600">4 bước</span> đơn
            giản
          </h2>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {/* Bước 1 */}
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="s3-content"
            >
              <div className="text-center">
                <h4 className="operation_text">Bước 1</h4>
                <i className="font-roboto text-main-colors">
                  Đưa CCCD gắn chip vào thiết bị đọc thẻ chip
                </i>
              </div>
              <img
                className="operation_img"
                src={IconNFC}
                alt="biểu tượng đọc thẻ"
              />
            </div>
            {/* Bước 2 */}
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="s3-content"
            >
              <div className="text-center">
                <h4 className="operation_text">Bước 2</h4>
                <i className="font-roboto text-main-colors">
                  Xác thực khuôn mặt chân dung chủ giấy tờ
                </i>
              </div>
              <img
                className="operation_img"
                src={IconLiveNess}
                alt="biểu tượng xác thực khuôn mặt"
              />
            </div>
            {/* Bước 3 */}
            <div
              data-aos="fade-up"
              data-aos-duration="2500"
              className="s3-content"
            >
              <div className="text-center">
                <h4 className="operation_text">Bước 3</h4>
                <i className="font-roboto text-main-colors">
                  Xác thực CCCD gắn chip với Bộ Công An
                </i>
              </div>
              <img
                className="operation_img"
                src={IconConnect}
                alt="biểu tượng xác thực cccd"
              />
            </div>
            {/* Bước 4 */}
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="s3-content"
            >
              <div className="text-center">
                <h4 className="operation_text">Bước 4</h4>
                <i className="font-roboto text-main-colors">
                  Gửi kết quả xác thực cho ứng dụng thích hợp
                </i>
              </div>
              <img
                className="operation_img"
                src={IconShow}
                alt="biểu tượng xác thực thành công"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Hình thức cung cấp dịch vụ */}
      <section className="mx-2 my-24">
        {/* Hình thức bàn giao  */}
        <div data-aos="zoom-in" data-aos-duration="1000">
          <h2 className="base_title">Hình thức cung cấp dịch vụ</h2>
        </div>
        <div className="m-auto h-max w-full rounded-3xl border-2 border-solid border-blue-950 bg-bg-img pt-8 lg:flex lg:w-4/5">
          <ul className="container w-full p-2 lg:w-3/5">
            <li className="flex p-1">
              <div>
                <img src={IconNfc} alt="biểu tượng nfc" />
              </div>
              <div className="mx-2">
                <h5 className="mb-1 text-lg font-semibold text-white">
                  Thiết bị đọc thẻ chip:{' '}
                </h5>
                <p className="text-sm text-white">
                  Chúng tôi sẵn sàng cung cấp cho quý khách thiết bị đọc thẻ
                  chip chuyên dụng để đọc thông tin trong thẻ căn cước công dân
                  gắn chip
                </p>
              </div>
            </li>
            <li className="flex p-1">
              <div>
                <img src={IconSdk} alt="biểu tượng sdk" />
              </div>
              <div className="mx-2">
                <h5 className="mb-1 text-lg font-semibold text-white">
                  SDK NFC:{' '}
                </h5>
                <p className="text-sm text-white">
                  {' '}
                  Bộ SDK (IOS, Android) sẵn sàng cung cấp cho quý khách để đọc
                  thông tin căn cước gắn chip qua công nghệ kết nối gần NFC
                </p>
              </div>
            </li>
            <li className="flex p-1">
              <div>
                <img src={IconApi} alt="biểu tượng api" />
              </div>
              <div className="mx-2">
                <h5 className="mb-1 text-lg font-semibold text-white">API: </h5>
                <p className="text-sm text-white">
                  Quý khách hàng đã có thiết bị đọc thẻ, có thể sử dụng API xác
                  thực thông tin căn cước công dân gắn chip với RAR-C06 của
                  chúng tôi
                </p>
              </div>
            </li>
          </ul>
          <div className="w-full p-2 lg:w-2/5">
            <img
              className="m-auto w-fit"
              src={Banner_CCDV}
              alt="hình cung cap"
            />
          </div>
        </div>
        {/* Ảnh minh hoạ */}
      </section>
      {/* Đối tác */}
      <section>
        <PartnerLogo />
      </section>
      {/* Chứng nhận */}
      <section className="m-auto md:w-3/4">
        <div data-aos="zoom-in" data-aos-duration="1000">
          <h2 className="base_title">Giấy chứng nhận</h2>
        </div>
        <Certificate />
      </section>
    </div>
  )
}

export default HomePage
