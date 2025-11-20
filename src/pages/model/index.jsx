import bannerMohinh from 'assets/page_modal/bannerMohinh.webp'
import ContentModel from './contentModel'

const Model = () => {
  return (
    <>
      <div
        className='w-full h-56 flex justify-center items-center bg-cover bg-center bg-no-repeat'
        style={{backgroundImage: `url(${bannerMohinh})`}}
      >
        {/* <div className="w-full h-56 flex justify-center items-center bg-gradient-to-r from-purple-600 to-blue-300"> */}
        <h2
          className='text-white text-center text-4xl font-mulish text-sh'
          style={{textShadow: '2px 2px 6px rgba(0,0,0,1)'}}
        >
          Mô Hình Triển Khai Dịch Vụ
        </h2>
      </div>
      <ContentModel />
    </>
  )
}

export default Model
