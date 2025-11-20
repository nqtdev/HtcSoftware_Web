import bannerMohinh from 'assets/page_Documents/bannerMohinh.webp'
import ContentDocuments from './contentDocuments'

const Documents = () => {
  return (
    <>
      <div
        className='w-full h-56 flex justify-center items-center bg-cover bg-center bg-no-repeat'
        style={{backgroundImage: `url(${bannerMohinh})`}}
      >
        <h1
          className='text-white text-center text-4xl font-mulish text-sh'
          style={{textShadow: '2px 2px 6px rgba(0,0,0,1)'}}
        >
          Văn Bản Quy Phạm
        </h1>
      </div>

      <div className='p-4 max-w-5xl mx-auto'>
        <ContentDocuments />
      </div>
    </>
  )
}

export default Documents
