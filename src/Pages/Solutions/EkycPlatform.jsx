// @ Page sản phẩm HTC eKYC Platform
// Thêm hiệu ứng khi cuộn chuột
import Banner from 'assets/page_EkycPlatform/banner.webp'
import Vt_xacthuc from 'assets/page_EkycPlatform/section_characteristic/xac-thuc-nhanh-chong.webp'
import Vt_tangcuong from 'assets/page_EkycPlatform/section_characteristic/tang-cuong-bao-mat.webp'
import Vt_tietkiem from 'assets/page_EkycPlatform/section_characteristic/tiet-kiem-chi-phi.webp'
import Vt_caithien from 'assets/page_EkycPlatform/section_characteristic/cai-thien-trai-nghiem.webp'
import Vt_tuanthu from 'assets/page_EkycPlatform/section_characteristic/tuan-thu-quy-dinh.webp'
import Vt_dulieu from 'assets/page_EkycPlatform/section_characteristic/du-lieu-minh-bach.webp'
import ID_OCR from 'assets/page_EkycPlatform/section_service/img_1.webp'
import LiveNess_Check from 'assets/page_EkycPlatform/section_service/img_2.webp'
import ID_Sanity from 'assets/page_EkycPlatform/section_service/img_3.webp'
import CheckCCCD from 'assets/page_EkycPlatform/section_service/img_6.webp'
import Number1 from 'assets/page_EkycPlatform/number/number_1.webp'
import Number2 from 'assets/page_EkycPlatform/number/number_2.webp'
import Number3 from 'assets/page_EkycPlatform/number/number_3.webp'
import Number4 from 'assets/page_EkycPlatform/number/number_4.webp'
import Star from 'assets/page_EkycPlatform/icon_star.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const EkycPlatform = () => {
  // Thêm hiệu ứng khi cuộn chuột
  useEffect(() => {
    AOS.init()
  })
  return (
    <div className="container m-auto w-full px-1 xl:w-10/12">
      {/* Banner  */}
      <section className="flex max-w-full flex-col justify-between lg:flex-row">
        <div className="container m-auto box-border">
          <h1 className="m-2 text-center text-4xl font-bold italic text-main-colors md:text-[3.2rem] xl:text-6xl">
            HTC eKYC Platform
          </h1>
          <div className="text-center sm:m-2">
            <span className="text-md font-soro text-main-colors xl:text-2xl">
              Giải pháp định danh điện tử cho doanh nghiệp
            </span>
          </div>
          <div>
            <span className="ml-1 font-soro text-lg text-gray-400">
              Nền tảng HTC eKYC là một giải pháp toàn diện, được trang bị các
              thuật toán và công nghệ thông minh, tiên tiến. Đồng thời, nó luôn
              được giám sát, cập nhật và tối ưu hóa để cung cấp chất lượng dịch
              vụ tốt nhất cho khách hàng.
            </span>
          </div>
        </div>
        <div className="container m-auto p-2">
          <img className="w-11/12" src={Banner} alt="logo banner" />
        </div>
      </section>
      {/* Vai trò của công nghệ EKYC  */}
      <section className="m-auto lg:w-4/5">
        <div data-aos="zoom-in" data-aos-duration="1000">
          <h2 className="all-textList">Vai trò của Công nghệ e-KYC</h2>
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          <div className="flex items-center gap-4 rounded-lg border-2 border-sky-500 px-1">
            <img src={Vt_xacthuc} alt="hình ảnh xác thực nhanh chóng" />
            <span>
              <b className="text-main-colors">
                Xác thực danh tính nhanh chóng:
              </b>{' '}
              Giảm thiểu thời gian xác thực so với phương pháp thủ công.
            </span>
          </div>
          <div className="flex items-center gap-4 rounded-lg border-2 border-sky-500 px-1">
            <img src={Vt_tangcuong} alt="hình ảnh tăng cường bảo mật " />
            <span>
              <b className="text-main-colors">Tăng cường bảo mật:</b> Sử dụng
              các phương pháp sinh trắc học như nhận dạng khuôn mặt và dấu vân
              tay.
            </span>
          </div>
          <div className="flex items-center gap-4 rounded-lg border-2 border-sky-500 px-1">
            <img src={Vt_tietkiem} alt="hình ảnh tiết kiệm chi phí" />
            <span>
              <b className="text-main-colors">Tiết kiệm chi phí:</b> Giảm chi
              phí liên quan đến xử lý giấy tờ và nhân lực.
            </span>
          </div>
          <div className="flex items-center gap-4 rounded-lg border-2 border-sky-500 px-1">
            <img src={Vt_caithien} alt="hình ảnh cải thiện trải nghiệm" />
            <span>
              <b className="text-main-colors">
                Cải thiện trải nghiệm khách hàng:
              </b>{' '}
              Khách hàng có thể xác thực từ xa mà không cần đến trực tiếp.
            </span>
          </div>
          <div className="flex items-center gap-4 rounded-lg border-2 border-sky-500 px-1">
            <img src={Vt_tuanthu} alt="hình ảnh tuân thủ quy định" />
            <span>
              <b className="text-main-colors">Tuân thủ quy định pháp luật:</b>{' '}
              Hiệu quả hơn trong việc tuân thủ các quy định về phòng chống rửa
              tiền và chống tài trợ khủng bố.
            </span>
          </div>
          <div className="flex items-center gap-4 rounded-lg border-2 border-sky-500 px-1">
            <img src={Vt_dulieu} alt="hình ảnh dữ liệu minh bạch" />
            <span>
              <b className="text-main-colors">
                Dữ liệu chính xác và minh bạch:
              </b>{' '}
              Thu thập và lưu trữ dữ liệu chính xác, dễ dàng truy xuất.
            </span>
          </div>
        </div>
      </section>
      {/* HTC eKYC Platform mang lại */}
      <section className="m-auto lg:w-4/5">
        <div data-aos="zoom-in" data-aos-duration="1000">
          <h2 className="all-textList">HTC eKYC Platform</h2>
        </div>
        <div className="bg-cyan-100/20">
          {/* ID Read (OCR) */}
          <div className="p-6 md:flex md:flex-row-reverse">
            <div className="m-auto md:w-1/2">
              <div className="flex items-center">
                <img className="" src={Number1} alt="number 1" />
                <h3 className="font-mulish font-bold text-[#3385ff]">
                  ID Reader (OCR)
                </h3>
              </div>
              <span className="font-mulish text-[#545f7a]">
                OCR (Optical Character Recognition) được sử dụng để nhận dạng,
                quét ký tự bằng quang học thông qua hình ảnh hoặc tệp PDF với độ
                chính xác rất cao. Đây là công nghệ cần thiết để xây dựng luồng
                tiếp cận khách hàng Online (Digital Onboarding).
              </span>
              <div className="flex items-center">
                <img src={Star} alt="icon ngôi sao" />
                <span className="font-mulish font-medium text-gray-500">
                  Giải pháp ID Reader hỗ trợ 4 loại giấy tờ CMND/CCCD, bằng lái
                  xe, hộ chiếu.
                </span>
              </div>
              <div className="flex items-center">
                <img src={Star} alt="icon ngôi sao" />
                <span className="font-mulish font-medium text-gray-500">
                  Độ chính xác lên đến 98%.
                </span>
              </div>
              <div className="flex items-center">
                <img src={Star} alt="icon ngôi sao" />
                <span className="font-mulish font-medium text-gray-500">
                  Xử lý được những hình ảnh kém chất lượng (bị mờ, loá) hoặc ảnh
                  đen trắng.
                </span>
              </div>
            </div>
            <div className="md:w-1/2">
              <img className="m-auto w-3/4" src={ID_OCR} alt="ID_OCR" />
            </div>
          </div>
          {/* liveness Check  */}
          <div className="p-6 md:flex">
            <div className="m-auto md:w-1/2">
              <div className="flex items-center">
                <img className="" src={Number2} alt="number 2" />
                <h3 className="font-mulish font-bold text-[#3385ff]">
                  Liveness Check.
                </h3>
              </div>
              <span className="font-mulish text-[#545f7a]">
                Liveness Check là công nghệ hỗ trợ doanh nghiệp phát hiện, ngăn
                chặn các trường hợp giả mạo (Fraud) khuôn mặt, hình ảnh, video.
              </span>
              <div className="flex items-center">
                <img src={Star} alt="icon ngôi sao" />
                <span className="font-mulish font-medium text-gray-500">
                  Xác minh thông tin khách hàng đang thao tác tại thời gian
                  thực.
                </span>
              </div>
              <div className="flex items-center">
                <img src={Star} alt="icon ngôi sao" />
                <span className="font-mulish font-medium text-gray-500">
                  Định danh chính chủ phát hiện trường hợp giả mạo.
                </span>
              </div>
              <div className="flex items-center">
                <img src={Star} alt="icon ngôi sao" />
                <span className="font-mulish font-medium text-gray-500">
                  Thực hiện phân tích dữ liệu để nhận biết video không phải bản
                  phát lại.
                </span>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                className="m-auto w-3/4"
                src={LiveNess_Check}
                alt="LiveNess_Check"
              />
            </div>
          </div>
          {/* ID Sannity Check  */}
          <div className="p-6 md:flex md:flex-row-reverse">
            <div className="m-auto md:w-1/2">
              <div className="flex items-center">
                <img className="" src={Number3} alt="" />
                <h3 className="font-mulish font-bold text-[#3385ff]">
                  ID Sanity Check
                </h3>
              </div>
              <span className="font-mulish text-[#545f7a]">
                Giải pháp ID Sanity Check được xây dựng với những thuật toán thị
                giác máy tính (Computer Vision) tiên tiến, hiện đại giúp cho
                doanh nghiệp dễ dàng kiểm tra được chất lượng ảnh chụp.
              </span>
              <div className="flex items-center">
                <img src={Star} alt="icon ngôi sao" />
                <span className="font-mulish font-medium text-gray-500">
                  Giải pháp ID Sanity Check được xây dựng với những thuật toán
                  thị giác máy tính (Computer Vision) tiên tiến, hiện đại.
                </span>
              </div>
              <div className="flex items-center">
                <img src={Star} alt="icon ngôi sao" />
                <span className="font-mulish font-medium text-gray-500">
                  Phản hồi nhanh chóng, yêu cầu cung cấp lại ảnh mới.
                </span>
              </div>
              <div className="flex items-center">
                <img src={Star} alt="icon ngôi sao" />
                <span className="font-mulish font-medium text-gray-500">
                  Giải pháp toàn diện, lập trình thông minh thông qua Computer
                  Vision.
                </span>
              </div>
            </div>
            <div className="md:w-1/2">
              <img className="m-auto w-3/4" src={ID_Sanity} alt="ID_Sanity" />
            </div>
          </div>
          {/* Xác minh CCCD gắn chip  */}
          <div className="p-6 md:flex">
            <div className="m-auto md:w-1/2">
              <div className="flex items-center">
                <img className="" src={Number4} alt="" />
                <h3 className="font-mulish font-bold text-[#3385ff]">
                  Xác minh CCCD gắn chip
                </h3>
              </div>
              <span className="font-mulish text-[#545f7a]">
                Đọc và xác minh thông tin trên CCCD gắn chip sử dụng kết nối
                NFC. Từ đó, kiểm tra thông tin cá nhân khách hàng đã được xác
                thực bởi Bộ Công an một cách nhanh chóng và chính xác.
              </span>
              <div className="flex items-center">
                <img src={Star} alt="icon ngôi sao" />
                <span className="font-mulish font-medium text-gray-500">
                  Giao diện dễ dùng, tích hợp nhanh chóng trên mọi nền tảng, ứng
                  dụng.
                </span>
              </div>
              <div className="flex items-center">
                <img src={Star} alt="icon ngôi sao" />
                <span className="font-mulish font-medium text-gray-500">
                  Đọc thông tin với độ chính xác tuyệt đồi (thông tin được lưu
                  trong thẻ chip).
                </span>
              </div>
              <div className="flex items-center">
                <img src={Star} alt="icon ngôi sao" />
                <span className="font-mulish font-medium text-gray-500">
                  Ngăn chặn, phát hiện CCCD không hợp lệ.
                </span>
              </div>
              <div className="flex items-center">
                <img src={Star} alt="icon ngôi sao" />
                <span className="font-mulish font-medium text-gray-500">
                  Xác minh nhanh chóng, bảo mật tuyệt đối.
                </span>
              </div>
            </div>
            <div className="md:w-1/2">
              <img className="m-auto w-3/4" src={CheckCCCD} alt="CheckCCCD" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EkycPlatform
