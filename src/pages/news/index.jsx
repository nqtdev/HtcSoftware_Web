import React from 'react'
import { NavLink } from 'react-router-dom'

const News = () => {
  return (
    <div className="p-3 w-full">
      <h2 className="font-roboto text-lg text-blue-700 text-center my-3">
        Thông tin khác
      </h2>
      <ul>
        <li>
          <NavLink to="/nghiquyet-57">
            <p className="text-gray-700 font-roboto hover:text-blue-600 transition">
              - Bộ trưởng Lương Tam Quang giữ chức Chủ tịch Hiệp hội Dữ liệu
              Quốc gia
            </p>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default News
