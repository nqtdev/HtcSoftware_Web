// @ Hiển thị logo của đối tác
import ImgSEA from 'assets/page_RarEkyc/partner/seabank.svg'
import ImgTech from 'assets/page_RarEkyc/partner/tech.svg'
import ImgBIDV from 'assets/page_RarEkyc/partner/bidv.svg'
import ImgViettin from 'assets/page_RarEkyc/partner/vietinbank.svg'
import ImgMB from 'assets/page_RarEkyc/partner/mb.svg'
import ImgVietcom from 'assets/page_RarEkyc/partner/vietcombank.svg'
import ImgACB from 'assets/page_RarEkyc/partner/acb.svg'
import ImgTp from 'assets/page_RarEkyc/partner/tp.svg'
import ImgShinhan from 'assets/page_RarEkyc/partner/shinhanbank.svg'
import ImgCMC from 'assets/page_RarEkyc/partner/cmc.svg'
import ImgViettel from 'assets/page_RarEkyc/partner/viettel.svg'
import ImgVNPT from 'assets/page_RarEkyc/partner/vnpt.svg'
import ImgSHB from 'assets/page_RarEkyc/partner/shb.svg'
import ImgCimBank from 'assets/page_RarEkyc/partner/cimbank.svg'
import ImgCredita from 'assets/page_RarEkyc/partner/credita.svg'
import ImgDatanest from 'assets/page_RarEkyc/partner/datanest.svg'
import ImgEximbank from 'assets/page_RarEkyc/partner/eximbank.svg'
import Imgfptsoftware from 'assets/page_RarEkyc/partner/fptsoftware.svg'
import Imggtel from 'assets/page_RarEkyc/partner/gtel.svg'
import ImgHDbank from 'assets/page_RarEkyc/partner/hdbank.svg'
import ImgKalapa from 'assets/page_RarEkyc/partner/kalapa.svg'
import ImgKbank from 'assets/page_RarEkyc/partner/kbank.svg'
import ImgMisa from 'assets/page_RarEkyc/partner/misa.svg'
import ImgMobiphonIt from 'assets/page_RarEkyc/partner/mobilephoneit.svg'
import ImgMomo from 'assets/page_RarEkyc/partner/momo.svg'
import ImgNcb from 'assets/page_RarEkyc/partner/ncb.svg'
import ImgSmartpay from 'assets/page_RarEkyc/partner/smartpay.svg'
import ImgTnex from 'assets/page_RarEkyc/partner/tnex.svg'
import ImgVib from 'assets/page_RarEkyc/partner/vib.svg'
import ImgViettelAI from 'assets/page_RarEkyc/partner/viettelAI.svg'
import ImgVng from 'assets/page_RarEkyc/partner/vng.svg'
import ImgHongngoc from 'assets/page_RarEkyc/partner/hongngoc.svg'
import ImgThucuc from 'assets/page_RarEkyc/partner/thucuc.svg'
import ImgVietcap from 'assets/page_RarEkyc/partner/vietcap.svg'
import ImgVinai from 'assets/page_RarEkyc/partner/vinai.svg'
import ImgVinhome from 'assets/page_RarEkyc/partner/vinhome.svg'
import ImgVinmec from 'assets/page_RarEkyc/partner/vinmec.svg'
import ImgVndirect from 'assets/page_RarEkyc/partner/vndirect.svg'

const PartnerLogo = ({ title }) => {
  const LogoSvg = [
    ImgSEA,
    ImgTech,
    ImgBIDV,
    ImgViettin,
    ImgMB,
    ImgVietcom,
    ImgACB,
    ImgTp,
    ImgVinhome,
    ImgShinhan,
    ImgCMC,
    ImgViettel,
    ImgVNPT,
    ImgSHB,
    ImgCimBank,
    ImgCredita,
    ImgDatanest,
    ImgEximbank,
    Imgfptsoftware,
    Imggtel,
    ImgHDbank,
    ImgKalapa,
    ImgKbank,
    ImgMisa,
    ImgHongngoc,
    ImgMobiphonIt,
    ImgMomo,
    ImgVinmec,
    ImgNcb,
    ImgSmartpay,
    ImgTnex,
    ImgVib,
    ImgViettelAI,
    ImgVinai,
    ImgVng,
    ImgVndirect,
    ImgThucuc,
    ImgVietcap
  ]

  const chunkArray = (arr, chunkSize) => {
    const result = []
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize))
    }
    return result
  }

  const LogoPartner = chunkArray(LogoSvg, 9)

  return (
    <>
      <div data-aos="zoom-in" data-aos-duration="1000">
        <h2 className="all-textList">Đối tác của chúng tôi</h2>
      </div>
      {LogoPartner.map((row, rowIndex) => (
        <div key={rowIndex} className="partner_scroll">
          {row.map((logo, index) => {
            // Lấy tên hình ảnh từ đường dẫn
            const imageName = logo.split('/').pop().split('.')[0]

            return (
              <div className="partner_logo" key={index}>
                <img
                  className="px-4 py-3"
                  src={logo}
                  alt={`Logo ${imageName}`} // Thêm "Logo" trước tên hình ảnh
                />
              </div>
            )
          })}
        </div>
      ))}
    </>
  )
}

export default PartnerLogo
