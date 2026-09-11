import imgHTC from 'assets/page_HomePage/bg-htc.webp'
import DescribeTitle from 'layout/DescribeTitle'
import {Clock, Copy, Crosshair, Globe, Mail, MapPin, Phone} from 'lucide-react'
import {useState} from 'react'
const Contact = () => {
  const [copiedAddress, setCopiedAddress] = useState(null)
  const contactInfo = {
    hotline: '070.889.6666',
    email: 'kinhdoanh@htcsoftware.vn',
    website: 'https://www.htcsoftware.vn/',
    locations: [
      {
        id: 1,
        type: 'headquarters',
        name: 'Trụ Sở Chính',
        address: 'Số 15, ngõ 29 phố Khương Hạ, P. Khương Đình, Q. Thanh Xuân',
        city: 'Tp. Hà Nội, Việt Nam',
        mapsUrl: 'https://maps.app.goo.gl/ACMhX54FrWW1ov7x8',
      },
      {
        id: 2,
        type: 'office',
        name: 'Văn Phòng Giao Dịch',
        address: 'Tầng 4, Tòa Monaco, Ngách 6 Ngõ 118 Nguyễn Khánh Toàn, P. Quan Hoa, Q. Cầu Giấy',
        city: 'TP. Hà Nội, Việt Nam',
        mapsUrl: 'https://maps.app.goo.gl/ntFUe7NYrceFgoU67',
      },
    ],
  }

  const copyToClipboard = async (text, addressId) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedAddress(addressId)
      setTimeout(() => setCopiedAddress(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const openGoogleMaps = mapsUrl => {
    window.open(mapsUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <DescribeTitle title='Địa chỉ công ty' description='' />

      <section className='relative overflow-hidden bg-white'>
        {/* Background Map */}
        <div className='absolute inset-0 w-full h-full'>
          <div className='relative w-full h-full overflow-hidden'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d232.74190513917418!2d105.80099613932774!3d21.037867720258415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1763609312641!5m2!1svi!2s'
              width='100%'
              height='100%'
              style={{
                border: 0,
                filter: 'brightness(0.9) contrast(1.1) saturate(0.8)',
                pointerEvents: 'none', // Ngăn không cho tương tác với map
              }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='absolute inset-0 select-none' // Thêm select-none để chặn selection
              title='Vị trí HTC Software trên Google Maps'
            />
            <div className='absolute inset-0 pointer-events-none bg-white/30'></div>
          </div>
        </div>

        {/* Content Container */}
        <div className='relative z-10 w-full max-w-6xl mx-auto'>
          {/* Desktop Layout */}
          <div className='hidden lg:block px-6 py-12'>
            <div className='flex justify-around items-center gap-2'>
              {/* Contact Information Panel */}
              <div className='flex-1'>
                <div className='relative p-6 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg'>
                  {/* Header */}
                  <div className='mb-6'>
                    <h2 className='text-2xl font-roboto font-bold text-gray-900 mb-2'>
                      Liên Hệ Với Chúng Tôi
                    </h2>
                    <div className='w-12 h-1 bg-blue-500 rounded-full'></div>
                  </div>

                  {/* Hotline */}
                  <div className='mb-6 p-4 bg-blue-50 rounded-xl border border-blue-100'>
                    <div className='flex items-center gap-2 mb-2'>
                      <Phone className='w-4 h-4 text-blue-600' strokeWidth={2} />
                      <span className='text-blue-600 text-xs font-semibold font-roboto uppercase tracking-wider'>
                        Hotline
                      </span>
                    </div>
                    <a
                      href={`tel:${contactInfo.hotline.replace(/[.\s]/g, '')}`}
                      className='text-2xl text-gray-900 font-bold tracking-tight font-roboto hover:text-blue-700 transition-colors block'
                    >
                      {contactInfo.hotline}
                    </a>
                  </div>

                  {/* Addresses */}
                  <div className='space-y-4 mb-6'>
                    {contactInfo.locations.map(location => (
                      <div
                        key={location.id}
                        className='p-3 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow'
                      >
                        <div className='flex items-start gap-3'>
                          <div className='flex-shrink-0 p-1.5 bg-blue-50 rounded-lg'>
                            <MapPin className='w-3.5 h-3.5 text-blue-600' strokeWidth={2} />
                          </div>

                          <div className='flex-1 min-w-0'>
                            <div className='flex items-center gap-2 mb-1'>
                              <h3 className='text-gray-900 font-semibold text-sm font-mulish'>
                                {location.name}
                              </h3>
                              <span className='text-xs px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded'>
                                {location.type === 'headquarters' ? 'Trụ sở' : 'Văn phòng'}
                              </span>
                            </div>

                            <p className='text-gray-600 text-xs leading-relaxed mb-2 font-mulish'>
                              {location.address}
                            </p>

                            <div className='flex gap-2'>
                              <button
                                onClick={() => copyToClipboard(location.address, location.id)}
                                className='flex items-center gap-1 px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded transition-colors duration-200'
                              >
                                <Copy className='w-3 h-3' />
                                {copiedAddress === location.id ? 'Đã copy!' : 'Copy'}
                              </button>

                              <button
                                onClick={() => openGoogleMaps(location.mapsUrl)}
                                className='flex items-center gap-1 px-2 py-1 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors duration-200'
                              >
                                <MapPin className='w-3 h-3' />
                                Maps
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Contact Methods */}
                  <div className='space-y-3 border-t border-gray-200 pt-4'>
                    <div className='flex items-center gap-3 group'>
                      <Mail
                        className='w-4 h-4 text-gray-600 flex-shrink-0 group-hover:text-blue-600 transition-colors'
                        strokeWidth={2}
                      />
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className='text-gray-700 hover:text-blue-600 transition-colors text-sm font-mulish break-all'
                      >
                        {contactInfo.email}
                      </a>
                    </div>

                    <div className='flex items-center gap-3 group'>
                      <Globe
                        className='w-4 h-4 text-gray-600 flex-shrink-0 group-hover:text-blue-600 transition-colors'
                        strokeWidth={2}
                      />
                      <a
                        href={contactInfo.website}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-700 hover:text-blue-600 transition-colors text-sm font-mulish break-all'
                      >
                        {contactInfo.website.replace('https://', '')}
                      </a>
                    </div>

                    <div className='flex items-center gap-3'>
                      <Clock className='w-4 h-4 text-gray-600 flex-shrink-0' strokeWidth={2} />
                      <span className='text-gray-700 text-sm font-mulish'>
                        Thứ 2 - Thứ 6: 8:30 - 17:30
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Map Pointer Area */}
              <div className='flex-1 relative h-[500px] rounded-2xl overflow-hidden border border-gray-300 shadow-lg'>
                {/* Background Image Container */}
                <div className='absolute inset-0 w-full h-full'>
                  <div
                    className='w-full h-full bg-cover bg-center bg-no-repeat'
                    style={{
                      backgroundImage: `url(${imgHTC})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  ></div>
                  {/* Overlay để làm nổi bật pointer */}
                  <div className='absolute inset-0 bg-black/10'></div>
                </div>

                {/* Interactive Map Pointer */}

                {/* Connection Line */}
                <svg className='absolute inset-0 pointer-events-none' style={{zIndex: 10}}>
                  <defs>
                    <linearGradient id='connectorGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
                      <stop offset='0%' stopColor='#3b82f6' stopOpacity='0.4' />
                      <stop offset='100%' stopColor='#3b82f6' stopOpacity='0.4' />
                    </linearGradient>
                  </defs>
                  <line
                    x1='40%'
                    y1='50%'
                    x2='55%'
                    y2='50%'
                    stroke='url(#connectorGradient)'
                    strokeWidth='2'
                    strokeDasharray='4 3'
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className='lg:hidden w-full'>
            {/* Map Section với Background Image */}
            <div className='relative w-full h-64'>
              {/* Background Image Container cho Mobile */}
              <div className='absolute inset-0 w-full h-full'>
                <div
                  className='w-full h-full bg-cover bg-center bg-no-repeat'
                  style={{
                    backgroundImage: `url(${imgHTC})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
                {/* Overlay để làm nổi bật pointer */}
                <div className='absolute inset-0 bg-black/10'></div>
              </div>

              {/* Interactive Map Pointer cho Mobile */}
              <div
                className='absolute flex items-center justify-center cursor-pointer group'
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 20,
                }}
                onClick={() => openGoogleMaps(contactInfo.locations[1].mapsUrl)}
              >
                {/* Pulsing Animation cho Mobile */}
                {[0, 1].map(i => (
                  <div
                    key={i}
                    className='absolute rounded-full border border-blue-500 group-hover:border-blue-600 transition-colors'
                    style={{
                      animation: `radarPulse 3s ease-out infinite`,
                      animationDelay: `${i * 1.5}s`,
                      width: '60px',
                      height: '60px',
                      top: '50%',
                      left: '50%',
                      marginTop: '-30px',
                      marginLeft: '-30px',
                    }}
                  />
                ))}

                {/* Pointer Icon cho Mobile */}
                <div className='relative w-10 h-10 group-hover:scale-110 transition-transform duration-300'>
                  <div className='absolute inset-0 rounded-full border-2 border-blue-500 bg-blue-500/20 backdrop-blur-sm group-hover:border-blue-600 group-hover:bg-blue-600/20 transition-colors' />
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <Crosshair
                      className='w-5 h-5 text-blue-400 group-hover:text-blue-500 transition-colors'
                      strokeWidth={2}
                    />
                  </div>
                  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-lg group-hover:bg-blue-600 transition-colors' />
                </div>

                {/* Pointer Label cho Mobile */}
                <div className='absolute px-2 py-1 bg-white/95 backdrop-blur-sm border border-gray-300 rounded text-gray-700 text-xs font-medium whitespace-nowrap shadow-md top-full left-1/2 transform -translate-x-1/2 mt-2 group-hover:shadow-lg transition-shadow'>
                  📍 Mở bản đồ
                </div>
              </div>
            </div>

            {/* Contact Panel */}
            <div className='relative w-full p-4 bg-white rounded-t-2xl shadow-lg -mt-4'>
              <div className='w-full mx-auto'>
                {/* Header */}
                <div className='mb-4'>
                  <h2 className='text-xl font-bold text-gray-900 mb-1 font-mulish'>
                    Liên Hệ Với Chúng Tôi
                  </h2>
                  <div className='w-10 h-0.5 bg-blue-500 rounded-full'></div>
                </div>

                {/* Hotline */}
                <div className='mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100'>
                  <div className='flex items-center gap-2 mb-1'>
                    <Phone className='w-3.5 h-3.5 text-blue-600' strokeWidth={2} />
                    <span className='text-blue-600 text-xs font-semibold uppercase'>Hotline</span>
                  </div>
                  <a
                    href={`tel:${contactInfo.hotline.replace(/[.\s]/g, '')}`}
                    className='text-lg text-gray-900 font-bold font-mono tracking-tight block hover:text-blue-700 transition-colors'
                  >
                    {contactInfo.hotline}
                  </a>
                </div>

                {/* Addresses */}
                <div className='space-y-3 mb-4'>
                  {contactInfo.locations.map(location => (
                    <div
                      key={location.id}
                      className='p-2 rounded-lg border border-gray-200 bg-white'
                    >
                      <div className='flex items-start gap-2'>
                        <MapPin
                          className='w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0'
                          strokeWidth={2}
                        />
                        <div className='flex-1 min-w-0'>
                          <div className='flex items-center gap-1.5 mb-1'>
                            <h3 className='text-gray-900 font-semibold text-xs font-mulish'>
                              {location.name}
                            </h3>
                            <span className='text-xs px-1 py-0.5 bg-gray-100 text-gray-600 rounded'>
                              {location.type === 'headquarters' ? 'Trụ sở' : 'VP'}
                            </span>
                          </div>
                          <p className='text-gray-600 text-xs leading-relaxed mb-2 font-mulish'>
                            {location.address}
                          </p>
                          <div className='flex gap-1.5'>
                            <button
                              onClick={() => copyToClipboard(location.address, location.id)}
                              className='flex items-center gap-1 px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded flex-1 justify-center transition-colors duration-200'
                            >
                              <Copy className='w-3 h-3' />
                              {copiedAddress === location.id ? 'Đã copy!' : 'Copy'}
                            </button>
                            <button
                              onClick={() => openGoogleMaps(location.mapsUrl)}
                              className='flex items-center gap-1 px-2 py-1 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded flex-1 justify-center transition-colors duration-200'
                            >
                              <MapPin className='w-3 h-3' />
                              Maps
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact Methods */}
                <div className='space-y-2 border-t border-gray-200 pt-3'>
                  <div className='flex items-center gap-2 group'>
                    <Mail
                      className='w-3.5 h-3.5 text-gray-600 flex-shrink-0 group-hover:text-blue-600 transition-colors'
                      strokeWidth={2}
                    />
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className='text-gray-700 hover:text-blue-600 transition-colors text-xs font-mulish break-all'
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className='flex items-center gap-2 group'>
                    <Globe
                      className='w-3.5 h-3.5 text-gray-600 flex-shrink-0 group-hover:text-blue-600 transition-colors'
                      strokeWidth={2}
                    />
                    <a
                      href={contactInfo.website}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gray-700 hover:text-blue-600 transition-colors text-xs font-mulish break-all'
                    >
                      {contactInfo.website.replace('https://', '')}
                    </a>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Clock className='w-3.5 h-3.5 text-gray-600 flex-shrink-0' strokeWidth={2} />
                    <span className='text-gray-700 text-xs font-mulish'>
                      Thứ 2 - Thứ 6: 8:30 - 17:30
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add CSS Animation */}
        <style>{`
          @keyframes radarPulse {
            0% {
              transform: scale(0.1);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 0;
            }
          }
        `}</style>
      </section>
    </>
  )
}

export default Contact
