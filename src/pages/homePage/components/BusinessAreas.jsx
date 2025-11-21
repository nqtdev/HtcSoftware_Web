import {Cloud, Radio, Monitor, Cpu, Server, Activity, Zap} from 'lucide-react'

const businessAreas = [
  {
    code: 'SOFT',
    title: 'Xuất Bản Phần Mềm',
    icon: Cloud,
    description: 'Phát triển và xuất bản các phần mềm công nghệ tiên tiến.',
    accentFrom: '#0f172a',
    accentTo: '#1e3a8a',
    position: 'left',
  },
  {
    code: 'TELCO',
    title: 'Viễn Thông & Truyền Thông',
    icon: Radio,
    description: 'Dịch vụ giá trị gia tăng và nội dung số di động.',
    accentFrom: '#0f3c7a',
    accentTo: '#2563eb',
    position: 'left',
  },
  {
    code: 'DEV',
    title: 'Lập Trình Máy Vi Tính',
    icon: Monitor,
    description: 'Thiết kế hệ thống CNTT chuyên nghiệp, đáp ứng kỹ thuật cao.',
    accentFrom: '#145a9c',
    accentTo: '#2f9ee7',
    position: 'right',
  },
  {
    code: 'CONS',
    title: 'Tư Vấn & Quản Trị',
    icon: Cpu,
    description: 'Vận hành hệ thống ổn định, tư vấn chiến lược tối ưu.',
    accentFrom: '#1b5b92',
    accentTo: '#3bb1f5',
    position: 'right',
  },
]

// Main Core Service
const coreService = {
  code: 'CORE',
  title: 'Dịch Vụ CNTT Toàn Diện',
  icon: Server,
  description: 'Giải pháp số hóa chuyên nghiệp, hỗ trợ doanh nghiệp phát triển bền vững.',
  accentFrom: '#1c4370',
  accentTo: '#54c0ff',
}

