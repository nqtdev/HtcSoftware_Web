// @ Page sản phẩm Rar eKYC Platform
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Banner from '../../../Img/EkycFlatform/svg/banner.svg'
import CheckTicker from '../../../Img/EkycFlatform/check_ticket.png'
import IconNFC from '../../../Img/EkycFlatform/s3_01.png'
import IconLiveNess from '../../../Img/EkycFlatform/s3_02.png'
import IconConnect from '../../../Img/EkycFlatform/s3_03.png'
import IconShow from '../../../Img/EkycFlatform/s3_04.png'
import IconNfc from '../../../Img/EkycFlatform/s4_nfc.png'
import IconSdk from '../../../Img/EkycFlatform/s4_sdk.png'
import IconApi from '../../../Img/EkycFlatform/s4_api.png'
import ImgSEA from '../../../Img/EkycFlatform/logo_doitac/15.svg'
import ImgTech from '../../../Img/EkycFlatform/logo_doitac/1.svg'
import ImgBIDV from '../../../Img/EkycFlatform/logo_doitac/2.svg'
import ImgViettin from '../../../Img/EkycFlatform/logo_doitac/3.svg'
import ImgMB from '../../../Img/EkycFlatform/logo_doitac/4.svg'
import ImgVietcom from '../../../Img/EkycFlatform/logo_doitac/5.svg'
import ImgACB from '../../../Img/EkycFlatform/logo_doitac/6.svg'
import ImgTp from '../../../Img/EkycFlatform/logo_doitac/7.svg'
import ImgShinhan from '../../../Img/EkycFlatform/logo_doitac/7-1.svg'
import ImgMSB from '../../../Img/EkycFlatform/logo_doitac/7-2.svg'
import ImgCMC from '../../../Img/EkycFlatform/logo_doitac/10.svg'
import ImgViettel from '../../../Img/EkycFlatform/logo_doitac/11.svg'
import ImgVNPT from '../../../Img/EkycFlatform/logo_doitac/12.svg'
import ImgFPT from '../../../Img/EkycFlatform/logo_doitac/13.svg'
import ImgSHB from '../../../Img/EkycFlatform/logo_doitac/14.svg'
import Gcn from '../../../Img/EkycFlatform/s6_gcn.png'
import GcnZ from '../../../Img/EkycFlatform/s6_gcn-zoom.png'
import Dkth from '../../../Img/EkycFlatform/s6_dkth.png'
import DkthZ from '../../../Img/EkycFlatform/s6_dkth-zoom.png'
import Banner_CCDV from '../../../Img/EkycFlatform/cungcapdv.png'

