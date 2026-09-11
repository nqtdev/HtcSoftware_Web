import DescribeTitle from 'layout/DescribeTitle'
import {Briefcase, Building2, Calendar, MapPin, Users} from 'lucide-react'

const currentYear = new Date().getFullYear()
const CompanyOverview = () => {
  const companyInfo = {
    fullName: 'Công ty Cổ phần Giải pháp Phần mềm HTC',
    established: '03/06/2009',
    coreBusiness: 'Viễn thông – Định danh điện tử',
    headquarters: 'Số 15, Ngõ 29 phố Khương Hạ, P. Khương Đình, Q. Thanh Xuân, Tp. Hà Nội',
    office: 'Tầng 4, Tòa Monaco, Ngách 6 ngõ 118 Nguyễn Khánh Toàn, Phường Nghĩa Đô, TP. Hà Nội',
  }

  const stats = [
    {
      number: currentYear - 2009,
      label: 'Năm kinh nghiệm',
      icon: Calendar,
      color: 'text-[#2581ba]',
      bgColor: 'bg-blue-50',
      description: 'Thành lập từ năm 2009',
      targetSection: '#history',
    },
    {
      number: '25+',
      label: 'Khách hàng & Đối tác',
      icon: Users,
      color: 'text-[#0f7ae5]',
      bgColor: 'bg-blue-100',
      description: 'Ngân hàng, tổ chức tài chính, doanh nghiệp',
      targetSection: '#clients-partners',
    },
    {
      number: '5',
      label: 'Lĩnh vực hoạt động',
      icon: Briefcase,
      color: 'text-[#2581ba]',
      bgColor: 'bg-blue-50',
      description: 'Đa dạng lĩnh vực',
      targetSection: '#business-areas',
    },
    // {
    //   number: '2',
    //   label: 'Chứng nhận',
    //   icon: Award,
    //   color: 'text-[#0f7ae5]',
    //   bgColor: 'bg-blue-100',
    //   description: 'Chứng nhận chất lượng',
    //   targetSection: '#certifications',
    // },
  ]

  const scrollToSection = sectionId => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
  }

  return (
    <section className='my-7'>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <DescribeTitle
          title='Về Công Ty HTC'
          data-aos='fade-up'
          description='Công ty hàng đầu trong lĩnh vực viễn thông và định danh điện tử tại Việt Nam'
        />
        {/* Split Layout: Video + Info */}
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16'>
          {/* Left: Video */}
          <div className='relative order-2 lg:order-1'>
            <div className='relative rounded-xl overflow-hidden '>
              <div className='aspect-video w-full rounded-xl border-gray-600 border-2 overflow-hidden'>
                <iframe
                  className='w-full h-full rounded-xl '
                  width='560'
                  height='315'
                  src='https://www.youtube.com/embed/UaMyo4kdHG4?si=Q93qmrvCFthCBdOR&controls=0'
                  title='YouTube video giới thiệu HTC Software'
                  frameBorder='0'
                  // allow=' encrypted-media'
                  referrerPolicy='strict-origin-when-cross-origin'
                  allowFullScreen
                />
              </div>
            </div>
            {/* Floating badge */}
            <div className='absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm  flex items-center space-x-2'>
              <Building2 className='w-4 h-4' />
              <span className='font-roboto text-sm'>Video Giới Thiệu</span>
            </div>
          </div>
          {/* Thông tin công ty  */}
          <div className='space-y-6 order-1 lg:order-2'>
            <div className='space-y-4'>
              <div className='flex items-center space-x-3 p-4 bg-white/80 rounded-xl hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-sm'>
                <div className='p-2 bg-[#2581ba]/10 rounded-full'>
                  <Building2 className='w-6 h-6 text-[#2581ba]' />
                </div>
                <div>
                  <div className='font-semibold font-roboto text-gray-900'>
                    {companyInfo.fullName}
                  </div>
                  <div className='text-sm font-roboto text-gray-600'>
                    Thành lập: {companyInfo.established}
                  </div>
                </div>
              </div>
              <div className='flex items-center space-x-3 p-4 bg-white/80 rounded-xl hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-sm'>
                <div className='p-2 bg-[#0f7ae5]/10 rounded-full'>
                  <Briefcase className='w-6 h-6 text-[#0f7ae5]' />
                </div>
                <div>
                  <div className='font-semibold font-roboto text-gray-900'>Lĩnh vực cốt lõi</div>
                  <div className='text-sm font-roboto text-gray-600'>
                    {companyInfo.coreBusiness}
                  </div>
                </div>
              </div>
              <div className='flex items-start space-x-3 p-4 bg-white/80 rounded-xl hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-sm'>
                <div className='p-2 bg-[#2581ba]/10 rounded-full mt-1'>
                  <MapPin className='w-6 h-6 text-[#2581ba]' />
                </div>
                <div>
                  <div className='font-semibold font-roboto text-gray-900 mb-1'>Trụ sở chính</div>
                  <div className='text-sm text-gray-600 font-roboto leading-relaxed'>
                    {companyInfo.headquarters}
                  </div>
                </div>
              </div>
              <div className='flex items-start space-x-3 p-4 bg-white/80 rounded-xl hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-sm'>
                <div className='p-2 bg-[#2581ba]/10 rounded-full mt-1'>
                  <MapPin className='w-6 h-6 text-[#2581ba]' />
                </div>
                <div>
                  <div className='font-semibold font-roboto text-gray-900 mb-1'>
                    Văn phòng giao dịch
                  </div>
                  <div className='text-sm text-gray-600 font-roboto leading-relaxed'>
                    {companyInfo.office}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 pt-8 border-t border-gray-200'>
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  onClick={() => scrollToSection(stat.targetSection)}
                  className='text-center group cursor-pointer'
                >
                  <div
                    className={`mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full ${stat.bgColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div
                    className={`text-3xl sm:text-4xl lg:text-5xl font-bold font-roboto ${stat.color} mb-1`}
                  >
                    {stat.number}
                  </div>
                  <div className='text-sm font-roboto sm:text-base text-gray-600 font-medium'>
                    {stat.label}
                  </div>
                  <div className='text-xs font-roboto text-gray-500 mt-1'>{stat.description}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyOverview
