import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import one from 'assets/info/1.png'
import two from 'assets/info/2.png'
import three from 'assets/info/3.png'
import four from 'assets/info/4.png'

const History = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out-quart',
    })
  }, [])

  const timelineItems = [
    {
      image: one,
      text: 'Tháng 12 năm 2021 HTC SoftWare và Trung tâm RAR ký thoả thuận hợp tác nghiên cứu sản phẩm xác thực thông tin công dân trong chip của thẻ căn cước công dân',
      year: '2021',
    },
    {
      image: two,
      text: 'Tháng 7 năm 2022 ký hợp đồng nguyên tắc về việc đưa dịch vụ xác thực thông tin công dân trong chip của thẻ căn cước công dân vào thị trường thử nghiệm',
      year: '2022',
    },
    {
      image: three,
      text: 'Tháng 4 năm 2023 HTC Software và Trung tâm RAR ký chính thức hợp đồng cung cấp dịch vụ xác thực thông tin công dân trong chip của thẻ căn cước công dân',
      year: '2023',
    },
    {
      image: four,
      text: 'Hiện tại - Là thành viên trong "Hiệp hội dữ liệu quốc gia"',
      year: '2024',
    },
  ]

  return (
    <div className='py-20 '>
      <div className='container mx-auto px-4 max-w-6xl'>
        <div className='relative'>
          {/* Timeline line */}
          <div
            className='hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500'
            data-aos='fade-up'
            data-aos-delay='300'
          ></div>

          <div className='space-y-8 md:space-y-16'>
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                data-aos='fade-up'
                data-aos-delay={index * 150 + 300}
              >
                {/* Image section */}
                <div className='w-full md:w-5/12 flex justify-center relative'>
                  <div className='relative group'>
                    {/* Year badge */}
                    <div
                      className={`absolute -top-4 ${
                        index % 2 === 0 ? 'md:-left-4' : 'md:-right-4'
                      } z-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg font-medium`}
                    >
                      {item.year}
                    </div>

                    {/* Image with modern frame */}
                    <div className='overflow-hidden rounded-xl shadow-2xl border-8 border-white transform rotate-1 group-hover:rotate-0 transition-all duration-500'>
                      <img
                        src={item.image}
                        alt={`Timeline event ${index + 1}`}
                        className='w-5/6 m-auto object-cover transition-transform duration-500 group-hover:scale-105'
                      />
                    </div>
                  </div>
                </div>

                {/* Text section */}
                <div className='w-full md:w-7/12'>
                  <div
                    className={`bg-white p-8 rounded-xl shadow-lg relative overflow-hidden ${
                      index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                    } transition-all duration-300 hover:shadow-xl`}
                  >
                    {/* Decorative accent */}
                    <div className='absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500'></div>

                    <p className='text-gray-700 leading-relaxed text-sm font-mulish'>{item.text}</p>

                    {/* Timeline dot for mobile */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default History
