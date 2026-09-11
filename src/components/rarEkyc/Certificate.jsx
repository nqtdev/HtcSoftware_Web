import {Image} from 'antd'
// import Gcn from 'assets/page_RarEkycPlatform/certification/giay_chung_nhan.webp'
// import GcnZ from 'assets/page_RarEkycPlatform/certification/giay_chung_nhan_zoom.webp'
import {
  default as giamdoc,
  default as giamdocz,
} from 'assets/page_RarEkycPlatform/certification/giamdoc.webp'
import {
  default as bangkhen,
  default as bangkhenZ,
} from 'assets/page_RarEkycPlatform/certification/htc_bangkhen.webp'

const Certificate = () => {
  const certificateImages = [
    // {
    //   src: Gcn,
    //   previewSrc: GcnZ,
    //   alt: 'Giấy chứng nhận',
    // },
    {
      src: giamdoc,
      previewSrc: giamdocz,
      alt: 'Bằng khen giám đốc HTC',
    },
    {
      src: bangkhen,
      previewSrc: bangkhenZ,
      alt: 'Bằng khen công ty HTC',
    },
  ]

  return (
    <section className='mx-auto max-w-4xl px-4 py-8'>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8'>
        {/* <div className='grid grid-cols-1 gap-6  lg:gap-8'> */}
        {certificateImages.map((image, index) => (
          <div
            key={index}
            className='group m-auto relative overflow-hidden  transition-all duration-300 hover:shadow-xl'
          >
            <Image
              src={image.src}
              alt={image.alt}
              className='h-auto w-full transform cursor-pointer object-cover transition-transform duration-300 group-hover:scale-105'
              preview={{
                src: image.previewSrc,
              }}
              loading='lazy'
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certificate
