import DescribeTitle from 'layout/DescribeTitle'

const dataCard = [
  '1- Số Căn Cước',
  '2- Họ Và Tên',
  '3- Ngày Sinh',
  '4- Giới Tính',
  '5- Quốc Tịch',
  '6- Nguyên Quán',
  '7- Ngày Cấp',
  '8- Ngày Hết Hạn',
  '9- Số Căn Cước Cũ',
  '10- Dân Tộc',
  '11- Tôn Giáo',
  '12- Nhận Dạng Cá Nhân',
  '13- Thường Trú',
  '14- Họ Tên Cha, Mẹ',
  '15- Họ Tên Vợ, Chồng',
]

const dataCardPlus = [
  '1- Ảnh Chân Dung Trong CCCD',
  '2- Ảnh Scan Mặt Trước CCCD',
  '3- Ảnh Scan Mặt Sau CCCD',
  '4- Mã MRZ CCCD',
]

const dataCardExport = ['1- Định dạng PDF', '2- Định dạng EXCEL', '3- JSON']

const DataGetSR = () => {
  const half = Math.ceil(dataCard.length / 2)
  const firstColumn = dataCard.slice(0, half)
  const secondColumn = dataCard.slice(half)

  return (
    <section className='py-8 md:py-12 px-4 sm:px-6 lg:px-8 font-roboto overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-8 md:mb-10'>
          <DescribeTitle title={'Dữ liệu trả về từ thiết bị đọc ID Card'} />
        </div>

        {/* Thống kê nhanh - Tone màu tối sang trọng, đồng bộ TableSpecification */}
        <div className='bg-white rounded-xl md:rounded-2xl shadow-md border border-slate-200 overflow-hidden mb-6 md:mb-8'>
          <div className='bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 px-4 md:px-6 py-3 border-b border-slate-600 flex items-center justify-between'>
            <div className='flex items-center space-x-2.5'>
              <div className='w-2.5 h-2.5 bg-blue-400 rounded-full'></div>
              <h4 className='text-xs md:text-sm font-medium text-white font-roboto tracking-wider'>
                Thống kê tổng quan dữ liệu
              </h4>
            </div>
            <span className='text-[0.7rem] text-slate-300 font-roboto italic hidden sm:inline'>
              Tổng hợp khả năng trích xuất & định dạng
            </span>
          </div>
          <div className='p-4 sm:p-6 grid grid-cols-3 gap-3 md:gap-6 bg-slate-900/95'>
            <div className='text-center p-3.5 sm:p-4 bg-gradient-to-b from-slate-800 to-slate-850 border border-slate-700/80 rounded-xl hover:border-blue-400/50 hover:shadow-lg transition-all group'>
              <div className='text-2xl md:text-3xl font-bold font-roboto text-blue-400 group-hover:scale-105 transition-transform'>
                {dataCard.length}
              </div>
              <div className='text-xs md:text-sm text-slate-300 font-roboto mt-1'>Trường thông tin</div>
            </div>
            <div className='text-center p-3.5 sm:p-4 bg-gradient-to-b from-slate-800 to-slate-850 border border-slate-700/80 rounded-xl hover:border-emerald-400/50 hover:shadow-lg transition-all group'>
              <div className='text-2xl md:text-3xl font-bold font-roboto text-emerald-400 group-hover:scale-105 transition-transform'>
                {dataCardPlus.length}
              </div>
              <div className='text-xs md:text-sm text-slate-300 font-roboto mt-1'>Dữ liệu hình ảnh</div>
            </div>
            <div className='text-center p-3.5 sm:p-4 bg-gradient-to-b from-slate-800 to-slate-850 border border-slate-700/80 rounded-xl hover:border-purple-400/50 hover:shadow-lg transition-all group'>
              <div className='text-2xl md:text-3xl font-bold font-roboto text-purple-400 group-hover:scale-105 transition-transform'>
                {dataCardExport.length}
              </div>
              <div className='text-xs md:text-sm text-slate-300 font-roboto mt-1'>Định dạng xuất</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className='grid lg:grid-cols-2 gap-6 lg:gap-8 items-start'>
          {/* Left Section - 15 trường thông tin */}
          <div className='bg-white rounded-xl md:rounded-2xl shadow-md border border-slate-200 overflow-hidden flex flex-col justify-between'>
            <div className='bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 px-4 md:px-5 py-3 border-b border-slate-600 flex items-center justify-between'>
              <div className='flex items-center space-x-2.5'>
                <div className='w-2.5 h-2.5 bg-blue-400 rounded-full flex-shrink-0'></div>
                <h3 className='text-white font-roboto text-xs md:text-sm font-medium tracking-wider'>
                  Các trường thông tin định danh trong Chip <span className='text-red-400'>*</span>
                </h3>
              </div>
              <span className='text-[0.7rem] text-slate-300 font-roboto italic hidden sm:inline'>
                (Dữ liệu có thể ít hơn nếu là thẻ Căn Cước)
              </span>
            </div>

            <div className='grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 flex-1'>
              <div className='divide-y divide-slate-100'>
                {firstColumn.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center px-3.5 py-2.5 sm:py-3 transition-colors duration-200 group hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
                    }`}
                  >
                    <div className='w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full mr-2.5 flex-shrink-0 group-hover:bg-blue-600 transition-colors'></div>
                    <span className='text-slate-800 text-xs md:text-sm font-roboto font-semibold group-hover:text-blue-900 transition-colors leading-relaxed'>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className='divide-y divide-slate-100'>
                {secondColumn.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center px-3.5 py-2.5 sm:py-3 transition-colors duration-200 group hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
                    }`}
                  >
                    <div className='w-1.5 h-1.5 md:w-2 md:h-2 bg-indigo-500 rounded-full mr-2.5 flex-shrink-0 group-hover:bg-indigo-600 transition-colors'></div>
                    <span className='text-slate-800 text-xs md:text-sm font-roboto font-semibold group-hover:text-indigo-900 transition-colors leading-relaxed'>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className='space-y-6 flex flex-col justify-between'>
            {/* Dữ liệu hình ảnh */}
            <div className='bg-white rounded-xl md:rounded-2xl shadow-md border border-slate-200 overflow-hidden'>
              <div className='bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 px-4 md:px-5 py-3 border-b border-slate-600 flex items-center space-x-2.5'>
                <div className='w-2.5 h-2.5 bg-emerald-400 rounded-full flex-shrink-0'></div>
                <h3 className='text-white font-roboto text-xs md:text-sm font-medium tracking-wider'>
                  Dữ liệu hình ảnh
                </h3>
              </div>
              <div className='divide-y divide-slate-100'>
                {dataCardPlus.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center px-3.5 py-2.5 sm:py-3 transition-colors duration-200 group hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
                    }`}
                  >
                    <div className='w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-500 rounded-full mr-2.5 flex-shrink-0 group-hover:bg-emerald-600 transition-colors'></div>
                    <span className='text-slate-800 text-xs md:text-sm font-roboto font-semibold group-hover:text-emerald-900 transition-colors leading-relaxed'>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Xuất dữ liệu */}
            <div className='bg-white rounded-xl md:rounded-2xl shadow-md border border-slate-200 overflow-hidden'>
              <div className='bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 px-4 md:px-5 py-3 border-b border-slate-600 flex items-center space-x-2.5'>
                <div className='w-2.5 h-2.5 bg-purple-400 rounded-full flex-shrink-0'></div>
                <h3 className='text-white font-roboto text-xs md:text-sm font-medium tracking-wider'>
                  Định dạng xuất dữ liệu
                </h3>
              </div>
              <div className='divide-y divide-slate-100'>
                {dataCardExport.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between px-3.5 py-2.5 sm:py-3 transition-colors duration-200 group hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
                    }`}
                  >
                    <div className='flex items-center'>
                      <div className='w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-500 rounded-full mr-2.5 flex-shrink-0 group-hover:bg-purple-600 transition-colors'></div>
                      <span className='text-slate-800 text-xs md:text-sm font-roboto font-semibold group-hover:text-purple-900 transition-colors leading-relaxed'>
                        {item}
                      </span>
                    </div>
                    {index === 0 && (
                      <span className='px-2.5 py-0.5 text-xs font-roboto font-semibold bg-red-50 text-red-600 border border-red-200/80 rounded-md shadow-xs'>
                        PDF
                      </span>
                    )}
                    {index === 1 && (
                      <span className='px-2.5 py-0.5 text-xs font-roboto font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200/80 rounded-md shadow-xs'>
                        EXCEL
                      </span>
                    )}
                    {index === 2 && (
                      <span className='px-2.5 py-0.5 text-xs font-roboto font-semibold bg-blue-50 text-blue-600 border border-blue-200/80 rounded-md shadow-xs'>
                        JSON
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DataGetSR
