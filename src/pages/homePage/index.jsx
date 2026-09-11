/* eslint-disable react/no-unescaped-entities */
import StrokeText from '@/libs/ReactBits/StrokeText'
import TextLoop from '@/libs/ReactBits/TextLoop'
import 'aos/dist/aos.css'
import imgHTC from 'assets/page_HomePage/bg-htc.webp'
import Certificate from 'components/rarEkyc/Certificate'
import PartnerLogo from 'components/rarEkyc/PartnerLogo'
import DescribeTitle from 'layout/DescribeTitle'
import Particles from 'libs/ReactBits/Particles'
import AboutCompany from './components/AboutCompany'
import BusinessAreas from './components/BusinessAreas'
import CompanyOverview from './components/CompanyOverview'
import Contact from './components/Contact'
import MissionVisionValues from './components/MissionVisionValues'
const HomePage = () => {
  return (
    <div className='overflow-hidden'>
      <div className='relative min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden'>
        <div className='absolute inset-0'>
          <Particles
            particleColors={['#ffffff', '#3f11e4']}
            particleCount={300}
            particleSpread={12}
            speed={0.2}
            particleBaseSize={120}
            alphaParticles={false}
            disableRotation={true}
            cameraDistance={30}
          />
        </div>
        <div
          className='relative z-10 flex justify-center min-h-screen
         px-4 sm:px-6 lg:px-8
         items-center py-8'
        >
          <section className='w-full text-center'>
            <StrokeText
              text='HTC SOFTWARE'
              strokeColor='#A78BFA'
              fillColor='#ffffff'
              strokeWidth={2.6}
              fillDelay={0.2}
              stagger={0.05}
              ease='sine.inOut'
              trigger='mount'
              fillMode='wipe'
              fontSize={160}
              fontWeight={700}
              letterSpacing={3}
              reverse={false}
            />
            <h2
              className='text-[#FFFFFF] font-roboto font-light
             text-lg sm:text-xl md:text-2xl
             mb-6 sm:mb-8'
            >
              "Dám nghĩ - Dám làm - Luôn sáng tạo"
            </h2>

            {/* Description */}
            <div className='max-w-3xl mx-auto'>
              <p
                className='font-sans text-gray-300 leading-relaxed
               text-base sm:text-lg
               px-2 sm:px-0 mb-8'
              >
                Đây là thông điệp quan trọng nhất mà Ban lãnh đạo và toàn thể cán bộ nhân viên HTC
                hướng đến. Với mục tiêu "Phục vụ khách hàng tốt nhất với những gì mình có", HTC luôn
                nỗ lực thay đổi và hoàn thiện mỗi ngày để khách hàng luôn nhận được dịch vụ và giá
                trị tốt nhất.'
              </p>
            </div>
          </section>
        </div>
      </div>
      <div>
        <img src={imgHTC} alt='' />
      </div>
      <TextLoop
        text=' HTC SOFTWARE  ✦  eKYC Mobile  ✦  VNeID  ✦  eID  ✦  ID Pass ✦  eKYC  '
        shape='wave'
        speed={90}
        direction='forward'
        separator='✦'
        curviness={0}
        fontSize={24}
        fontWeight={600}
        letterSpacing={0.4}
        color='#ffffff'
        ribbon
        ribbonColor='#5227FF'
        ribbonWidth={40}
        pauseOnHover={false}
      />
      <div className='h-full' id='overview'>
        <div className='mt-10'>
          <CompanyOverview />
        </div>
        <AboutCompany />
        <MissionVisionValues />
        <BusinessAreas />
        <section className='py-10 px-4 '>
          <div className='container mx-auto max-w-6xl'>
            <DescribeTitle title='Chứng nhận - Bằng Khen' description='' dataAos='fade-up' />
            <div className='mt-12' data-aos='fade-up' data-aos-delay='200'>
              <Certificate />
            </div>
          </div>
        </section>
        <section className='py-6 sm:py-8 px-4'>
          <div className='container mx-auto max-w-6xl'>
            <div data-aos='fade-up'>
              <PartnerLogo />
            </div>
          </div>
        </section>

        <Contact />
      </div>
    </div>
  )
}

export default HomePage
