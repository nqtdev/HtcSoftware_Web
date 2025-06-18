import 'aos/dist/aos.css'
import History from 'components/info/history'
import Certificate from 'components/rarEkyc/Certificate'
import PartnerLogo from 'components/rarEkyc/PartnerLogo'
import useCheckMobile from 'hooks/useCheckMobile'
const HomePage = () => {
  const isMobile = useCheckMobile()
  return (
    <div className='bg-gradient-to-br from-slate-50 to-blue-50'>
      <div className='container m-auto w-full xl:w-10/12 '>
        {/* Giới thiệu về HTC  */}
        <section className='text-center flex justify-center items-center h-screen'>
          <div>
            <h1 className='text-[#223464] font-mulish text-4xl md:text-7xl font-bold '>
              Về HTC SOFTWARE
            </h1>
            <h2 className='xl:text-3xl text-lg font-light font-roboto m-4 text-[#223464]'>
              "Dám nghĩ - Dám làm - Luôn sáng tạo"{' '}
            </h2>{' '}
            <div className='lg:w-3/5 m-auto'>
              <span className='font-sans text-gray-700 text-sm xl:text-xl'>
                Đây chính là thông điệp quan trọng nhất mà Ban lãnh đạo và tất cả cán bộ nhân viên
                HTC hướng đến. Với mục tiêu "Phục vụ khách hàng tốt nhất với những gì mình có", HTC
                luôn nỗ lực, cố gắng thay đổi và hoàn thiện hơn mỗi ngày để khách hàng luôn nhận
                được{' '}
                <span className='font-bold text-sm xl:text-xl'>
                  {' '}
                  "dịch vụ và giá trị tốt nhất".
                </span>
              </span>
            </div>
          </div>
        </section>
        {/* Tầm nhìn - Sử mệnh  */}
        <section className='text-center mt-20 ' data-aos='fade-up' data-aos-duration='1000'>
          <h2 className='xl:text-3xl text-lg font-light font-roboto m-4 text-[#223464]'>
            Tầm nhìn và sứ mệnh
          </h2>
          <div className='xl:w-4/5 m-auto mt-4'>
            <span className='font-sans text-gray-700 text-sm xl:text-xl '>
              Với tinh thần Đón đầu xu hướng Công nghệ số hoá, hỗ trợ các Đối tác Khách hàng, Ngân
              hàng, Tổ chức tài chính, Doanh nghiệp số hoá các lĩnh vực trong việc Định danh và Xác
              thực điện tử. Định danh và xác thực điện tử giúp khẳng định chính xác danh tính số hợp
              pháp của người thực hiện giao dịch, nâng cao độ bảo mật và tin tưởng giữa người dân,
              chính quyền và doanh nghiệp trên môi trường số. Chúng tôi tin rằng sự phát triển bền
              vững của Khách hàng, Đối tác là quan trọng và để đạt được điều này HTC đã tập trung nỗ
              lực, phát triển công nghệ và sản phẩm.
            </span>
          </div>
        </section>
        {/* Video giới thiệu  */}
        <section className='mt-10'>
          <iframe
            className='m-auto px-2 rounded-lg'
            width={isMobile ? '380' : '1020'}
            height={isMobile ? '250' : '630'}
            src='https://www.youtube.com/embed/dhS4VUslonQ?autoplay=1&mute=1&start=4&loop=1&playlist=dhS4VUslonQ&vq=hd1080rel=0'
            title='YouTube video player'
            // frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            // referrerpolicy='strict-origin-when-cross-origin'
            allowfullscreen
          ></iframe>
        </section>
        {/* Lịch sử hình thành  */}
        <section className='mt-10' data-aos='zoom-in' data-aos-duration='1000'>
          <div>
            <h2 className='base_title'>Lịch sử hình thành HTC Software</h2>
            <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full'></div>
          </div>

          <div className='px-10'>
            <History />
          </div>
        </section>
        {/* Chứng nhận */}
        <section className='m-auto md:w-3/4'>
          <div>
            <h2 className='base_title'>Giấy chứng nhận</h2>
            <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full'></div>
          </div>
          <Certificate />
        </section>
        {/* Đối tác */}
        <section>
          <PartnerLogo />
        </section>
      </div>
    </div>
  )
}

export default HomePage
