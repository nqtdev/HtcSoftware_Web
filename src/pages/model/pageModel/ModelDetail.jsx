import React from 'react'
import { useParams } from 'react-router-dom'
import News from 'pages/news'
import checkbox from 'assets/page_modal/checkbox.svg'
import data from 'pages/model/pageModel/dataModelDetail'

const ModelDetail = () => {
  const { id } = useParams() // Lấy id từ URL
  const pageData = data.find((item) => item.id === id) // Tìm model theo id
  // Nếu không tìm thấy dữ liệu, hiển thị thông báo
  if (!pageData) {
    return <h2 className="text-center text-red-500">Không tìm thấy trang</h2>
  }

  return (
    <div>
      {/* Header */}
      <div className="w-full h-56 flex justify-center items-center bg-gradient-to-r bg-blue-500 opacity-80">
        <h2 className="text-white text-center text-3xl font-roboto">
          {pageData.title}
        </h2>
      </div>
      <div className="grid xl:grid-cols-10 gap-5 p-5 xl:p-10">
        {/* Nội dung chính */}
        <div className="col-span-7">
          {pageData.image && (
            <img
              className="rounded-lg w-full"
              src={pageData.image}
              alt={pageData.title}
            />
          )}

          {/* Render các phần theo API */}
          {pageData.sections.map((section, index) => (
            <div key={index} className="mt-5">
              <h4 className="text-xl font-bold text-gray-700">
                {section.title}
              </h4>
              <ul className="list-none mt-2">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-center mt-2">
                    <img className="w-5 h-5 mr-2" src={checkbox} alt="Check" />
                    <p className="text-lg text-gray-500">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <i className="text-[.5rem]">
              Nguồn "Trung Tâm Dịch Vụ Chuyển Đổi Số - Chi Nhánh Tổng Công Ty
              Gtel (Gtel CDS)"
            </i>
          </div>
        </div>
        {/* Sidebar Tin tức */}
        <div className="col-span-3">
          <News />
        </div>
      </div>
    </div>
  )
}

export default ModelDetail
