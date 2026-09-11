/* eslint-disable react/no-unescaped-entities */
import {Eye, Lightbulb, Rocket, Shield, Target, TrendingUp, Users, Zap} from 'lucide-react'
import React, {useCallback, useEffect, useState} from 'react'

const MissionVisionValues = () => {
  // Vision, Mission, and Core Values
  const visionMission = [
    {
      title: 'Tầm nhìn',
      description: [
        'Trở thành đơn vị tiên phong kiến tạo nền tảng định danh số và xác thực điện tử chuẩn mực tại Việt Nam.',
        'Khẳng định chính xác danh tính số hợp pháp cho người dùng trong mọi giao dịch trực tuyến đa nền tảng.',
        'Nâng cao tối đa tính bảo mật, toàn vẹn dữ liệu và xây dựng niềm tin số vững chắc giữa người dân, chính quyền và doanh nghiệp.',
        'Định hình hệ sinh thái số an toàn, góp phần thúc đẩy tiến trình chuyển đổi số quốc gia toàn diện.',
      ],
      icon: Eye,
    },
    {
      title: 'Sứ mệnh',
      description: [
        'Đón đầu xu hướng công nghệ số hóa tiên tiến để phát triển các giải pháp định danh và xác thực điện tử thế hệ mới.',
        'Đồng hành và hỗ trợ khối Ngân hàng, Tổ chức tài chính và Doanh nghiệp tự động hóa quy trình nghiệp vụ số an toàn.',
        'Cung cấp hệ thống xác thực CCCD gắn chip, sinh trắc học và chữ ký số đạt chuẩn quy định pháp lý cao nhất.',
        'Tối ưu hóa nguồn lực công nghệ để phục vụ khách hàng tận tâm với cam kết chất lượng dịch vụ vượt trội.',
      ],
      icon: Rocket,
    },
  ]

  const coreValues = [
    {
      title: 'Năng lực hoàn thành công việc',
      description: [
        'Cam kết bàn giao và vận hành các dự án phần mềm, phần cứng đúng tiến độ với chất lượng kiểm thử nghiêm ngặt.',
        'Đáp ứng chính xác mọi tiêu chuẩn kỹ thuật phức tạp và yêu cầu chuyên biệt của từng phân khúc đối tác.',
        'Chủ động phòng ngừa rủi ro phát sinh trong quá trình triển khai nhờ quy trình quản lý dự án chuẩn hóa.',
        'Duy trì tính ổn định, sẵn sàng cao (High Availability) cho toàn bộ hệ thống dịch vụ sau bàn giao.',
      ],
      icon: Target,
    },
    {
      title: 'Năng lực Tích hợp',
      description: [
        'Kết nối liền mạch giữa phần cứng thiết bị chuyên dụng và các hệ sinh thái phần mềm quản trị sẵn có.',
        'Thiết kế kiến trúc hệ thống mở, linh hoạt tích hợp qua các chuẩn kết nối bảo mật RESTful API, SDK chuyên sâu.',
        'Đồng bộ hóa dữ liệu thời gian thực giữa các điểm trạm giao dịch và máy chủ trung tâm an toàn.',
        'Tối ưu hóa hiệu năng xử lý tác vụ, giảm thiểu độ trễ trong quá trình quét và đối chiếu dữ liệu.',
      ],
      icon: Zap,
    },
    {
      title: 'Hệ thống đối tác uy tín',
      description: [
        'Hợp tác chặt chẽ với các nhà cung cấp giải pháp bảo mật và nhà sản xuất thiết bị hàng đầu ngành.',
        'Duy trì mạng lưới đối tác công nghệ tin cậy, đảm bảo tính sẵn có của chuỗi cung ứng linh kiện và phần mềm.',
        'Đội ngũ chuyên gia hỗ trợ kỹ thuật 24/7, luôn đồng hành xử lý sự cố tại chỗ nhanh chóng.',
        'Chia sẻ tài nguyên tri thức và liên tục nâng cao giá trị thặng dư cho toàn bộ đối tác trong hệ sinh thái.',
      ],
      icon: Users,
    },
    {
      title: 'Số hóa vận hành tổ chức',
      description: [
        'Tự động hóa hoàn toàn các thao tác thủ công, rút ngắn thời gian xử lý hồ sơ khách hàng tại quầy giao dịch.',
        'Tối ưu hóa chi phí vận hành nhân sự và lưu trữ giấy tờ thông qua mô hình văn phòng không giấy tờ.',
        'Nâng cao năng suất làm việc và sự minh bạch trong toàn bộ luồng luân chuyển dữ liệu nội bộ.',
        'Cung cấp báo cáo phân tích trực quan theo thời gian thực giúp ban điều hành ra quyết định chính xác.',
      ],
      icon: TrendingUp,
    },
    {
      title: 'Chuyên môn ngành đa dạng',
      description: [
        'Sở hữu đội ngũ kỹ sư có nền tảng chuyên môn sâu rộng về AI, Computer Vision, mật mã học và viễn thông.',
        'Nắm vững nghiệp vụ đặc thù trong các ngành: Ngân hàng số, Tài chính, Bảo hiểm, Công chứng và Y tế.',
        'Hiểu rõ các hành lang pháp lý, tiêu chuẩn an toàn thông tin Nhà nước về bảo vệ dữ liệu cá nhân.',
        'Tư vấn kiến trúc giải pháp may đo riêng biệt, phù hợp với quy mô thực tế của từng doanh nghiệp.',
      ],
      icon: Shield,
    },
    {
      title: 'Năng lực Cải tiến',
      description: [
        'Liên tục nghiên cứu và ứng dụng các thuật toán nhận diện khuôn mặt, AI OCR mới nhất vào sản phẩm.',
        'Thường xuyên cập nhật phiên bản, vá lỗi bảo mật và nâng cấp tính năng định kỳ theo phản hồi thực tế.',
        'Khuyến khích sáng tạo và thử nghiệm giải pháp đột phá nhằm rút ngắn hơn nữa thời gian xác thực.',
        'Luôn duy trì vị thế tiên phong về công nghệ định danh trước các biến động công nghệ của thị trường.',
      ],
      icon: Lightbulb,
    },
  ]

  // Combine all items for the wheel
  const allItems = [...visionMission, ...coreValues]

  const baseWheelSize = 560
  const baseNodeRadius = 200
  const totalItems = allItems.length
  const angleStep = 360 / totalItems

  const [rotation, setRotation] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)
  const [viewportWidth, setViewportWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1280,
  )
  const [touchStart, setTouchStart] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = viewportWidth < 1024
  const wheelSize = isMobile ? 280 : baseWheelSize
  const wheelCenter = wheelSize / 2
  const nodeRadius = (wheelSize / baseWheelSize) * baseNodeRadius

  // Xác định item active dựa trên góc quay
  const detectActiveIndex = useCallback(
    currentRotation => {
      const triggerRange = 30
      let newActiveIndex = null

      for (let i = 0; i < totalItems; i++) {
        const baseAngle = (i * angleStep + angleStep / 2 - 90) * (Math.PI / 180)
        const currentAngle = baseAngle + (currentRotation * Math.PI) / 180
        let currentAngleDeg = ((currentAngle * 180) / Math.PI) % 360
        if (currentAngleDeg < 0) currentAngleDeg += 360

        const isNearTrigger =
          (currentAngleDeg >= 360 - triggerRange && currentAngleDeg <= 360) ||
          (currentAngleDeg >= 0 && currentAngleDeg <= triggerRange)

        if (isNearTrigger) {
          newActiveIndex = i
          break
        }
      }

      setActiveIndex(prevActive => {
        if (prevActive !== newActiveIndex) {
          return newActiveIndex
        }
        return prevActive
      })
    },
    [totalItems, angleStep],
  )

  // Touch handlers for mobile interaction
  const handleTouchStart = e => {
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    })
    setIsPaused(true)
  }

  const handleTouchMove = e => {
    if (!touchStart) return

    const touchX = e.touches[0].clientX
    const touchY = e.touches[0].clientY
    const deltaX = touchX - touchStart.x
    const deltaY = touchY - touchStart.y

    // Calculate rotation based on touch movement
    const rotationDelta = (deltaX + deltaY) * 0.5
    setRotation(prev => {
      const newRotation = (prev + rotationDelta) % 360
      detectActiveIndex(newRotation)
      return newRotation
    })

    setTouchStart({
      x: touchX,
      y: touchY,
    })
  }

  const handleTouchEnd = () => {
    setTouchStart(null)
    setIsPaused(false)
  }

  // Auto-rotate wheel và tự đổi content cả desktop lẫn mobile
  useEffect(() => {
    if (isPaused) return

    let animationFrameId
    let lastTime = performance.now()
    const rotationSpeed = 0.3

    const animate = currentTime => {
      const deltaTime = currentTime - lastTime
      lastTime = currentTime

      const rotationDelta = (rotationSpeed * deltaTime) / 16.67

      setRotation(prev => {
        const newRotation = (prev + rotationDelta) % 360
        detectActiveIndex(newRotation)
        return newRotation
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isPaused, totalItems, angleStep, detectActiveIndex])

  return (
    <section className='relative py-6 sm:py-8 overflow-hidden'>
      {/* Center glow */}
      <div
        className='absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none'
        style={{
          background:
            'radial-gradient(circle, rgba(37, 129, 186, 0.2) 0%, rgba(15, 122, 229, 0.1) 50%, transparent 100%)',
        }}
      ></div>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-3' data-aos='fade-up'>
          <h2 className='text-xl lg:text-2xl xl:text-3xl font-roboto font-bold mb-2 text-gray-900'>
            Sứ Mệnh, Tầm Nhìn & Giá Trị Cốt Lõi
          </h2>
          <div className='w-16 lg:w-20 h-1 bg-gradient-to-r from-[#2581ba] to-[#0f7ae5] mx-auto rounded-full mb-2'></div>
          <p className='text-sm lg:text-base xl:text-lg font-roboto font-bold text-gray-900 mb-1'>
            Dám nghĩ - Dám làm - Luôn sáng tạo
          </p>
          <p className='text-xs lg:text-sm text-gray-600 font-roboto max-w-3xl mx-auto'>
            Với mục tiêu "Phục vụ khách hàng tốt nhất với những gì mình có", HTC luôn nỗ lực, cố
            gắng thay đổi và hoàn thiện hơn mỗi ngày để khách hàng luôn nhận được "dịch vụ và giá
            trị tốt nhất".
          </p>
        </div>

        <div
          className='grid lg:grid-cols-[1fr,1.2fr] gap-3 lg:gap-6 items-center lg:min-h-[480px] relative'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          {/* HUD Connection Line - Desktop only */}
          {!isMobile && activeIndex !== null && (
            <svg
              className='absolute inset-0 w-full h-full pointer-events-none z-5 overflow-visible'
              viewBox='0 0 1200 600'
              preserveAspectRatio='none'
              style={{width: '100%', height: '100%'}}
            >
              <defs>
                <linearGradient id='hudLineGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
                  <stop offset='0%' stopColor='#2581ba' stopOpacity='0.9' />
                  <stop offset='50%' stopColor='#0f7ae5' stopOpacity='1' />
                  <stop offset='100%' stopColor='#2581ba' stopOpacity='0.4' />
                </linearGradient>
                <filter id='hudGlowFilter'>
                  <feGaussianBlur stdDeviation='2' result='coloredBlur' />
                  <feMerge>
                    <feMergeNode in='coloredBlur' />
                    <feMergeNode in='SourceGraphic' />
                  </feMerge>
                </filter>
              </defs>
              {/* Connection line implementation */}
            </svg>
          )}

          {/* Left Side - Rotating Radar Wheel */}
          <div className='flex justify-center lg:justify-start items-center relative'>
            <div
              className='relative'
              style={{width: `${wheelSize}px`, height: `${wheelSize}px`}}
              onMouseEnter={() => !isMobile && setIsPaused(true)}
              onMouseLeave={() => !isMobile && setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Rotating Rings */}
              <div className='absolute inset-0 pointer-events-none'>
                <div
                  className='absolute inset-0 border border-dashed border-blue-200/50 rounded-full'
                  style={{
                    animation: isMobile ? 'none' : 'spin 60s linear infinite',
                    transform: isMobile ? `rotate(${rotation}deg)` : 'none',
                  }}
                ></div>
                <div
                  className='absolute inset-[40px] border border-blue-100/60 rounded-full opacity-60'
                  style={{
                    animation: isMobile ? 'none' : 'spin 40s linear infinite reverse',
                    transform: isMobile ? `rotate(${-rotation}deg)` : 'none',
                  }}
                >
                  <div className='absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-300 rounded-full'></div>
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-300 rounded-full'></div>
                </div>
                <div className='absolute inset-[100px] border border-blue-50 rounded-full'></div>
              </div>

              {/* Center Core */}
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20'>
                <div className='absolute inset-0 bg-blue-400/20 blur-xl rounded-full animate-pulse'></div>
                <div className='relative w-24 h-24 lg:w-36 lg:h-36 bg-white rounded-full border flex items-center justify-center overflow-hidden'>
                  <img className='w-full' src='/logO_HTC.webp' alt='HTC Logo' />
                </div>
              </div>

              {/* Laser Beam */}
              {activeIndex !== null && (
                <svg className='absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible'>
                  <defs>
                    <linearGradient id='laserGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
                      <stop offset='0%' stopColor='rgba(37, 129, 186, 0)' />
                      <stop offset='50%' stopColor='#60a5fa' />
                      <stop offset='100%' stopColor='#2563eb' />
                    </linearGradient>
                    <filter id='laserGlow'>
                      <feGaussianBlur stdDeviation='2' result='coloredBlur' />
                      <feMerge>
                        <feMergeNode in='coloredBlur' />
                        <feMergeNode in='SourceGraphic' />
                      </feMerge>
                    </filter>
                  </defs>
                  {(() => {
                    const baseAngle =
                      (activeIndex * angleStep + angleStep / 2 - 90) * (Math.PI / 180)
                    const currentAngle = baseAngle + (rotation * Math.PI) / 180
                    const nodeX = wheelCenter + nodeRadius * Math.cos(currentAngle)
                    const nodeY = wheelCenter + nodeRadius * Math.sin(currentAngle)

                    return (
                      <line
                        x1={wheelCenter}
                        y1={wheelCenter}
                        x2={nodeX}
                        y2={nodeY}
                        stroke='url(#laserGradient)'
                        strokeWidth='2'
                        strokeLinecap='round'
                        filter='url(#laserGlow)'
                      />
                    )
                  })()}
                </svg>
              )}

              {/* Orbital Nodes */}
              {allItems.map((value, index) => {
                const baseAngle = (index * angleStep + angleStep / 2 - 90) * (Math.PI / 180)
                const currentAngle = baseAngle + (rotation * Math.PI) / 180
                const nodeX = wheelCenter + nodeRadius * Math.cos(currentAngle)
                const nodeY = wheelCenter + nodeRadius * Math.sin(currentAngle)
                const isActive = activeIndex === index
                const Icon = value.icon

                return (
                  <div
                    key={`node-${index}`}
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer'
                    style={{
                      left: `${nodeX}px`,
                      top: `${nodeY}px`,
                    }}
                  >
                    <div
                      className={`relative transition-all duration-300 ease-out ${
                        isActive ? 'scale-125' : 'scale-100'
                      }`}
                    >
                      {/* Inactive State */}
                      <div
                        className={`
                          w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-300
                          ${
                            isActive
                              ? 'opacity-0 scale-0'
                              : 'bg-white/60 border-white/40 shadow-lg shadow-blue-100/50 opacity-100 scale-100'
                          }
                        `}
                      >
                        <Icon className='w-4 h-4 lg:w-5 lg:h-5 text-slate-500/70' strokeWidth={2} />
                      </div>

                      {/* Active State */}
                      <div
                        className={`
                          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                          w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center transition-all duration-300
                          ${
                            isActive
                              ? 'opacity-100 scale-100 rotate-0'
                              : 'opacity-0 scale-50 -rotate-45 pointer-events-none'
                          }
                        `}
                      >
                        <div className='absolute inset-0 rounded-full border border-blue-400/30 animate-ping'></div>
                        <div className='absolute inset-0 rounded-full border border-blue-500/50 shadow-[0_0_20px_rgba(37,99,235,0.4)]'></div>

                        <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-1 h-2 lg:h-3 bg-blue-500'></div>
                        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-1 h-2 lg:h-3 bg-blue-500'></div>
                        <div className='absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 lg:w-3 h-1 bg-blue-500'></div>
                        <div className='absolute right-0 top-1/2 translate-x-1 -translate-y-1/2 w-2 lg:w-3 h-1 bg-blue-500'></div>

                        <div className='w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-inner text-white relative z-10'>
                          <Icon className='w-5 lg:w-6 h-6' strokeWidth={2} />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Side - Cards Area */}
          <div className='relative w-full' data-aos='fade-up' data-aos-delay='300'>
            {isMobile ? (
              // Mobile: Single card that changes content based on active index
              <div className='min-h-[160px] flex items-center justify-center'>
                {activeIndex === null ? (
                  // Default state when no item is active
                  <div className='text-center text-slate-400 p-4'>
                    <div className='w-12 h-12 mx-auto mb-2 rounded-full bg-slate-100 flex items-center justify-center'>
                      <Target className='w-6 h-6 text-slate-300' />
                    </div>
                    <p className='text-xs font-roboto'>Chạm và xoay vòng tròn để khám phá</p>
                  </div>
                ) : (
                  // Active item card
                  <div className='bg-white border border-blue-50 rounded-xl p-3 sm:p-3.5 shadow-md shadow-blue-50 w-full'>
                    <div className='flex items-center gap-2.5 mb-2.5'>
                      <div
                        className='w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-white shadow-md flex-shrink-0'
                        style={{
                          background:
                            activeIndex === 0
                              ? 'linear-gradient(135deg, #0f7ae5, #60a5fa)'
                              : activeIndex === 1
                                ? 'linear-gradient(135deg, #ec4899, #f472b6)'
                                : 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
                        }}
                      >
                        {React.createElement(allItems[activeIndex].icon, {
                          className: 'w-5 h-5 sm:w-6 sm:h-6',
                          strokeWidth: 1.5,
                        })}
                      </div>
                      <div>
                        <h4 className='text-sm sm:text-base font-roboto font-bold text-slate-900'>
                          {allItems[activeIndex].title}
                        </h4>
                        <p className='text-[0.7rem] text-slate-500 mt-0.5'>
                          {activeIndex + 1} / {allItems.length}
                        </p>
                      </div>
                    </div>
                    <ul className='space-y-1 sm:space-y-1.5 text-slate-600 font-roboto text-xs sm:text-sm leading-relaxed'>
                      {Array.isArray(allItems[activeIndex].description) ? (
                        allItems[activeIndex].description.map((item, idx) => (
                          <li key={idx} className='flex items-start gap-2'>
                            <span className='text-blue-500 font-bold select-none leading-none mt-1'>–</span>
                            <span className='flex-1'>{item}</span>
                          </li>
                        ))
                      ) : (
                        <li className='flex items-start gap-2'>
                          <span className='text-blue-500 font-bold select-none leading-none mt-1'>–</span>
                          <span className='flex-1'>{allItems[activeIndex].description}</span>
                        </li>
                      )}
                    </ul>
                    <div className='mt-2.5 h-1 rounded-full bg-slate-100 overflow-hidden'>
                      <div
                        className='h-full rounded-full transition-all duration-500'
                        style={{
                          backgroundColor:
                            activeIndex === 0
                              ? '#0f7ae5'
                              : activeIndex === 1
                                ? '#ec4899'
                                : '#2581ba',
                          width: '100%',
                        }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // Desktop: Original card system
              <div className='relative min-h-[220px] flex items-center'>
                {activeIndex === null && (
                  <div className='absolute inset-0 flex items-center justify-center text-slate-300 font-mono text-sm tracking-widest animate-pulse border-2 border-dashed border-slate-100 rounded-2xl'>
                    WAITING FOR DATA STREAM...
                  </div>
                )}

                {allItems.map((value, index) => {
                  const isActive = activeIndex === index
                  const Icon = value.icon
                  const isVision = index === 0
                  const isMission = index === 1

                  return (
                    <div
                      key={index}
                      className={`absolute left-0 right-0 w-full transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                        ${
                          isActive
                            ? 'opacity-100 translate-x-0 scale-100 pointer-events-auto z-10'
                            : 'opacity-0 translate-x-8 scale-95 pointer-events-none z-0'
                        }
                      `}
                    >
                      <div className='relative bg-white rounded-xl p-3.5 sm:p-4 shadow-[0_15px_40px_-15px_rgba(37,129,186,0.12)] border border-blue-50 overflow-hidden group'>
                        <div className='flex items-start gap-3 sm:gap-4 relative z-10'>
                          <div className='flex-shrink-0'>
                            <div
                              className='w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-white shadow-md shadow-blue-200/50 transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105'
                              style={{
                                background: isVision
                                  ? 'linear-gradient(135deg, #0f7ae5, #60a5fa)'
                                  : isMission
                                    ? 'linear-gradient(135deg, #ec4899, #f472b6)'
                                    : 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
                              }}
                            >
                              <Icon className='w-5 h-5 sm:w-6 sm:h-6' strokeWidth={1.5} />
                            </div>
                          </div>
                          <div className='flex-1 pt-0.5'>
                            <h4 className='text-base sm:text-lg font-roboto font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors'>
                              {value.title}
                            </h4>
                            <ul className='space-y-1 sm:space-y-1.5 text-slate-600 font-roboto text-xs sm:text-sm leading-relaxed'>
                              {Array.isArray(value.description) ? (
                                value.description.map((item, idx) => (
                                  <li key={idx} className='flex items-start gap-2'>
                                    <span className='text-blue-500 font-bold select-none leading-none mt-1'>–</span>
                                    <span className='flex-1'>{item}</span>
                                  </li>
                                ))
                              ) : (
                                <li className='flex items-start gap-2'>
                                  <span className='text-blue-500 font-bold select-none leading-none mt-1'>–</span>
                                  <span className='flex-1'>{value.description}</span>
                                </li>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVisionValues
