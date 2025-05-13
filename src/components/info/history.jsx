import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import one from 'assets/info/1.png'
import two from 'assets/info/2.png'
import three from 'assets/info/3.png'
import four from 'assets/info/4.png'
// import useCheckMobile from 'hooks/useCheckMobile';

const History = () => {
  // const isMobile = useCheckMobile();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    })
  }, [])

  const timelineItems = [
    {
      image: one,
      text: 'Tháng 12 năm 2021 HTC SoftWare và Trung tâm RAR ký thoả thuận hợp tác nghiên cứu sản phẩm xác thực thông tin công dân trong chip của thẻ căn cước công dân',
      animation: 'fade-up',
      animationAnchor: 'top-bottom',
    },
    {
      image: two,
      text: 'Tháng 7 năm 2022 ký hợp đồng nguyên tắc về việc đưa dịch vụ xác thực thông tin công dân trong chip của thẻ căn cước công dân vào thị trường thử nghiệm',
      animation: 'fade-up',
      animationAnchor: 'top-center',
    },
    {
      image: three,
      text: 'Tháng 4 năm 2023 HTC Software và Trung tâm RAR ký chính thức hợp đồng cung cấp dịch vụ xác thực thông tin công dân trong chip của thẻ căn cước công dân',
      animation: 'fade-up',
      animationAnchor: 'top-bottom',
    },
    {
      image: four,
      text: `Hiện tại - Là thành viên trong "Hiệp hội dữ liệu quốc gia"`,
      animation: 'fade-up',
      animationAnchor: 'top-center',
    },
  ]

  return (
    <div className='py-16'>
      <div className='container mx-auto px-4'>
        <div className='relative'>
          {/* Center line */}
          <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500'></div>

          <div className='space-y-16 md:space-y-24'>
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8`}
                data-aos={item.animation}
                data-aos-anchor-placement={item.animationAnchor}
              >
                <div className='w-full md:w-1/2 flex justify-center'>
                  <div className='relative'>
                    {/* <div className='hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-8 rounded-full bg-blue-500 border-4 border-white shadow-lg'></div> */}
                    <img
                      src={item.image}
                      alt={`Timeline event ${index + 1}`}
                      className='rounded-lg shadow-lg max-w-full h-auto transition-transform duration-300 hover:scale-105'
                    />
                  </div>
                </div>
                <div className='w-full md:w-1/2'>
                  <div className='bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 transition-all duration-300 hover:shadow-xl'>
                    <p className='font-mulish text-gray-700 leading-relaxed'>{item.text}</p>
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
