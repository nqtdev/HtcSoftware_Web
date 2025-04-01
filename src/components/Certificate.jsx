import Gcn from 'assets/page_RarEkyc/certification/giay_chung_nhan.webp'
import GcnZ from 'assets/page_RarEkyc/certification/giay_chung_nhan_zoom.webp'
import Dkth from 'assets/page_RarEkyc/certification/dang_ky_thuong_hieu.webp'
import DkthZ from 'assets/page_RarEkyc/certification/dang_ky_thuong_hieu_zoom.webp'
import Hdccdv from 'assets/page_RarEkyc/certification/hdccdv.webp'
import HdccdvZ from 'assets/page_RarEkyc/certification/hdccdv_zoom.webp'
import ModalImage from 'react-modal-image'
const Certificate = () => {
  const CertificateImg = [
    { small: Gcn, large: GcnZ, alt: 'Giấy chứng nhận' },
    { small: Hdccdv, large: HdccdvZ, alt: 'Hợp đồng cung cấp dịch vụ' },
    { small: Dkth, large: DkthZ, alt: 'Đăng ký quyền tác giả' }
  ]

  return (
    <section className="m-auto">
      <div className="mb-5 flex flex-col sm:flex-row">
        {CertificateImg.map((image, index) => (
          <div key={index} className="w-full overflow-hidden pt-3 m-3">
            <ModalImage
              loading="lazy"
              hideDownload={true}
              hideZoom={true}
              className="thumbnail h-fit w-full cursor-pointer mx-2"
              small={image.small}
              large={image.large}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certificate
