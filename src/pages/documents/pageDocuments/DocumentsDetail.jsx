import {useParams} from 'react-router-dom'
import data from '../pageDocuments/dataDocumentsDetail'
import ErrorPage from 'pages/errorPage'
import ContentDocuments from '../contentDocuments'

// Tạo slug từ title để khớp với param :id
const createSlug = (str = '') =>
  String(str)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')

const DocumentsDetail = () => {
  const {id} = useParams()

  // Tìm bản ghi theo slug
  const pageData = data.find(item => createSlug(item.title) === id)

  if (!pageData) return <ErrorPage />

  // Danh sách các trường thông tin để hiển thị trong bảng
  const infoFields = [
    {key: 'SoKyHieu', label: 'Số ký hiệu'},
    {key: 'NgayBanHanh', label: 'Ngày ban hành'},
    {key: 'LoaiVanBan', label: 'Loại văn bản'},
    {key: 'CoQuanBanHanh', label: 'Cơ quan ban hành'},
    {key: 'NguoiKy', label: 'Người ký'},
  ]

  // Lọc các trường có dữ liệu
  const validFields = infoFields.filter(field => pageData[field.key])

  return (
    <main className='max-w-5xl mx-auto px-4 py-8 '>
      <article itemScope itemType='https://schema.org/Legislation'>
        {/* Tiêu đề chính */}
        <h1
          className='text-2xl md:text-3xl font-roboto font-semibold text-center mb-8 text-gray-800'
          itemProp='name'
        >
          {pageData.title}
        </h1>

        {/* Bảng thông tin văn bản */}
        <section
          className='my-6 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden'
          aria-labelledby='thong-tin-van-ban'
        >
          <div className='bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200'>
            <h2
              id='thong-tin-van-ban'
              className='text-base font-bold font-lora uppercase text-blue-800 flex items-center'
            >
              <svg className='w-5 h-5 mr-2 text-blue-600' fill='currentColor' viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z'
                  clipRule='evenodd'
                />
              </svg>
              Thông tin văn bản
            </h2>
          </div>

          <div className='overflow-x-auto'>
            <table className='w-full'>
              <tbody>
                {validFields.map((field, index) => (
                  <tr
                    key={field.key}
                    className={`
                      ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                      hover:bg-blue-50 transition-colors duration-150
                    `}
                  >
                    <td className='font-roboto text-base text-gray-600 p-4 align-top w-1/3 border-r border-gray-200'>
                      <div className='flex items-center'>
                        <div
                          className={`w-2 h-2 rounded-full mr-3 ${
                            index % 2 === 0 ? 'bg-blue-400' : 'bg-indigo-400'
                          }`}
                        ></div>
                        {field.label}
                      </div>
                    </td>
                    <td className='text-gray-600 font-roboto text-base p-4 align-top'>
                      {pageData[field.key]}
                    </td>
                  </tr>
                ))}

                {/* Trích yếu */}
                {pageData.TrichYeu && (
                  <tr
                    className={`
                    ${validFields.length % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    hover:bg-blue-50 transition-colors duration-150
                  `}
                  >
                    <td className='font-roboto text-base text-gray-600 p-4 align-top border-r border-gray-200'>
                      <div className='flex items-center '>
                        <div
                          className={`w-2 h-2 rounded-full mr-3 ${
                            validFields.length % 2 === 0 ? 'bg-blue-400' : 'bg-indigo-400'
                          }`}
                        ></div>
                        Trích yếu
                      </div>
                    </td>
                    <td className='text-gray-800 p-4' itemProp='description'>
                      <div className='bg-white border border-gray-200 rounded-lg p-4'>
                        <p className='text-gray-700 font-roboto text-base leading-relaxed'>
                          {pageData.TrichYeu}
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Link mở tài liệu gốc */}
          {pageData.TaiLieu && (
            <div className='px-6 py-4 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center text-gray-600'>
                  {/* <svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg> */}
                  <span className='text-sm'>Tài liệu đính kèm</span>
                </div>
                <a
                  href={pageData.TaiLieu}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center px-5 py-2.5 rounded-lg border border-blue-600 bg-white text-blue-700 font-medium hover:bg-blue-50 hover:shadow-sm transition-all duration-200 group'
                  aria-label={`Mở toàn văn tài liệu: ${pageData.title}`}
                >
                  <svg
                    className='w-4 h-4 mr-2 group-hover:scale-110 transition-transform'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z'
                      clipRule='evenodd'
                    />
                  </svg>
                  Xem toàn văn tài liệu (PDF)
                </a>
              </div>
            </div>
          )}
        </section>
      </article>
      <div className=''>
        <h3 className='font-lora uppercase text-base text-blue-800 font-bold'>văn bản khác</h3>
        <ContentDocuments />
      </div>
    </main>
  )
}

export default DocumentsDetail