const BusinessAreas = () => {
  return (
    <section id='business-areas' className='relative py-16 sm:py-20 lg:py-24 overflow-hidden'>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* THE MAINBOARD CONTAINER */}
        <div className='relative bg-gradient-to-b from-slate-50 to-white rounded-[3rem] border border-blue-100 shadow-[0_40px_100px_-30px_rgba(15,122,229,0.15)] p-6 sm:p-10 lg:p-16 overflow-hidden'>
          {/* Decorative Background Circuit Lines (Soft) */}
          <svg
            className='absolute inset-0 w-full h-full pointer-events-none opacity-30'
            style={{zIndex: 0}}
          >
            <pattern id='grid' x='0' y='0' width='40' height='40' patternUnits='userSpaceOnUse'>
              <path d='M 40 0 L 0 0 0 40' fill='none' stroke='#e2e8f0' strokeWidth='1' />
            </pattern>
            <rect width='100%' height='100%' fill='url(#grid)' />
          </svg>

          {/* Section Header */}
          <div className='relative z-10 text-center mb-16 lg:mb-24'>
            <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4'>
              <Activity className='w-4 h-4 text-blue-600' />
              <span className='text-xs font-bold text-blue-800 uppercase tracking-wider'>
                HTC Ecosystem
              </span>
            </div>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-mulish mb-4'>
              Cấu Trúc Dịch Vụ
            </h2>
            <p className='text-slate-500 max-w-2xl mx-auto font-mulish'>
              Các module dịch vụ liên kết chặt chẽ tạo nên sức mạnh công nghệ toàn diện
            </p>
          </div>

          {/* THE MODULAR SYSTEM LAYOUT */}
          <div className='relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-8 items-center'>
            {/* CONNECTING LINES (DESKTOP ONLY) */}
            <div
              className='hidden lg:block absolute inset-0 pointer-events-none'
              style={{zIndex: 0}}
            >
              {/* Dùng hệ trục 0–100 thay cho % */}
              <svg className='w-full h-full overflow-visible' viewBox='0 0 100 100'>
                {/* Center to Left Top */}
                <path
                  d='M 50 50 C 35 50, 35 20, 25 20'
                  fill='none'
                  stroke='#cbd5e1'
                  strokeWidth='2'
                  strokeDasharray='6 4'
                  className='animate-pulse'
                  style={{animationDuration: '3s'}}
                />
                {/* Center to Left Bottom */}
                <path
                  d='M 50 50 C 35 50, 35 80, 25 80'
                  fill='none'
                  stroke='#cbd5e1'
                  strokeWidth='2'
                  strokeDasharray='6 4'
                  className='animate-pulse'
                  style={{animationDuration: '3.5s'}}
                />
                {/* Center to Right Top */}
                <path
                  d='M 50 50 C 65 50, 65 20, 75 20'
                  fill='none'
                  stroke='#cbd5e1'
                  strokeWidth='2'
                  strokeDasharray='6 4'
                  className='animate-pulse'
                  style={{animationDuration: '4s'}}
                />
                {/* Center to Right Bottom */}
                <path
                  d='M 50 50 C 65 50, 65 80, 75 80'
                  fill='none'
                  stroke='#cbd5e1'
                  strokeWidth='2'
                  strokeDasharray='6 4'
                  className='animate-pulse'
                  style={{animationDuration: '4.5s'}}
                />
              </svg>
            </div>

            {/* LEFT COLUMN MODULES */}
            <div className='space-y-8 lg:space-y-24'>
              {businessAreas
                .filter(i => i.position === 'left')
                .map(area => (
                  <ModuleCard key={area.code} area={area} align='right' />
                ))}
            </div>

            {/* CENTER CORE MODULE */}
            <div className='relative flex justify-center py-8 lg:py-0'>
              {/* Halo Effect */}
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl animate-pulse'></div>

              <div className='relative w-full max-w-sm bg-white rounded-[2rem] p-8 border-2 border-blue-100 shadow-[0_20px_60px_-10px_rgba(37,129,186,0.2)] text-center transform transition-transform duration-500 hover:scale-105 z-20'>
                <div className='absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg'>
                  CORE SYSTEM
                </div>

                <div className='w-24 h-24 mx-auto bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 flex items-center justify-center mb-6 shadow-inner'>
                  <div className='w-16 h-16 rounded-xl bg-gradient-to-br from-[#1c4370] to-[#54c0ff] flex items-center justify-center text-white shadow-lg'>
                    <Server className='w-8 h-8' />
                  </div>
                </div>

                <h3 className='text-2xl font-bold text-slate-900 mb-3 font-mulish'>
                  {coreService.title}
                </h3>
                <p className='text-sm text-slate-500 mb-6 leading-relaxed'>
                  {coreService.description}
                </p>

                {/* Connector Hubs */}
                <div className='flex justify-center gap-2'>
                  {[1, 2, 3, 4].map(i => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i <= 2 ? 'bg-green-400' : 'bg-slate-200'
                      } animate-pulse`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN MODULES */}
            <div className='space-y-8 lg:space-y-24'>
              {businessAreas
                .filter(i => i.position === 'right')
                .map(area => (
                  <ModuleCard key={area.code} area={area} align='left' />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Reusable Module Card Component
const ModuleCard = ({area, align}) => {
  return (
    <div
      className={`relative group flex items-center ${
        align === 'right' ? 'lg:justify-end' : 'lg:justify-start'
      }`}
    >
      {/* CONNECTOR LINE (Visual Link to Core) */}
      <div
        className={`hidden lg:block absolute top-1/2 w-12 h-0.5 bg-blue-200 transition-all duration-500 group-hover:bg-blue-400 group-hover:w-16 ${
          align === 'right' ? '-right-12 group-hover:-right-16' : '-left-12 group-hover:-left-16'
        }`}
      >
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400 ${
            align === 'right' ? 'right-0' : 'left-0'
          }`}
        ></div>
      </div>

      {/* CARD BODY */}
      <div className='relative w-full max-w-xs bg-white rounded-2xl p-6 border border-slate-100 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-200'>
        {/* Top Label */}
        <div className='flex justify-between items-start mb-4'>
          <div
            className='w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md transition-transform duration-500 group-hover:rotate-6'
            style={{background: `linear-gradient(135deg, ${area.accentFrom}, ${area.accentTo})`}}
          >
            <area.icon className='w-6 h-6' strokeWidth={1.5} />
          </div>
          <span className='text-[10px] font-bold text-slate-300 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded'>
            {area.code}
          </span>
        </div>

        <h4 className='text-lg font-bold text-slate-800 mb-2 font-mulish group-hover:text-blue-700 transition-colors'>
          {area.title}
        </h4>
        <p className='text-sm text-slate-500 leading-relaxed'>{area.description}</p>

        {/* Bottom Connector Interface */}
        <div className='mt-4 pt-3 border-t border-slate-50 flex justify-between items-center'>
          <div className='flex gap-0.5'>
            {[1, 2, 3, 4, 5].map(i => (
              <div
                key={i}
                className='w-1 h-2 bg-slate-200 rounded-sm group-hover:bg-blue-300 transition-colors delay-75'
              ></div>
            ))}
          </div>
          <Zap className='w-3 h-3 text-slate-300 group-hover:text-yellow-400 fill-current transition-colors' />
        </div>
      </div>
    </div>
  )
}

export default BusinessAreas
