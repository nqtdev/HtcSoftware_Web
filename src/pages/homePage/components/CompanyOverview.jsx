import {Building2, Calendar, MapPin, Award, Users, Briefcase} from 'lucide-react'

const CompanyOverview = () => {
  const companyInfo = {
    fullName: 'Công ty Cổ phần Giải pháp Phần mềm HTC',
    established: '03/06/2009',
    coreBusiness: 'Viễn thông – định danh điện tử',
    headquarters:
      'Số 15, ngõ 29 phố Khương Hạ, P. Khương Đình, Q. Thanh Xuân, Tp. Hà Nội, Việt Nam',
    office:
      'Tầng 4, Tòa Monaco, Ngách 6 Ngõ 118 Nguyễn Khánh Toàn, P. Quan Hoa, Q. Cầu Giấy, TP. Hà Nội',
  }

  const stats = [
    {
      number: '15+',
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
    {
      number: '2',
      label: 'Chứng nhận',
      icon: Award,
      color: 'text-[#0f7ae5]',
      bgColor: 'bg-blue-100',
      description: 'Chứng nhận chất lượng',
      targetSection: '#certifications',
    },
  ]

  const scrollToSection = sectionId => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
  }

  return (
    <section className='relative py-16 bg-gradient-to-br from-blue-50 to-white'>
      {/* Background Animation Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div
          className='absolute top-20 left-10 w-20 h-20 bg-[#2581ba]/10 rounded-full animate-float'
          style={{animationDelay: '0s'}}
        ></div>
        <div
          className='absolute top-40 right-20 w-16 h-16 bg-[#0f7ae5]/10 rounded-full animate-float'
          style={{animationDelay: '1s'}}
        ></div>
        <div
          className='absolute bottom-20 left-1/4 w-12 h-12 bg-[#2581ba]/5 rounded-full animate-float'
          style={{animationDelay: '2s'}}
        ></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-12 lg:mb-16' data-aos='fade-up'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
            Về Công Ty
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto mb-4'>
            Công ty hàng đầu trong lĩnh vực viễn thông và định danh điện tử tại Việt Nam
          </p>
          <div className='w-24 h-1 bg-gradient-to-r from-[#2581ba] to-[#0f7ae5] mx-auto rounded-full'></div>
        </div>

        {/* Split Layout: Video + Info */}
        <div
          className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16'
          data-aos='fade-up'
          data-aos-delay='100'
        >
          {/* Video Placeholder */}
          <div className='order-2 lg:order-1'>
            <div className='relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#2581ba] to-[#0f7ae5] aspect-video'>
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='text-center text-white'>
                  <div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M8 5v14l11-7z' />
                    </svg>
                  </div>
                  <p className='text-lg font-semibold'>Giới thiệu công ty</p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div className='space-y-6 order-1 lg:order-2'>
            <div className='space-y-4'>
              <div className='flex items-center space-x-3 p-4 bg-white rounded-xl hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg border border-gray-100'>
                <div className='p-2 bg-[#2581ba]/10 rounded-full'>
                  <Building2 className='w-6 h-6 text-[#2581ba]' />
                </div>
                <div>
                  <div className='font-semibold text-gray-900'>{companyInfo.fullName}</div>
                  <div className='text-sm text-gray-600'>Thành lập: {companyInfo.established}</div>
                </div>
              </div>

              <div className='flex items-center space-x-3 p-4 bg-white rounded-xl hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg border border-gray-100'>
                <div className='p-2 bg-[#0f7ae5]/10 rounded-full'>
                  <Briefcase className='w-6 h-6 text-[#0f7ae5]' />
                </div>
                <div>
                  <div className='font-semibold text-gray-900'>Lĩnh vực cốt lõi</div>
                  <div className='text-sm text-gray-600'>{companyInfo.coreBusiness}</div>
                </div>
              </div>

              <div className='flex items-start space-x-3 p-4 bg-white rounded-xl hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg border border-gray-100'>
                <div className='p-2 bg-[#2581ba]/10 rounded-full mt-1'>
                  <MapPin className='w-6 h-6 text-[#2581ba]' />
                </div>
                <div>
                  <div className='font-semibold text-gray-900 mb-1'>Trụ sở chính</div>
                  <div className='text-sm text-gray-600 leading-relaxed'>
                    {companyInfo.headquarters}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Dashboard */}
        <div data-aos='fade-up' data-aos-delay='200'>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-200'>
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  onClick={() => scrollToSection(stat.targetSection)}
                  className='text-center group cursor-pointer p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300'
                  data-aos='fade-up'
                  data-aos-delay={300 + index * 100}
                >
                  <div
                    className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full ${stat.bgColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className='text-sm font-semibold text-gray-800 mb-1'>{stat.label}</div>
                  <div className='text-xs text-gray-500'>{stat.description}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Custom Animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default CompanyOverview
