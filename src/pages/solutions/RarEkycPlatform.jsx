// import {useEffect} from 'react'
import Banner from 'assets/page_RarEkycPlatform/banner.webp'
import IconNFC from 'assets/page_RarEkycPlatform/section_content/scan_nfc.png'
import IconLiveNess from 'assets/page_RarEkycPlatform/section_content/liveness.png'
import IconConnect from 'assets/page_RarEkycPlatform/section_content/connect.png'
import IconShow from 'assets/page_RarEkycPlatform/section_content/view.png'
import IconNfc from 'assets/page_RarEkycPlatform/section_content_b/icon_nfc.png'
import IconSdk from 'assets/page_RarEkycPlatform/section_content_b/icon_sdk.png'
import IconApi from 'assets/page_RarEkycPlatform/section_content_b/icon_api.png'
import Banner_CCDV from 'assets/page_RarEkycPlatform/section_content_b/banner_section.png'
import PartnerLogo from 'components/rarEkyc/PartnerLogo'
import Certificate from 'components/rarEkyc/Certificate'

import DescribeTitle from 'layout/describeTitle/describeTitle'
import CallToAction from 'layout/callToAcction'
import ButtonContact from 'layout/buttons/ButtonContact'

const RarEkycPlatform = () => {
  // useEffect(() => {
  //   // Khởi tạo AOS nếu cần
  //   if (typeof window !== 'undefined') {
  //     const AOS = require('aos')
  //     require('aos/dist/aos.css')
  //     AOS.init({
  //       duration: 1000,
  //       once: true,
  //       easing: 'ease-out-cubic',
  //     })
  //   }
  // }, [])

  return (
    <div className='overflow-hidden'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4'>
        <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
          <div className='absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
          <div className='absolute top-1/4 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
          <div className='absolute bottom-0 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
        </div>

        <div className='container mx-auto max-w-7xl relative z-10'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
            <div
              className='w-full lg:w-1/2 text-center lg:text-left'
              data-aos='fade-right'
              data-aos-delay='200'
            >
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6'>
                RAR eKYC Platform
              </h1>
              <p className='text-xl md:text-2xl text-gray-700 mb-6'>
                Xác thực căn cước công dân gắn chip chính xác{' '}
                <span className='font-bold text-green-600'>100%</span> với cơ sở dữ liệu
                <span className='font-bold text-green-600'> RAR-C06</span> của Bộ Công An
              </p>
              <p className='text-gray-600 mb-8 leading-relaxed'>
                RAR eKYC Platform là dịch vụ xác minh tính đúng đắn, tính toàn vẹn thông tin, xác
                minh chữ ký trên thẻ chip với trung tâm RAR-C06 của Bộ Công An. Dịch vụ có khả năng
                chống giả mạo ở mức tuyệt đối, giảm tối đa các rủi ro trong giao dịch định danh điện
                tử, tăng trải nghiệm khách hàng và đáp ứng nhu cầu chuyển đổi số cho các doanh
                nghiệp.
              </p>
            </div>
            <div className='w-full lg:w-1/2' data-aos='fade-left' data-aos-delay='400'>
              <div className='relative items-center justify-center flex'>
                {/* <div className='absolute -inset-5'>
                  <div className='w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-blue-400 to-purple-600'></div>
                </div> */}
                <img
                  src={Banner}
                  alt='RAR eKYC Platform'
                  className='relative w-full max-w-md mx-auto lg:mx-0 transform hover:scale-105 transition-transform duration-700'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Giá trị của sản phẩm */}
      <section className='py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50/30'>
        <div className='container mx-auto max-w-6xl'>
          <DescribeTitle
            title='Giá trị chúng tôi đem lại'
            description='Những lợi ích nổi bật khi sử dụng nền tảng xác thực định danh điện tử RAR eKYC Platform'
          />

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-16'>
            {[
              {
                title: 'Onboard khách hàng nhanh chóng và an toàn',
                description:
                  'Quy trình đăng ký được tối ưu hóa, giảm thời gian xác thực từ vài ngày xuống còn vài phút',
                icon: (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-12 h-12'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={1.5}
                      d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={1.5}
                      d='M12 11.5v5m0-5h3m-3 0H9'
                    />
                  </svg>
                ),
                color: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'Phát hiện gian lận, giả mạo về hình ảnh, thông tin giấy tờ',
                description:
                  'Công nghệ AI tiên tiến nhận diện và ngăn chặn các hình thức giả mạo tinh vi nhất',
                icon: (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-12 h-12'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={1.5}
                      d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
                    />
                  </svg>
                ),
                color: 'from-amber-500 to-orange-500',
              },
              {
                title: 'Mang lại giá trị tốt nhất với chi phí tối ưu',
                description:
                  'Giải pháp tiết kiệm chi phí vận hành lên đến 60% so với phương pháp truyền thống',
                icon: (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-12 h-12'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={1.5}
                      d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                ),
                color: 'from-emerald-500 to-green-500',
              },
              {
                title: 'Rút ngắn thời gian thẩm định và xử lý hồ sơ',
                description:
                  'Tự động hóa quy trình xử lý hồ sơ, giảm thời gian từ vài giờ xuống còn vài phút',
                icon: (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-12 h-12'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={1.5}
                      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={1.5}
                      d='M12 6v6l3 3'
                    />
                  </svg>
                ),
                color: 'from-purple-500 to-indigo-500',
              },
            ].map((item, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col'
                data-aos='fade-up'
                data-aos-delay={index * 100}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} text-white p-3 mb-6`}
                >
                  {item.icon}
                </div>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>{item.title}</h3>
                <p className='text-gray-600 flex-grow'>{item.description}</p>
                <div className='mt-4 pt-4 border-t border-gray-100 flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4 ml-1 text-blue-500'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M14 5l7 7m0 0l-7 7m7-7H3'
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Additional CTA Section */}
          <div
            className='mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl'
            data-aos='fade-up'
          >
            <h3 className='text-2xl md:text-3xl font-bold mb-4'>
              Bắt đầu hành trình chuyển đổi số của bạn
            </h3>
            <p className='text-lg text-blue-100 max-w-2xl mx-auto mb-8'>
              Khám phá cách nền tảng xác thực định danh điện tử của chúng tôi có thể cách mạng hóa
              quy trình doanh nghiệp của bạn
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <ButtonContact />
            </div>
          </div>
        </div>
      </section>

      {/* Thao tác sử dụng */}
      <section className='py-20 px-4 bg-gray-50'>
        <div className='container mx-auto max-w-6xl'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-semibold text-gray-800 mb-4'>
              Thao tác <span className='text-green-600'>4 bước</span> đơn giản
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6'></div>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              Quy trình xác thực nhanh chóng và dễ dàng thực hiện
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              {
                step: 'Bước 1',
                text: 'Đưa CCCD gắn chip vào thiết bị đọc thẻ chip',
                icon: IconNFC,
                delay: 200,
              },
              {
                step: 'Bước 2',
                text: 'Xác thực khuôn mặt chân dung chủ giấy tờ',
                icon: IconLiveNess,
                delay: 400,
              },
              {
                step: 'Bước 3',
                text: 'Xác thực CCCD gắn chip với Bộ Công An',
                icon: IconConnect,
                delay: 600,
              },
              {
                step: 'Bước 4',
                text: 'Gửi kết quả xác thực cho ứng dụng thích hợp',
                icon: IconShow,
                delay: 800,
              },
            ].map((item, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center'
                data-aos='fade-up'
                data-aos-delay={item.delay}
              >
                <h4 className='text-lg font-semibold text-gray-800 mb-2'>{item.step}</h4>
                <p className='text-gray-600 mb-4 flex-grow'>{item.text}</p>
                <div className='w-20 h-20 bg-blue-50 rounded-xl flex items-center justify-center p-4'>
                  <img src={item.icon} alt={item.step} className='w-full h-full object-contain' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hình thức cung cấp dịch vụ */}
      <section className='py-20 px-4 bg-white'>
        <div className='container mx-auto max-w-6xl'>
          <DescribeTitle
            title='Hình thức cung cấp dịch vụ'
            description='Đa dạng phương thức tích hợp phù hợp với mọi nhu cầu của doanh nghiệp'
          />

          <div
            className='bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl overflow-hidden shadow-2xl mt-12'
            data-aos='fade-up'
          >
            <div className='flex flex-col lg:flex-row'>
              <div className='w-full lg:w-3/5 p-8 md:p-12'>
                <div className='space-y-8'>
                  {[
                    {
                      icon: IconNfc,
                      title: 'Thiết bị đọc thẻ chip',
                      desc: 'Chúng tôi sẵn sàng cung cấp cho quý khách thiết bị đọc thẻ chip chuyên dụng để đọc thông tin trong thẻ căn cước công dân gắn chip',
                    },
                    {
                      icon: IconSdk,
                      title: 'SDK NFC',
                      desc: 'Bộ SDK (IOS, Android) sẵn sàng cung cấp cho quý khách để đọc thông tin căn cước gắn chip qua công nghệ kết nối gần NFC',
                    },
                    {
                      icon: IconApi,
                      title: 'API',
                      desc: 'Quý khách hàng đã có thiết bị đọc thẻ, có thể sử dụng API xác thực thông tin căn cước công dân gắn chip với RAR-C06 của chúng tôi',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className='flex items-start p-4 bg-white/10 backdrop-blur-sm rounded-2xl'
                      data-aos='fade-right'
                      data-aos-delay={index * 200}
                    >
                      <div className='flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-md'>
                        <img src={item.icon} alt={item.title} className='w-12 h-12' />
                      </div>
                      <div>
                        <h5 className='text-lg font-semibold text-white mb-1'>{item.title}</h5>
                        <p className='text-blue-100'>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className='w-full lg:w-2/5 flex items-center justify-center p-8'>
                <div className='relative' data-aos='zoom-in' data-aos-delay='600'>
                  <div className='absolute -inset-5'>
                    <div className='w-full h-full opacity-30 blur-lg bg-gradient-to-r from-blue-400 to-purple-400'></div>
                  </div>
                  <img
                    src={Banner_CCDV}
                    alt='Hình thức cung cấp dịch vụ'
                    className='relative rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-700'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Đối tác */}
      <section className='py-16 px-4 bg-gray-50'>
        <div className='container mx-auto max-w-6xl'>
          <PartnerLogo />
        </div>
      </section>

      {/* Chứng nhận */}
      <section className='py-16 px-4 bg-white'>
        <div className='container mx-auto max-w-6xl'>
          <DescribeTitle title='Chứng nhận' description='' />
          <div className='mt-12'>
            <Certificate />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction />

      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}

export default RarEkycPlatform
