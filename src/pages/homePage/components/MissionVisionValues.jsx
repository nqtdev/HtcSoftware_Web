import React, {useState, useEffect} from 'react'
import {Target, Rocket, Shield, Zap, Users, Lightbulb, Eye, TrendingUp} from 'lucide-react'

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
  const baseNodeRadius = 200 // Khoảng cách từ center đến icon nodes
  const totalItems = allItems.length
  const angleStep = 360 / totalItems

  const [rotation, setRotation] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)
  const [viewportWidth, setViewportWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1280,
  )

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = viewportWidth < 1024
  const wheelSize = isMobile ? 320 : baseWheelSize
  const wheelCenter = wheelSize / 2
  const nodeRadius = (wheelSize / baseWheelSize) * baseNodeRadius

  // Auto-rotate wheel and detect active index - Smooth animation with requestAnimationFrame
  useEffect(() => {
    if (isPaused) return

    let animationFrameId
    let lastTime = performance.now()
    const rotationSpeed = 0.3 // degrees per frame (smoother)

    const animate = currentTime => {
      const deltaTime = currentTime - lastTime
      lastTime = currentTime

      // Smooth rotation based on delta time
      const rotationDelta = (rotationSpeed * deltaTime) / 16.67 // Normalize to 60fps

      setRotation(prev => {
        const newRotation = (prev + rotationDelta) % 360

        // Detect which node is at trigger point (0 degrees = right side)
        const triggerRange = 30
        let foundActive = false
        let newActiveIndex = null

        for (let i = 0; i < totalItems; i++) {
          const baseAngle = (i * angleStep + angleStep / 2 - 90) * (Math.PI / 180)
          const currentAngle = baseAngle + (newRotation * Math.PI) / 180
          let currentAngleDeg = ((currentAngle * 180) / Math.PI) % 360
          if (currentAngleDeg < 0) currentAngleDeg += 360

          const isNearTrigger =
            (currentAngleDeg >= 360 - triggerRange && currentAngleDeg <= 360) ||
            (currentAngleDeg >= 0 && currentAngleDeg <= triggerRange)

          if (isNearTrigger) {
            newActiveIndex = i
            foundActive = true
            break
          }
        }

        // Only update activeIndex if it changed to prevent flicker
        setActiveIndex(prevActive => {
          if (prevActive !== newActiveIndex) {
            return newActiveIndex
          }
          return prevActive
        })

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
  }, [isPaused, totalItems, angleStep])

  return (
    <section className='relative py-16 sm:py-20 lg:py-24 mb-16 sm:mb-20 lg:mb-24 bg-gradient-to-br from-[#2581ba]/5 to-[#0f7ae5]/5 overflow-hidden'>
      {/* Guilloche Pattern Background (Security Pattern) - Hairline with brand color */}
      <div
        className='absolute inset-0 opacity-[0.08] pointer-events-none'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='guilloche' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0,50 Q25,25 50,50 T100,50' stroke='%232581ba' stroke-width='1' fill='none'/%3E%3Cpath d='M0,50 Q25,75 50,50 T100,50' stroke='%232581ba' stroke-width='1' fill='none'/%3E%3Cpath d='M0,30 Q50,10 100,30' stroke='%232581ba' stroke-width='0.5' fill='none'/%3E%3Cpath d='M0,70 Q50,90 100,70' stroke='%232581ba' stroke-width='0.5' fill='none'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23guilloche)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      ></div>

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
        <div className='text-center mb-12 lg:mb-16' data-aos='fade-up'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-mulish text-gray-900'>
            Sứ Mệnh, Tầm Nhìn & Giá Trị Cốt Lõi
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-[#2581ba] to-[#0f7ae5] mx-auto rounded-full mb-4'></div>
          {/* Core Message */}
          <p className='text-lg sm:text-xl font-bold text-gray-900 font-mulish mb-2'>
            Dám nghĩ - Dám làm - Luôn sáng tạo
          </p>
          <p className='text-base text-gray-600 font-mulish max-w-3xl mx-auto'>
            Với mục tiêu "Phục vụ khách hàng tốt nhất với những gì mình có", HTC luôn nỗ lực, cố
            gắng thay đổi và hoàn thiện hơn mỗi ngày để khách hàng luôn nhận được "dịch vụ và giá
            trị tốt nhất".
          </p>
        </div>

        {/* Layout: Wheel on left, Cards on right */}
        <div
          className='grid lg:grid-cols-[1fr,1.2fr] gap-6 lg:gap-12 items-center lg:min-h-[600px] relative'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          {/* HUD Connection Line - Spans across both columns */}
          {!isMobile &&
            activeIndex !== null &&
            (() => {
              const baseAngle = (activeIndex * angleStep + angleStep / 2 - 90) * (Math.PI / 180)
              const currentAngle = baseAngle + (rotation * Math.PI) / 180
              const nodeX = wheelCenter + nodeRadius * Math.cos(currentAngle)
              const nodeY = wheelCenter + nodeRadius * Math.sin(currentAngle)

              // Calculate positions relative to grid container
              // Wheel is in left column (1fr), card is in right column (1.2fr)
              // With gap-12 (3rem = 48px), approximate positions:
              // Left column ends around 45% of container, right column starts around 55%
              // For a typical max-w-7xl (1280px), left col ~560px, gap ~48px, right col ~672px
              const startX = nodeX // Relative to wheel container (560px)
              const startY = nodeY // Relative to wheel container
              const gapSpacing = 48
              const cardOffset = 20
              const endX = wheelSize + gapSpacing + cardOffset // End of wheel + gap + offset into card
              const endY = nodeY // Same Y level

              return (
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
                  {/* Circuit-style connection line */}
                  <path
                    d={`M ${startX} ${startY} L ${endX} ${endY}`}
                    stroke='url(#hudLineGradient)'
                    strokeWidth='2.5'
                    strokeDasharray='6 4'
                    fill='none'
                    filter='url(#hudGlowFilter)'
                    opacity='0.9'
                  />
                  {/* Data stream particles - Binary code flowing */}
                  {[...Array(8)].map((_, i) => {
                    const delay = i * 0.3
                    const offset = (endX - startX) / 8
                    return (
                      <g key={`particle-${i}`}>
                        {/* Binary digits */}
                        <text
                          x={startX + offset * (i + 0.5)}
                          y={endY - 8}
                          fontSize='8'
                          fill='#2581ba'
                          opacity='0.7'
                          fontFamily='monospace'
                          fontWeight='bold'
                        >
                          <animate
                            attributeName='x'
                            values={`${startX};${endX - 20}`}
                            dur='2s'
                            repeatCount='indefinite'
                            begin={`${delay}s`}
                            calcMode='linear'
                          />
                          {i % 2 === 0 ? '1' : '0'}
                        </text>
                        {/* Small particle dot */}
                        <circle
                          cx={startX + offset * (i + 0.5)}
                          cy={endY}
                          r='2'
                          fill='#2581ba'
                          opacity='0.8'
                        >
                          <animate
                            attributeName='cx'
                            values={`${startX};${endX - 20}`}
                            dur='2s'
                            repeatCount='indefinite'
                            begin={`${delay}s`}
                            calcMode='linear'
                          />
                        </circle>
                      </g>
                    )
                  })}
                  {/* Arrow pointer at card edge */}
                  <polygon
                    points={`${endX - 15},${endY - 6} ${endX - 5},${endY} ${endX - 15},${endY + 6}`}
                    fill='#2581ba'
                    filter='url(#hudGlowFilter)'
                    opacity='0.9'
                  />
                </svg>
              )
            })()}

          {/* Left Side - Rotating Radar Wheel */}
          {/* Left Side - Rotating Radar Wheel (THE DIGITAL LENS STYLE) */}
          <div className='flex justify-center lg:justify-start items-center relative'>
            {/* Background Glow Behind Wheel */}
            <div
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-100/20 rounded-full blur-3xl pointer-events-none'
              style={{
                width: `${isMobile ? wheelSize + 80 : 600}px`,
                height: `${isMobile ? wheelSize + 80 : 600}px`,
              }}
            ></div>

            <div
              className='relative'
              style={{width: `${wheelSize}px`, height: `${wheelSize}px`}}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* LAYER 1: ROTATING RINGS (Tạo chiều sâu công nghệ) */}
              <div className='absolute inset-0 pointer-events-none'>
                {/* Ring 1: Outer Dashed (Quay chậm cùng chiều) */}
                <div className='absolute inset-0 border border-dashed border-blue-200/50 rounded-full animate-[spin_60s_linear_infinite]'></div>

                {/* Ring 2: Middle Tech Ring (Quay ngược chiều) */}
                <div className='absolute inset-[40px] border border-blue-100/60 rounded-full animate-[spin_40s_linear_infinite_reverse] opacity-60'>
                  <div className='absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-300 rounded-full'></div>
                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-300 rounded-full'></div>
                </div>

                {/* Ring 3: Inner Solid Ring */}
                <div className='absolute inset-[100px] border border-blue-50 rounded-full'></div>
              </div>

              {/* LAYER 2: THE CENTER CORE (Vân tay kỹ thuật số) */}
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20'>
                {/* Core Halo */}
                <div className='absolute inset-0 bg-blue-400/20 blur-xl rounded-full animate-pulse'></div>

                {/* Core Container */}
                <div className='relative w-36 h-36 bg-white rounded-full border border-blue-100 shadow-[0_0_40px_rgba(37,129,186,0.15)] flex items-center justify-center overflow-hidden'>
                  {/* Animated Fingerprint/Radar Scan inside Core */}
                  <div className='absolute inset-0 opacity-20'>
                    <svg
                      viewBox='0 0 100 100'
                      className='w-full h-full animate-[spin_20s_linear_infinite]'
                    >
                      <path
                        d='M50 10 A40 40 0 0 1 90 50'
                        fill='none'
                        stroke='#2581ba'
                        strokeWidth='1'
                      />
                      <path
                        d='M50 20 A30 30 0 0 0 20 50'
                        fill='none'
                        stroke='#2581ba'
                        strokeWidth='1'
                      />
                      <path
                        d='M50 30 A20 20 0 0 1 70 50'
                        fill='none'
                        stroke='#2581ba'
                        strokeWidth='1'
                      />
                    </svg>
                  </div>

                  {/* Core Text */}
                  <div className='relative z-10 text-center bg-white/80 backdrop-blur px-2 py-1 rounded'>
                    <div className='text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1'>
                      HTC
                    </div>
                    <div className='text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 font-mulish uppercase tracking-tighter'>
                      VALUES
                    </div>
                  </div>
                </div>
              </div>

              {/* LAYER 3: CONNECTING LASER BEAM (Chỉ hiện cho Active Node) */}
              {activeIndex !== null && (
                <svg className='absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible'>
                  <defs>
                    <linearGradient id='laserGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
                      <stop offset='0%' stopColor='rgba(37, 129, 186, 0)' />
                      <stop offset='50%' stopColor='#60a5fa' /> {/* Blue-400 */}
                      <stop offset='100%' stopColor='#2563eb' /> {/* Blue-600 */}
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
                    // Tính toán vị trí Active Node
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

              {/* LAYER 4: ORBITAL NODES (Các nút vệ tinh) */}
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
                      transition: 'none',
                    }}
                  >
                    {/* UI CỦA NODE: Thay đổi hoàn toàn */}
                    <div
                      className={`relative transition-all duration-500 ease-out ${isActive ? 'scale-125' : 'scale-100'}`}
                    >
                      {/* 1. Inactive State: Glass Orb (Viên bi kính) */}
                      <div
                        className={`
              w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-500
              ${
                isActive
                  ? 'opacity-0 scale-0' // Ẩn khi Active
                  : 'bg-white/60 border-white/40 shadow-lg shadow-blue-100/50 opacity-100 scale-100 hover:bg-white hover:border-blue-200'
              }
            `}
                      >
                        <Icon className='w-5 h-5 text-slate-500/70' strokeWidth={2} />
                      </div>

                      {/* 2. Active State: Tech Target (Khung ngắm công nghệ) */}
                      <div
                        className={`
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-20 h-20 flex items-center justify-center transition-all duration-500
              ${
                isActive
                  ? 'opacity-100 scale-100 rotate-0'
                  : 'opacity-0 scale-50 -rotate-45 pointer-events-none'
              }
            `}
                      >
                        {/* Outer Ring Glow */}
                        <div className='absolute inset-0 rounded-full border border-blue-400/30 animate-ping'></div>
                        <div className='absolute inset-0 rounded-full border border-blue-500/50 shadow-[0_0_20px_rgba(37,99,235,0.4)]'></div>

                        {/* Crosshairs (Gạch ngắm) */}
                        <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-1 h-3 bg-blue-500'></div>
                        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-1 h-3 bg-blue-500'></div>
                        <div className='absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-3 h-1 bg-blue-500'></div>
                        <div className='absolute right-0 top-1/2 translate-x-1 -translate-y-1/2 w-3 h-1 bg-blue-500'></div>

                        {/* Center Icon Container */}
                        <div className='w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-inner text-white relative z-10'>
                          <Icon className='w-6 h-6' strokeWidth={2} />
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
              <div className='space-y-4'>
                {allItems.map((value, index) => {
                  const Icon = value.icon
                  const isVision = index === 0
                  const isMission = index === 1
                  const themeColor = isVision ? '#0f7ae5' : isMission ? '#ec4899' : '#2581ba'

                  return (
                    <div
                      key={`mobile-card-${index}`}
                      className='bg-white border border-blue-50 rounded-2xl p-5 shadow-lg shadow-blue-50'
                    >
                      <div className='flex items-center gap-4 mb-3'>
                        <div
                          className='w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md'
                          style={{
                            background: isVision
                              ? 'linear-gradient(135deg, #0f7ae5, #60a5fa)'
                              : isMission
                                ? 'linear-gradient(135deg, #ec4899, #f472b6)'
                                : 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
                          }}
                        >
                          <Icon className='w-7 h-7' strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className='text-[11px] font-mono uppercase tracking-widest text-slate-400'>
                            DATA_STREAM_{index < 10 ? `0${index + 1}` : index + 1}
                          </p>
                          <h4 className='text-xl font-bold text-slate-900'>{value.title}</h4>
                        </div>
                      </div>
                      <p className='text-sm text-slate-600 leading-relaxed'>{value.description}</p>
                      <div className='mt-4 h-1 rounded-full bg-slate-100 overflow-hidden'>
                        <div
                          className='h-full rounded-full'
                          style={{backgroundColor: themeColor, width: '100%'}}
                        ></div>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className='relative min-h-[300px] flex items-center'>
                {activeIndex === null && (
                  <div className='absolute inset-0 flex items-center justify-center text-slate-300 font-mono text-sm tracking-widest animate-pulse border-2 border-dashed border-slate-100 rounded-3xl'>
                    WAITING FOR DATA STREAM...
                  </div>
                )}

                {allItems.map((value, index) => {
                  const isActive = activeIndex === index
                  const Icon = value.icon

                  // Determine color theme based on index
                  const isVision = index === 0
                  const isMission = index === 1
                  const themeColor = isVision ? '#0f7ae5' : isMission ? '#ec4899' : '#2581ba'

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
                      {/* THE PANEL CONTAINER */}
                      <div className='relative bg-white rounded-3xl p-8 shadow-[0_20px_60px_-15px_rgba(37,129,186,0.15)] border border-blue-50 overflow-hidden group'>
                        {/* 1. Holographic Grid Background */}
                        <div
                          className='absolute inset-0 opacity-[0.03] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.06]'
                          style={{
                            backgroundImage: `linear-gradient(0deg, transparent 24%, ${themeColor} 25%, ${themeColor} 26%, transparent 27%, transparent 74%, ${themeColor} 75%, ${themeColor} 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, ${themeColor} 25%, ${themeColor} 26%, transparent 27%, transparent 74%, ${themeColor} 75%, ${themeColor} 76%, transparent 77%, transparent)`,
                            backgroundSize: '30px 30px',
                          }}
                        />

                        {/* 2. Top Status Bar */}
                        <div className='flex justify-between items-center mb-6 border-b border-slate-100 pb-4'>
                          <div className='flex items-center gap-2'>
                            <div className='w-1.5 h-1.5 rounded-full bg-green-500 animate-ping'></div>
                            <span className='text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest'>
                              DATA_STREAM_{index < 10 ? `0${index + 1}` : index + 1}
                            </span>
                          </div>
                          <div className='px-2 py-0.5 rounded bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-500'>
                            SECURE
                          </div>
                        </div>

                        <div className='flex items-start gap-6 relative z-10'>
                          {/* 3. Icon Box */}
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

                            {/* Connection Line Indicator */}
                            <div className='flex justify-center mt-2 gap-1 opacity-30'>
                              <div className='w-1 h-1 rounded-full bg-slate-400'></div>
                              <div className='w-1 h-2 rounded-full bg-slate-400'></div>
                              <div className='w-1 h-1 rounded-full bg-slate-400'></div>
                            </div>
                          </div>

                          {/* 4. Content Body */}
                          <div className='flex-1 pt-1'>
                            <h4 className='text-2xl font-bold text-slate-900 mb-3 font-mulish group-hover:text-blue-700 transition-colors'>
                              {value.title}
                            </h4>
                            <p className='text-slate-500 leading-relaxed font-mulish text-base'>
                              {value.description}
                            </p>

                            {/* Tech Decoration: Progress Bar */}
                            <div className='mt-6 flex items-center gap-3'>
                              <span className='text-[9px] font-bold text-slate-300 uppercase'>
                                Loading Assets
                              </span>
                              <div className='flex-1 h-1 bg-slate-100 rounded-full overflow-hidden'>
                                <div
                                  className='h-full bg-blue-400 rounded-full'
                                  style={{
                                    width: isActive ? '100%' : '0%',
                                    transition: 'width 1.5s ease-out 0.2s',
                                  }}
                                ></div>
                              </div>
                              <span className='text-[9px] font-bold text-blue-500'>100%</span>
                            </div>
                          </div>
                        </div>

                        {/* Decorative Corners */}
                        <div className='absolute top-0 right-0 p-3'>
                          <div className='w-3 h-3 border-t-2 border-r-2 border-blue-200 rounded-tr'></div>
                        </div>
                        <div className='absolute bottom-0 left-0 p-3'>
                          <div className='w-3 h-3 border-b-2 border-l-2 border-blue-200 rounded-bl'></div>
                        </div>

                        {/* Verified Stamp */}
                        <div className='absolute -bottom-4 -right-4 opacity-10 transform -rotate-12 pointer-events-none'>
                          <Shield className='w-24 h-24 text-slate-900' />
                        </div>
                      </div>

                      {/* Visual Connection to Left Side */}
                      <div className='absolute top-1/2 -left-2 -translate-y-1/2 w-2 h-6 bg-blue-400 rounded-r-md shadow-[0_0_10px_rgba(59,130,246,0.8)]'></div>
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