const RarEkyc = () => {
    useEffect(() => {
        AOS.init()
    })
    return (
        <div className="container m-auto w-full xl:w-10/12">
            <section className="flex max-w-full flex-col justify-between lg:flex-row">
                <div className="container m-auto box-border px-2">
                    <h1 className="m-2 text-center text-[2.1rem] font-bold italic text-main-colors sm:text-[3.5rem] md:text-[2.8rem] lg:text-4xl xl:text-7xl">
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
                            RAR eKYC Platform là dịch vụ xác minh tính đúng đắn,
                            tính toàn vẹn thông tin, xác minh chữ ký trên thẻ
                            chip với trung tâm RAR-C06 của Bộ Công An, Dịch vụ
                            RAR eKYC Platform có khả năng chống giả mạo ở mức
                            tuyệt đối, giảm tối đa các rủi ro trong giao dịch
                            định danh điện tử, tăng trải nghiệm khách hàng và
                            đáp ứng nhu cầu chuyển đổi số cho các doanh nghiệp.
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
                    <h2 className="all-textList">Giá trị chúng tôi đem lại</h2>
                </div>
                <div className="m-auto h-max w-full rounded-3xl border-2 border-solid border-blue-950 bg-bg-img lg:w-4/5">
                    <ul className="lg:p-7">
                        <li className="s-list">
                            <div className="w-1/12">
                                <img
                                    className="m-auto w-1/2"
                                    src={CheckTicker}
                                    alt="check_ticket"
                                />
                            </div>
                            <div className="ml-3">
                                <span className="s2-content">
                                    Onboard khách hàng nhanh chóng và an toàn{' '}
                                </span>
                            </div>
                        </li>
                        <li className="s-list">
                            <div className="w-1/12">
                                <img
                                    className="m-auto w-1/2"
                                    src={CheckTicker}
                                    alt="check_ticket"
                                />
                            </div>
                            <div className="ml-3">
                                <span className="s2-content">
                                    Phát hiện gian lận, giả mạo về hình ảnh,
                                    thông tin giấy tờ.{' '}
                                </span>
                            </div>
                        </li>
                        <li className="s-list">
                            <div className="w-1/12">
                                <img
                                    className="m-auto w-1/2"
                                    src={CheckTicker}
                                    alt="check_ticket"
                                />
                            </div>
                            <div className="ml-3">
                                <span className="s2-content">
                                    Mang lại giá trị tốt nhất.{' '}
                                </span>
                            </div>
                        </li>
                        <li className="s-list">
                            <div className="w-1/12">
                                <img
                                    className="m-auto w-1/2"
                                    src={CheckTicker}
                                    alt="check_ticket"
                                />
                            </div>
                            <div className="ml-3">
                                <span className="s2-content">
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
                    <h2 className="all-textList">
                        Thao tác{' '}
                        <span className="text-5xl text-green-600">4 bước</span>{' '}
                        đơn giản
                    </h2>
                </div>
                <div>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        {/* Bước 1 */}
                        <div className="s3-content">
                            <div className="text-center">
                                <h4 className="s3-text">Bước 1</h4>
                                <i className="font-roboto text-main-colors">
                                    Đưa CCCD gắn chip vào thiết bị đọc thẻ chip
                                </i>
                            </div>
                            <img
                                className="s3-img"
                                src={IconNFC}
                                alt="biểu tượng đọc thẻ"
                            />
                        </div>
                        {/* Bước 2 */}
                        <div className="s3-content">
                            <div className="text-center">
                                <h4 className="s3-text">Bước 2</h4>
                                <i className="font-roboto text-main-colors">
                                    Xác thực khuôn mặt chân dung chủ giấy tờ
                                </i>
                            </div>
                            <img
                                className="s3-img"
                                src={IconLiveNess}
                                alt="biểu tượng xác thực khuôn mặt"
                            />
                        </div>
                        {/* Bước 3 */}
                        <div className="s3-content">
                            <div className="text-center">
                                <h4 className="s3-text">Bước 3</h4>
                                <i className="font-roboto text-main-colors">
                                    Xác thực CCCD gắn chip với Bộ Công An
                                </i>
                            </div>
                            <img
                                className="s3-img"
                                src={IconConnect}
                                alt="biểu tượng xác thực cccd"
                            />
                        </div>
                        {/* Bước 4 */}
                        <div className="s3-content">
                            <div className="text-center">
                                <h4 className="s3-text">Bước 4</h4>
                                <i className="font-roboto text-main-colors">
                                    Gửi kết quả xác thực cho ứng dụng thích hợp
                                </i>
                            </div>
                            <img
                                className="s3-img"
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
                    <h2 className="all-textList">Hình thức cung cấp dịch vụ</h2>
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
                                    Chúng tôi sẵn sàng cung cấp cho quý khách
                                    thiết bị đọc thẻ chip chuyên dụng để đọc
                                    thông tin trong thẻ căn cước công dân gắn
                                    chip
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
                                    Bộ SDK (IOS, Android) sẵn sàng cung cấp cho
                                    quý khách để đọc thông tin căn cước gắn chip
                                    qua công nghệ kết nối gần NFC
                                </p>
                            </div>
                        </li>
                        <li className="flex p-1">
                            <div>
                                <img src={IconApi} alt="biểu tượng api" />
                            </div>
                            <div className="mx-2">
                                <h5 className="mb-1 text-lg font-semibold text-white">
                                    API:{' '}
                                </h5>
                                <p className="text-sm text-white">
                                    Quý khách hàng đã có thiết bị đọc thẻ, có
                                    thể sử dụng API xác thực thông tin căn cước
                                    công dân gắn chip với RAR-C06 của chúng tôi
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
                <div data-aos="zoom-in" data-aos-duration="1000">
                    <h2 className="all-textList">Đối tác của chúng tôi</h2>
                </div>
                <div className="s5_scroll">
                    <div className="s5_logo">
                        <img className="s5_logo_img" src={ImgSEA} alt="" />
                    </div>
                    <div className="s5_logo">
                        <img className="s5_logo_img" src={ImgTech} alt="" />
                    </div>
                    <div className="s5_logo">
                        <img className="s5_logo_img" src={ImgBIDV} alt="" />
                    </div>
                    <div className="s5_logo">
                        <img className="s5_logo_img" src={ImgViettin} alt="" />
                    </div>
                    <div className="s5_logo">
                        <img className="s5_logo_img" src={ImgMB} alt="" />
                    </div>
                    <div className="s5_logo">
                        <img className="s5_logo_img" src={ImgVietcom} alt="" />
                    </div>
                    <div className="s5_logo">
                        <img className="s5_logo_img" src={ImgACB} alt="" />
                    </div>
                    <div className="s5_logo">
                        <img className="s5_logo_img" src={ImgTp} alt="" />
                    </div>
                    <div className="s5_logo">
                        <img className="s5_logo_img" src={ImgShinhan} alt="" />
                    </div>
                </div>
                <div className="s5_scroll">
                    <div className="s5_logo">
                        <img className="s5_logo_img" src={ImgMSB} alt="" />
                    </div>
                    <div className="s5_logo">
                        <img className="s5_logo_img" src={ImgCMC} alt="" />
                    </div>
                    <div className="s5_logo">
                        <img className="s5_logo_img" src={ImgViettel} alt="" />
                    </div>
                    <div className="s5_logo">
                        <img className="s5_logo_img" src={ImgVNPT} alt="" />
                    </div>
                    <div className="s5_logo">
                        <img className="s5_logo_img" src={ImgFPT} alt="" />
                    </div>
                    <div className="s5_logo">
                        <img className="s5_logo_img" src={ImgSHB} alt="" />
                    </div>
                    <div className="s5_logo">
                        <img className="s5_logo_img" src={ImgACB} alt="" />
                    </div>
                    <div className="s5_logo">
                        <img className="s5_logo_img" src={ImgMSB} alt="" />
                    </div>
                    <div className="s5_logo">
                        <img className="s5_logo_img" src={ImgViettin} alt="" />
                    </div>
                </div>
            </section>
            {/* Giấy chứng nhận */}
            <section className="m-auto md:w-3/4">
                <div data-aos="zoom-in" data-aos-duration="1000">
                    <h2 className="all-textList">Giấy chứng nhận</h2>
                </div>
                <div>
                    <div className="mb-5 flex flex-col sm:flex-row">
                        <div className="m-auto max-w-xs overflow-hidden pt-3">
                            <img
                                className="thumbnail h-auto w-full cursor-pointer"
                                src={Gcn}
                                data-highres={GcnZ}
                                alt="ảnh giấy chứng nhận"
                            />
                        </div>
                        <div className="m-auto max-w-xs overflow-hidden pt-3">
                            <img
                                className="thumbnail h-auto w-full cursor-pointer"
                                src={Dkth}
                                data-highres={DkthZ}
                                alt="ảnh đăng ký thương hiệu"
                            />
                        </div>
                    </div>
                    {/* Overlay để hiển thị ảnh lớn */}
                    {/* <div id="popup" className="popup-overlay">
                        <div className="relative rounded-lg bg-white p-1">
                            <img id="popupImage" src="" alt="Popup Image" />
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    )
}

export default RarEkyc
