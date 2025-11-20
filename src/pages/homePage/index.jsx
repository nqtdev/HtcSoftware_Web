import 'aos/dist/aos.css'
import Particles from 'libs/ReactBits/Particles'

const HomePage = () => {
  return (
    <div className='relative min-h-screen w-full bg-black overflow-hidden'>
      {/* Background particles */}
      <div className='absolute inset-0'>
        <Particles
          particleColors={['#ffffff', '#3f11e4']}
          particleCount={300}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={200}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Nội dung chính */}
      <main
        className='relative z-10 flex justify-center min-h-screen
                   px-4 sm:px-6 lg:px-8
                   items-start pt-16
                   md:items-center md:pt-0'
      >
        <section className='max-w-3xl md:max-w-4xl text-center'>
          <h1
            className='text-white font-roboto font-bold tracking-tight
                       text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'
          >
            HTC SOFTWARE
          </h1>

          <h2
            className='mt-4 text-white font-roboto font-light
                       text-base sm:text-lg md:text-2xl xl:text-3xl'
          >
            “Dám nghĩ - Dám làm - Luôn sáng tạo”
          </h2>

          <div className='mt-6 md:mt-8'>
            <p
              className='font-sans text-white/85 leading-relaxed
                         text-sm sm:text-base md:text-lg xl:text-xl'
            >
              Đây là thông điệp quan trọng nhất mà Ban lãnh đạo và toàn thể cán bộ nhân viên HTC
              hướng đến. Với mục tiêu{' '}
              <span className='font-semibold'>
                “Phục vụ khách hàng tốt nhất với những gì mình có”
              </span>
              , HTC luôn nỗ lực thay đổi và hoàn thiện mỗi ngày để khách hàng luôn nhận được{' '}
              <span className='font-bold'>dịch vụ và giá trị tốt nhất.</span>
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomePage
