import SlideSwiper from '../../Components/SlideSwiper'
import product_et from '../../../Img/Products/Et100/product-et6.png'
import TableSpecification from '../../Components/TableSpecification'
import SlideShowSwiper from '../../Components/SlideShowSwiper'
import slide_image_0 from '../../../Img/Products/Sr/sr_cheo.png'
import slide_image_1 from '../../../Img/Products/Sr/sr_truoc.png'
import slide_image_2 from '../../../Img/Products/Sr/sr_sau.png'
import slide_image_3 from '../../../Img/Products/Sr/sr_trai.png'
import slide_image_4 from '../../../Img/Products/Sr/sr_phai.png'
import slide_image_5 from '../../../Img/Products/Sr/sr_tren.png'
import SmartCard from '../../../Img/Products/product-icon.png'
import NFC from '../../../Img/Products/product-icon2.png'
import Camera from '../../../Img/Products/product-icon3.png'
import MRZ from '../../../Img/Products/product-icon5.png'
import imgProduct_SR from '../../../Img/Products/Sr/sr_main.png'

const CheckIdSr = () => {
    // Style SwiperConfig
    const swiperConfig = {
        spaceBetween: 20,
        pagination: { clickable: true },
        freeMode: true,
    }
    const DataSlideShow = [
        {
            slideContent: slide_image_0,
        },
        {
            slideContent: slide_image_1,
        },
        {
            slideContent: slide_image_2,
        },
        {
            slideContent: slide_image_3,
        },
        {
            slideContent: slide_image_4,
        },
        {
            slideContent: slide_image_5,
        },
    ]
    const DataTableCheckIdSr = [
        {
            itemA: 'Name',
            specificationA: 'Slot load smart card scanner',
            itemB: 'Security module',
            specificationB:
                'Security module Embedded ID card security module (SAM) optional',
        },
        {
            itemA: 'RF technology',
            specificationA: 'Support ISO/IEC 14443 Type A/B',
            itemB: 'Power input',
            specificationB: 'DC 12V ± 5% 1500 mA',
        },
        {
            itemA: 'Scan spec',
            specificationA: '300DPI double size full color 87mm/second',
            itemB: 'Power consumption',
            specificationB: 'Quiescent current ≤ 190 mA \nPeak current≤1000 mA',
        },
        {
            itemA: 'Universal ID documentation type',
            specificationA: 'Viet Nam national ID card',
            itemB: 'Environment condition',
            specificationB:
                'Operation: 0°C - 50°C, 0°C - 90% RH (non-condense) \nStorage: -30°C - 60°C, 0°C - 95% RH (non-condense)',
        },
        {
            itemA: 'Working frequency',
            specificationA: '13.56MHz ± 7kHz',
            itemB: 'Net weight',
            specificationB: 'About 450g',
        },
        {
            itemA: 'Operation speed',
            specificationA: '≤3 second (depending on card)',
            itemB: 'RoHS standard',
            specificationB: 'Conform to RoHS standard',
        },
        {
            itemA: 'Camera spec',
            specificationA:
                '2.0M pixel 1080P resolution, fixed length, rotate angle',
            itemB: 'Communicate interface',
            specificationB: 'USB 2.0 high-speed interface',
        },
        {
            itemA: 'Platform',
            specificationA: 'Windows',
            itemB: 'Update',
            specificationB: 'Support firmware update',
        },
    ]
    const dataSlides = [
        {
            slideContent: product_et,
            slideName: 'Check ID-SR',
            slideDescription: 'ID Card Reader/Scanner',
            linkProduct: '/checkid-et100',
        },
        {
            slideContent: product_et,
            slideName: 'Check ID-SR',
            slideDescription: 'ID Card Reader/Scanner',
            linkProduct: '/checkid-et100',
        },
        {
            slideContent: product_et,
            slideName: 'Check ID-SR',
            slideDescription: 'ID Card Reader/Scanner',
            linkProduct: '/checkid-et100',
        },
        {
            slideContent: product_et,
            slideName: 'Check ID-SR',
            slideDescription: 'ID Card Reader/Scanner',
            linkProduct: '/checkid-et100',
        },
        {
            slideContent: product_et,
            slideName: 'Check ID-SR',
            slideDescription: 'ID Card Reader/Scanner',
            linkProduct: '/checkid-et100',
        },
        {
            slideContent: product_et,
            slideName: 'Check ID-SR',
            slideDescription: 'ID Card Reader/Scanner',
            linkProduct: '/checkid-et100',
        },
    ]

    return (
        <div className="App">
            {/* Banner sản phẩm  */}
            <section>
                <div className="md: bg-bg-img-product p-3 md:flex md:p-7">
                    <div className="m-auto text-center md:w-1/2">
                        <div className="mb-[5%]">
                            <h1 className="xxl:text-[7rem] font-roboto text-5xl font-black text-white xl:text-[5rem]">
                                ID Card Reader <br />
                                (CheckID-SR)
                            </h1>
                        </div>
                        <div>
                            <i className="font-roboto text-white xl:text-2xl">
                                Đầu đọc/quét thẻ ID cho kiosk tự phục vụ
                            </i>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img src={imgProduct_SR} alt="imgProduct_SR" />
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
                                ID Card Reader/Scanner
                            </i>
                        </div>

                        <p className="text-left font-roboto text-main-colors">
                            Hưởng lợi từ việc nhập dữ liệu và xác minh chính xác{' '}
                            <br />
                            Thiết kế OEM cho cổng ABC và các Kiosk tự phục vụ{' '}
                            <br />
                            Thiết kế trực quan dễ sử dụng <br /> Kiểm tra tự
                            động hành khách, vận hành 24/7 <br /> Đọc và xác
                            minh mọi loại thẻ bao gồm cả tài liệu điện tử du
                            lịch
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
            <section>
                <TableSpecification data={DataTableCheckIdSr} />
            </section>
            {/* Xem thêm sản phẩm */}
            <section>
                <div className="m-auto w-3/4">
                    <SlideSwiper
                        slides={dataSlides}
                        swiperConfig={swiperConfig}
                    />
                </div>
            </section>
        </div>
    )
}
export default CheckIdSr
