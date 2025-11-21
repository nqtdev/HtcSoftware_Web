import React from 'react'
import {Calendar, Target, TrendingUp, Award, PiggyBank} from 'lucide-react'

const AboutCompany = () => {
  const milestones = [
    {
      yearLabel: '2009',
      title: 'Thành lập HTC Software',
      description:
        'Khởi đầu hành trình với sứ mệnh tiên phong trong lĩnh vực viễn thông và định danh điện tử.',
      icon: Calendar,
      accentFrom: '#0f172a',
      accentTo: '#1e3a8a',
    },
    {
      yearLabel: '2010 - 2015',
      title: 'Xây dựng nền tảng',
      description:
        'Tập trung hoàn thiện năng lực lõi, mở rộng đội ngũ kỹ sư và đặt nền móng hệ sinh thái đối tác.',
      icon: Target,
      accentFrom: '#0f3c7a',
      accentTo: '#2563eb',
    },
    {
      yearLabel: '2016 - 2020',
      title: 'Bứt phá quy mô',
      description:
        'Ra mắt nhiều giải pháp số, đồng hành cùng ngân hàng và tổ chức tài chính hàng đầu Việt Nam.',
      icon: TrendingUp,
      accentFrom: '#145a9c',
      accentTo: '#2f9ee7',
    },
    {
      yearLabel: '2021 - Nay',
      title: 'Đối tác chiến lược',
      description:
        'Tiếp tục khẳng định vị thế bằng các dự án chuyển đổi số quy mô lớn và mạng lưới hợp tác toàn quốc.',
      icon: Award,
      accentFrom: '#1b5b92',
      accentTo: '#3bb1f5',
    },
    {
      yearLabel: 'Tương lai 2025+',
      title: 'Mở rộng hệ sinh thái',
      description:
        'Đặt mục tiêu dẫn dắt thị trường giải pháp eKYC, dữ liệu số và dịch vụ số hóa cho doanh nghiệp.',
      icon: PiggyBank,
      accentFrom: '#1c4370',
      accentTo: '#54c0ff',
    },
  ]

  const baseY = 74
  const risePerStep = 9
  const diagonalWidth = 24
  const flatWidth = 10

  let currentX = 1
  let currentY = baseY

  const arrowPoints = [{x: currentX, y: currentY}]
  const markerPositions = []

  milestones.forEach(milestone => {
    const diagonalPoint = {
      x: currentX + diagonalWidth,
      y: currentY - risePerStep,
    }
    arrowPoints.push(diagonalPoint)

    const flatPoint = {
      x: diagonalPoint.x + flatWidth,
      y: diagonalPoint.y,
    }
    arrowPoints.push(flatPoint)

    markerPositions.push({
      x: diagonalPoint.x + flatWidth / 2,
      y: diagonalPoint.y,
      milestone,
    })

    currentX = flatPoint.x
    currentY = flatPoint.y
  })

  const finalX = currentX
  const arrowHead = [
    {x: finalX, y: currentY},
    {x: finalX + 6, y: currentY - 4},
    {x: finalX + 6, y: currentY + 4},
  ]
  const pathOffset = {x: 35, y: -20}

  const pathPoints = arrowPoints.map(point => ({
    x: point.x + pathOffset.x,
    y: point.y + pathOffset.y,
  }))
  const pathArrowHead = arrowHead.map(point => ({
    x: point.x + pathOffset.x,
    y: point.y + pathOffset.y,
  }))

  const viewBoxWidth = finalX + pathOffset.x + 12

  const polylinePoints = pathPoints.map(point => `${point.x},${point.y}`).join(' ')
  const arrowHeadPoints = pathArrowHead.map(point => `${point.x},${point.y}`).join(' ')

  return (
    <section id='history' className='relative py-16 sm:py-20 lg:py-24 overflow-hidden'>
      <div className='relative bg-gradient-to-br from-white via-blue-50/70 to-white rounded-3xl border border-white shadow-[0_40px_80px_-40px_rgba(15,122,229,0.4)] overflow-hidden'>
        <div
          className='absolute inset-0 opacity-40'
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(37,129,186,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className='relative z-10 p-8 lg:p-12'>
          <div className='max-w-6xl mx-auto space-y-12'>
            <div className='grid lg:grid-cols-[1.1fr,1.4fr] gap-12 items-center'>
              <div className='space-y-6' data-aos='fade-up'>
                <div>
                  <p className='uppercase tracking-[0.4em] text-xs text-slate-500 mb-4'>
                    HTC SOFTWARE
                  </p>
                  <h2 className='text-4xl lg:text-5xl font-bold text-slate-900 leading-tight'>
                    Hành trình phát triển
                  </h2>
                  <div className='w-24 h-1.5 bg-gradient-to-r from-[#0f7ae5] to-[#8ec5ff] mt-6'></div>
                </div>
                <p className='text-slate-600 text-lg leading-relaxed'>
                  Chúng tôi phát triển với tinh thần công nghệ, luôn đổi mới để bắt kịp tốc độ
                  chuyển đổi số của thị trường. Mỗi cột mốc là một lần bứt phá về năng lực sản phẩm
                  và chất lượng dịch vụ.
                </p>
                <p className='text-slate-500 text-base leading-relaxed'>
                  Từ nền tảng eKYC, giải pháp xác thực chip CCCD đến tư vấn triển khai hệ sinh thái
                  số, HTC Software đồng hành cùng doanh nghiệp trên hành trình kiến tạo giá trị bền
                  vững.
                </p>
              </div>

              <div className='hidden lg:block' data-aos='fade-up' data-aos-delay='150'>
                <div className='relative h-[360px]'>
                  <svg viewBox={`0 0 ${viewBoxWidth} 100`} className='w-full h-full'>
                    <defs>
                      <linearGradient id='timelineGradient' x1='0%' y1='100%' x2='100%' y2='0%'>
                        <stop offset='0%' stopColor='#0f3057' />
                        <stop offset='45%' stopColor='#1d78c1' />
                        <stop offset='100%' stopColor='#53c4ff' />
                      </linearGradient>
                    </defs>

                    <polyline
                      fill='none'
                      stroke='rgba(15,122,229,0.2)'
                      strokeWidth='18'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      points={polylinePoints}
                    />
                    <polyline
                      fill='none'
                      stroke='url(#timelineGradient)'
                      strokeWidth='8'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      points={polylinePoints}
                      className='drop-shadow-[0_10px_30px_rgba(15,122,229,0.25)]'
                    />
                    <polygon fill='#53c4ff' points={arrowHeadPoints} />
                  </svg>

                  <div className='absolute inset-0 pointer-events-none'>
                    {markerPositions.map(position => {
                      const xPercent = (position.x / finalX) * 100
                      const Icon = position.milestone.icon
                      return (
                        <React.Fragment key={position.milestone.yearLabel}>
                          <div
                            className='absolute flex items-center justify-center w-16 h-16 rounded-full shadow-2xl bg-white'
                            style={{
                              left: `calc(${xPercent}% - 32px)`,
                              top: `calc(${position.y}% - 80px)`,
                            }}
                          >
                            <span className='absolute inset-0 rounded-full bg-gradient-to-br from-white via-transparent to-transparent blur-2xl opacity-40'></span>
                            <div
                              className='w-12 h-12 rounded-full flex items-center justify-center'
                              style={{
                                background: `linear-gradient(135deg, ${position.milestone.accentFrom}, ${position.milestone.accentTo})`,
                              }}
                            >
                              <Icon className='w-5 h-5 text-white' />
                            </div>
                          </div>
                          <div
                            className='absolute w-40 text-center'
                            style={{
                              left: `calc(${xPercent}% - 80px)`,
                              top: `calc(${position.y}% + 10px)`,
                            }}
                          >
                            <p className='text-sm font-semibold text-slate-900'>
                              {position.milestone.yearLabel}
                            </p>
                            <p className='text-xs uppercase tracking-wide text-slate-500'>
                              {position.milestone.title}
                            </p>
                          </div>
                        </React.Fragment>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className='lg:hidden grid gap-6'>
              {milestones.map(milestone => {
                const Icon = milestone.icon
                return (
                  <div
                    key={milestone.yearLabel}
                    className='bg-white/80 backdrop-blur rounded-2xl border border-slate-100 p-5 shadow-lg shadow-blue-100/70'
                  >
                    <div className='flex items-center gap-4 mb-3'>
                      <div
                        className='w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-inner'
                        style={{
                          background: `linear-gradient(135deg, ${milestone.accentFrom}, ${milestone.accentTo})`,
                        }}
                      >
                        <Icon className='w-5 h-5' />
                      </div>
                      <div>
                        <p className='text-sm font-semibold text-slate-500'>
                          {milestone.yearLabel}
                        </p>
                        <h3 className='text-lg font-bold text-slate-900'>{milestone.title}</h3>
                      </div>
                    </div>
                    <p className='text-slate-600 text-sm leading-relaxed'>
                      {milestone.description}
                    </p>
                  </div>
                )
              })}
            </div>

            <div
              className='grid md:grid-cols-5 gap-6 pt-6 border-t border-white/60'
              data-aos='fade-up'
            >
              {milestones.map(milestone => (
                <div
                  key={`card-${milestone.yearLabel}`}
                  className='bg-white rounded-2xl p-5 border border-slate-100 shadow-lg shadow-blue-100/60'
                >
                  <p className='text-xs uppercase tracking-wide text-slate-400 mb-2'>
                    {milestone.yearLabel}
                  </p>
                  <h3 className='text-base font-semibold text-slate-900 mb-2'>{milestone.title}</h3>
                  <p className='text-sm text-slate-500 leading-relaxed'>{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCompany
