import ImgCMC from 'assets/page_RarEkycPlatform/partner/cmc.svg'
import ImgDatanest from 'assets/page_RarEkycPlatform/partner/datanest.svg'
import Imgfptsoftware from 'assets/page_RarEkycPlatform/partner/fptsoftware.svg'
import Imggtel from 'assets/page_RarEkycPlatform/partner/gtel.svg'
import ImgKalapa from 'assets/page_RarEkycPlatform/partner/kalapa.svg'
import ImgKbank from 'assets/page_RarEkycPlatform/partner/kbank.svg'
import ImgMB from 'assets/page_RarEkycPlatform/partner/mb.svg'
import ImgMobiphonIt from 'assets/page_RarEkycPlatform/partner/mobilephoneit.svg'
import ImgMomo from 'assets/page_RarEkycPlatform/partner/momo.svg'
import ImgSmartpay from 'assets/page_RarEkycPlatform/partner/smartpay.svg'
import ImgVib from 'assets/page_RarEkycPlatform/partner/vib.svg'
import ImgVietcom from 'assets/page_RarEkycPlatform/partner/vietcombank.svg'
import ImgViettin from 'assets/page_RarEkycPlatform/partner/vietinbank.svg'
import ImgViettelAI from 'assets/page_RarEkycPlatform/partner/viettelAI.svg'
import ImgVNPT from 'assets/page_RarEkycPlatform/partner/vnpt.svg'
import DescribeTitle from 'layout/DescribeTitle'
const PartnerLogo = () => {
  const LogoSvg = [
    ImgViettin,
    ImgMB,
    ImgVietcom,
    ImgCMC,
    ImgVNPT,
    ImgDatanest,
    Imgfptsoftware,
    Imggtel,
    ImgKalapa,
    ImgKbank,
    ImgMobiphonIt,
    ImgMomo,
    ImgSmartpay,
    ImgVib,
    ImgViettelAI,
  ]

  // Chia đều các logo thành 4 hàng cân đối
  const splitIntoRows = (arr, numRows) => {
    const rows = Array.from({length: numRows}, () => [])
    arr.forEach((item, index) => {
      rows[index % numRows].push(item)
    })
    return rows
  }

  const rows = splitIntoRows(LogoSvg, 4)

  // Cấu hình thời gian và hướng cuộn cho từng hàng
  const rowConfigs = [
    {duration: 160, reverse: false},
    {duration: 120, reverse: true},
    {duration: 160, reverse: false},
    {duration: 120, reverse: true},
  ]

  return (
    <div className='py-2 sm:py-3'>
      {/* Thu gọn khoảng cách tiêu đề */}
      <div className='[&>div]:mb-4 sm:[&>div]:mb-6'>
        <DescribeTitle title='Đối tác của chúng tôi' description='' />
      </div>

      {/* Danh sách logo đối tác cuộn lặp vô tận */}
      <div className='space-y-2 sm:space-y-2.5 partner_marquee_mask'>
        {rows.map((row, rowIndex) => {
          const config = rowConfigs[rowIndex] || {duration: 40, reverse: false}
          const displayItems = [...row, ...row, ...row]

          return (
            <div key={rowIndex} className='partner_marquee_row'>
              <div
                className='partner_marquee_track'
                style={{
                  animation: `${config.reverse ? 'marqueeScrollReverse' : 'marqueeScroll'} ${config.duration}s linear infinite`,
                }}
              >
                {/* Group 1 */}
                <div className='flex shrink-0 items-center gap-2.5 sm:gap-3.5 md:gap-4 pr-2.5 sm:pr-3.5 md:pr-4'>
                  {displayItems.map((logo, index) => {
                    const imageName = logo.split('/').pop().split('.')[0]
                    return (
                      <div
                        key={`g1-${index}`}
                        className='partner_logo_item shrink-0 flex items-center justify-center px-2 py-1'
                      >
                        <img
                          className='h-16 sm:h-18 md:h-20 w-auto max-w-[85px] sm:max-w-[105px] object-contain transition-transform duration-200 hover:scale-110'
                          src={logo}
                          alt={`Logo ${imageName}`}
                          loading='lazy'
                        />
                      </div>
                    )
                  })}
                </div>

                {/* Group 2 (Bản sao tạo vòng lặp vô tận mượt mà) */}
                <div
                  className='flex shrink-0 items-center gap-2.5 sm:gap-3.5 md:gap-4 pr-2.5 sm:pr-3.5 md:pr-4'
                  aria-hidden='true'
                >
                  {displayItems.map((logo, index) => {
                    const imageName = logo.split('/').pop().split('.')[0]
                    return (
                      <div
                        key={`g2-${index}`}
                        className='partner_logo_item shrink-0 flex items-center justify-center px-2 py-1'
                      >
                        <img
                          className='h-16 sm:h-18 md:h-20 w-auto max-w-[85px] sm:max-w-[105px] object-contain transition-transform duration-200 hover:scale-110'
                          src={logo}
                          alt={`Logo ${imageName}`}
                          loading='lazy'
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PartnerLogo
