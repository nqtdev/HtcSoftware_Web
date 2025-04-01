import React from 'react'
import { ConfigProvider, Timeline } from 'antd'
import one from 'assets/info/1.png'
import two from 'assets/info/2.png'
import three from 'assets/info/3.png'
import four from 'assets/info/4.png'
import useCheckMobile from 'hooks/useCheckMobile'
const History = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Timeline: {
            // dotBorderWidth: 8,
            tailColor: '#004aad'
          }
        }
      }}
    >
      <Timeline
        mode="alternate"
        items={[
          {
            dot: (
              <img
                src={one}
                alt="icon"
                style={{ width: '5rem', height: '5rem' }}
              />
            ),
            children: (
              <div className="font-sans text-gray-700 text-sm text-center my-14 xl:my-28 ml-10 ">
                Tháng 12 năm 2021 HTC SoftWare và Trung tâm RAR ký thoả thuận
                hợp tác nghiên cứu sản phẩm xác thực thông tin công dân trong
                chip của thẻ căn cước công dân
              </div>
            )
          },
          {
            dot: (
              <img
                src={two}
                alt="icon"
                style={{ width: '5rem', height: '5rem' }}
              />
            ),
            children: (
              <div className="font-sans text-gray-700 text-sm text-center mb-28 mr-10">
                Tháng 7 năm 2022 ký hợp đồng nguyên tắc về việc đưa dịch vụ xác
                thực thông tin công dân trong chip của thẻ căn cước công dân vào
                thị trường thử nghiệm
              </div>
            )
          },
          {
            dot: (
              <img
                src={three}
                alt="icon"
                style={{ width: '5rem', height: '5rem' }}
              />
            ),
            color: 'red',
            children: (
              <div className="font-sans text-gray-700 text-sm text-center mb-28 ml-10">
                Tháng 4 năm 2023 HTC Software và Trung tâm RAR ký chính thức hợp
                đồng cung cấp dịch vụ xác thực thông tin công dân trong chip của
                thẻ căn cước công dân
              </div>
            )
          },
          {
            dot: (
              <img
                src={four}
                alt="icon"
                style={{ width: '5rem', height: '5rem' }}
              />
            ),
            children: (
              <div className="font-sans text-gray-700 text-sm text-center mb-28 mr-10">
                Hiện tại - Là thành viên của "Hiệp hội dữ liệu quốc gia"
              </div>
            )
          }
        ]}
      />
    </ConfigProvider>
  )
}

export default History
