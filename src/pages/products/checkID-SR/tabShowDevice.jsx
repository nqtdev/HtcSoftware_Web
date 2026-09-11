import {Tabs} from 'antd'
import DepthCarousel from 'components/DepthCarousel'
import {SlideProduct, SlideProductCam, SlideProductNoCam} from './data/SlideProduct'

const items = [
  {
    key: '1',
    label: <p className='font-mulish text-base'>Có Camera</p>,
    children: (
      <div className='m-auto w-full my-3' style={{height: '520px', position: 'relative'}}>
        <DepthCarousel
          items={SlideProductCam}
          depth={220}
          spread={90}
          tilt={22}
          tiltDirection='right'
          perspective={1400}
          visibleCards={4}
          falloff={0.2}
          blur={4}
          autoplay={false}
          loop={true}
          cardWidth={400}
          cardHeight={500}
          radius={18}
          tint=''
          duration={700}
          ease='power3.out'
          autoplayDelay={3200}
          showControls={true}
          showIndicators={true}
          cardClassName='bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100'
          imageFit='object-contain p-4'
        />
      </div>
    ),
  },
  {
    key: '2',
    label: <p className='font-mulish text-base'>Không Camera</p>,
    children: (
      <div className='m-auto w-full my-3' style={{height: '520px', position: 'relative'}}>
        <DepthCarousel
          items={SlideProductNoCam}
          depth={220}
          spread={90}
          tilt={22}
          tiltDirection='right'
          perspective={1400}
          visibleCards={4}
          falloff={0.2}
          blur={4}
          autoplay={false}
          loop={true}
          cardWidth={400}
          cardHeight={500}
          radius={18}
          tint=''
          duration={700}
          ease='power3.out'
          autoplayDelay={3200}
          showControls={true}
          showIndicators={true}
          cardClassName='bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100'
          imageFit='object-contain p-4'
        />
      </div>
    ),
  },
  {
    key: '3',
    label: <p className='font-mulish text-base'>So Sánh</p>,
    children: (
      <div className='m-auto w-full my-3' style={{height: '520px', position: 'relative'}}>
        <DepthCarousel
          items={SlideProduct}
          depth={220}
          spread={90}
          tilt={22}
          tiltDirection='right'
          perspective={1400}
          visibleCards={3}
          falloff={0.2}
          blur={4}
          autoplay={false}
          loop={true}
          cardWidth={400}
          cardHeight={500}
          radius={18}
          tint=''
          duration={700}
          ease='power3.out'
          autoplayDelay={3200}
          showControls={true}
          showIndicators={true}
          cardClassName='bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100'
          imageFit='object-contain p-4'
        />
      </div>
    ),
  },
]

const TabShowDevice = () => <Tabs defaultActiveKey='1' items={items} />
export default TabShowDevice
