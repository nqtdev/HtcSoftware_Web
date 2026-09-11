/* eslint-disable react/no-unescaped-entities */
import { Eye, Lightbulb, Rocket, Shield, Target, TrendingUp, Users, Zap } from 'lucide-react'
import React, { useEffect, useState, useCallback } from 'react'

const MissionVisionValues = () => {
  // Vision, Mission, and Core Values
  const visionMission = [
    {
      title: 'Tầm nhìn',
      description:
        'Định danh và xác thực điện tử giúp khẳng định chính xác danh tính số hợp pháp của người thực hiện giao dịch, nâng cao độ bảo mật và tin tưởng giữa người dân, chính quyền và doanh nghiệp trên môi trường số.',
      icon: Eye,
    },
    {
      title: 'Sứ mệnh',
      description:
        'Đón đầu xu hướng Công nghệ số hoá, hỗ trợ các Đối tác Khách hàng, Ngân hàng, Tổ chức tài chính, Doanh nghiệp số hoá các lĩnh vực trong việc Định danh và Xác thực điện tử. Phục vụ khách hàng tốt nhất với những gì mình có.',
      icon: Rocket,
    },
  ]

  const coreValues = [
    {
      title: 'Năng lực hoàn thành công việc',
      description:
        'Khả năng thực hiện và hoàn thành các dự án với chất lượng cao, đáp ứng mọi yêu cầu kỹ thuật và thời gian đã cam kết.',
      icon: Target,
    },
    {
      title: 'Năng lực Tích hợp',
      description:
        'Kết hợp các công nghệ và giải pháp một cách hiệu quả, tạo ra hệ thống hoàn chỉnh và tối ưu cho doanh nghiệp.',
      icon: Zap,
    },
    {
      title: 'Hệ thống đối tác uy tín',
      description:
        'Mạng lưới đối tác tin cậy và chuyên nghiệp, đảm bảo chất lượng dịch vụ và hỗ trợ tốt nhất cho khách hàng.',
      icon: Users,
    },
    {
      title: 'Số hóa vận hành tổ chức',
      description:
        'Chuyển đổi số và tối ưu hóa quy trình hoạt động, nâng cao hiệu quả và năng suất làm việc của tổ chức.',
      icon: TrendingUp,
    },
    {
      title: 'Chuyên môn ngành đa dạng',
      description:
        'Kiến thức sâu rộng trong nhiều lĩnh vực khác nhau, từ công nghệ thông tin đến viễn thông và định danh điện tử.',
      icon: Shield,
    },
    {
      title: 'Năng lực Cải tiến',
      description:
        'Không ngừng đổi mới và nâng cấp giải pháp, luôn đi đầu trong việc áp dụng các công nghệ tiên tiến nhất.',
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
  const detectActiveIndex = useCallback(currentRotation => {
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
  }, [totalItems, angleStep])

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
    <section className='relative py-12 lg:py-16 overflow-hidden'>
      {/* Center glow */}
      <div
        className='absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none'
        style={{
          background:
            'radial-gradient(circle, rgba(37, 129, 186, 0.2) 0%, rgba(15, 122, 229, 0.1) 50%, transparent 100%)',
        }}
      ></div>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-8 lg:mb-16' data-aos='fade-up'>
          <h2 className='text-2xl lg:text-3xl xl:text-4xl font-roboto font-bold mb-4 text-gray-900'>
            Sứ Mệnh, Tầm Nhìn & Giá Trị Cốt Lõi
          </h2>
          <div className='w-20 lg:w-24 h-1 bg-gradient-to-r from-[#2581ba] to-[#0f7ae5] mx-auto rounded-full mb-4'></div>
          <p className='text-base lg:text-lg xl:text-xl font-roboto font-bold text-gray-900 mb-2'>
            Dám nghĩ - Dám làm - Luôn sáng tạo
          </p>
          <p className='text-sm lg:text-base text-gray-600 font-roboto max-w-3xl mx-auto'>
            Với mục tiêu "Phục vụ khách hàng tốt nhất với những gì mình có", HTC luôn nỗ lực, cố
            gắng thay đổi và hoàn thiện hơn mỗi ngày để khách hàng luôn nhận được "dịch vụ và giá
            trị tốt nhất".
          </p>
        </div>

        <div
          className='grid lg:grid-cols-[1fr,1.2fr] gap-6 lg:gap-12 items-center lg:min-h-[600px] relative'
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
              <div className='min-h-[200px] flex items-center justify-center'>
                {activeIndex === null ? (
                  // Default state when no item is active
                  <div className='text-center text-slate-400 p-8'>
                    <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center'>
                      <Target className='w-8 h-8 text-slate-300' />
                    </div>
                    <p className='text-sm font-roboto'>Chạm và xoay vòng tròn để khám phá</p>
                  </div>
                ) : (
                  // Active item card
                  <div className='bg-white border border-blue-50 rounded-2xl p-4 shadow-lg shadow-blue-50 w-full'>
                    <div className='flex items-center gap-4 mb-4'>
                      <div
                        className='w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md'
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
                          className: 'w-7 h-7',
                          strokeWidth: 1.5,
                        })}
                      </div>
                      <div>
                        <h4 className='text-md font-roboto font-bold text-slate-900'>
                          {allItems[activeIndex].title}
                        </h4>
                        <p className='text-xs text-slate-500 mt-1'>
                          {activeIndex + 1} / {allItems.length}
                        </p>
                      </div>
                    </div>
                    <p className='text-sm font-roboto text-slate-600 leading-relaxed'>
                      {allItems[activeIndex].description}
                    </p>
                    <div className='mt-4 h-1 rounded-full bg-slate-100 overflow-hidden'>
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
              <div className='relative min-h-[300px] flex items-center'>
                {activeIndex === null && (
                  <div className='absolute inset-0 flex items-center justify-center text-slate-300 font-mono text-sm tracking-widest animate-pulse border-2 border-dashed border-slate-100 rounded-3xl'>
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
                      <div className='relative bg-white rounded-2xl p-4 shadow-[0_20px_60px_-15px_rgba(37,129,186,0.15)] border border-blue-50 overflow-hidden group'>
                        <div className='flex items-start gap-6 relative z-10'>
                          <div className='flex-shrink-0'>
                            <div
                              className='w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200/50 transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110'
                              style={{
                                background: isVision
                                  ? 'linear-gradient(135deg, #0f7ae5, #60a5fa)'
                                  : isMission
                                    ? 'linear-gradient(135deg, #ec4899, #f472b6)'
                                    : 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
                              }}
                            >
                              <Icon className='w-8 h-8' strokeWidth={1.5} />
                            </div>
                          </div>
                          <div className='flex-1 pt-1'>
                            <h4 className='text-xl font-roboto text-slate-900 mb-3 group-hover:text-blue-700 transition-colors'>
                              {value.title}
                            </h4>
                            <p className='text-slate-500 leading-relaxed font-mulish text-sm'>
                              {value.description}
                            </p>
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
