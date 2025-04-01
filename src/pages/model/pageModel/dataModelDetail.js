import imgModal from 'assets/page_modal/mo-hinh-01.webp'
import imgModal2 from 'assets/page_modal/mo-hinh-02.webp'
import imgModal3 from 'assets/page_modal/mo-hinh-03.webp'
import imgModal4 from 'assets/page_modal/mo-hinh-04.webp'
import imgModal5 from 'assets/page_modal/mo-hinh-05.webp'

const data = [
  // mô hình 01
  {
    id: 'mo-hinh-01',
    title: 'Mô hình 01: Triển khai dịch vụ công theo Đề án 06',
    image: imgModal,
    sections: [
      {
        title: 'Căn cứ pháp lý',
        items: [
          'Theo quyết định số 06 và quyết định số 442 của Thủ Tướng Chính Phủ',
          'Phương pháp: Đẩy mạnh tuyên truyền',
          'Tổ chức mô hình điểm DVC tại các điểm chung cư...'
        ]
      },
      {
        title: 'Các bước thực hiện',
        items: [
          'Bước 1: Rà soát, khảo sát đánh giá tỷ lệ người dân am hiểu sử dụng điện thoại thông minh, trình độ dân trí cao tại các điểm trên địa bàn để tham mưu đề xuất lựa chọn điểm tổ chức triển khai DVC (nên ưu tiên lựa chọn khu chung cư, nhà văn hoá, khu vực đông dân cư...).',
          'Bước 2: Tham mưu UBND đề xuất triển khai DVC sau khi đã rà soát, khảo sát.',
          'Bước 3: Tuyên truyền đến người dân về giá trị, tiện ích khi tham gia TTHC trên DVC trực tuyến',
          'Bước 4: Huy động, bố trí nguồn nhân lực có trình độ CNTT (người trẻ tuổi, đoàn viên thanh niên, học sinh, sinh viên, giáo viên...) để nghiên cứu quy trình các bước thực hiện trên DVC và hướng dẫn người dân khi tham gia TTHC trên DVC trực tuyến.',
          'Bước 5: Đánh giá kết quả triển khai và đề xuất nhân rộng tại các địa bàn khác.'
        ]
      },
      {
        title: 'Thiết bị',
        items: ['Cấp miễn phí']
      },
      {
        title: 'Đơn vị triển khai',
        items: ['HTC SOFTWARE & RAR']
      },
      {
        title: 'Giải pháp',
        items: ['ID Pass - Xác thực căn cước công dân']
      },
      {
        title: 'Nền tảng công nghệ',
        items: ['Web server/Desktop App']
      }
    ]
  },
  // mô hình 02
  {
    id: 'mo-hinh-02',
    title:
      'Mô hình 02: Xây dựng tối thiểu 20 dịch vụ công không sử dụng hồ sơ giấy',
    image: imgModal2,
    sections: [
      {
        title: 'Tổ chức thực hiện:',
        items: [
          'Sở Thông tin và Truyền thông chủ trì, phối hợp các cơ quan chuyên môn thuộc UBND tỉnh rà soát các thủ tục đảm bảo điều kiện thực hiện trên Cổng tỉnh.',
          'Ghi chú: Trung tâm cung cấp mẫu UBND Huế đã rà soát các đơn vị tham khảo, đề xuất dựa trên việc tái cấu trúc quy trình và sử dụng dữ liệu điện tử đã có tại đơn vị.'
        ]
      },
      {
        title: 'Căn cứ pháp lý',
        items: [
          'Theo nhu cầu, đề nghị của Tổ công tác tỉnh',
          'Dự kiến trước 31/12/2023.'
        ]
      },
      {
        title: 'Các bước thực hiện',
        items: [
          'Bước 1: Sở Thông tin và Truyền thông có văn bản gửi các đơn vị trên địa bàn để rà soát, đăng ký đề xuất các DVC không sử dụng hồ sơ giấy.',
          'Bước 2: Sở Thông tin và Truyền thông tổng hợp kết quả và báo cáo, đề xuất Tổ trưởng Tổ công tác để tổ chức triển khai.',
          'Bước 3: Tái cấu trúc quy trình và sử dụng dữ liệu điện tử đã có. (liên hệ C06 để gửi bản mẫu các DVC có thể không sử dụng hồ sơ giấy để nghiên cứu, tham khảo áp dụng phù hợp cho địa bàn tỉnh)'
        ]
      },
      {
        title: 'Thiết bị',
        items: ['Cấp miễn phí']
      },
      {
        title: 'Đơn vị triển khai',
        items: ['HTC SOFTWARE & RAR']
      },
      {
        title: 'Giải pháp',
        items: ['ID Pass - Xác thực căn cước công dân']
      },
      {
        title: 'Nền tảng công nghệ',
        items: ['Web server/Desktop App']
      }
    ]
  },
  // mô hình 03
  {
    id: 'mo-hinh-03',
    title:
      'Mô hình 03: Lưu trữ, chứng thực các giấy tờ tài liệu điện tử phục vụ người dân, doanh nghiệp tham gia môi trường số.',
    image: imgModal3,
    sections: [
      {
        title: 'Tổ chức thực hiện:',
        items: [
          'C06, TT RAR: Chủ trì phối hợp doanh nghiệp triển khai giải pháp.',
          'Bộ, ngành, địa phương: Thuê dịch vụ để tích hợp với hệ thống giải quyết TTHC.',
          'Thực hiện số hóa, chứng thực tài liệu điện tử cho công dân, tổ chức để lưu trữ điện tử trên ứng dụng của Bộ Công an, các ứng dụng số khác; tích hợp cổng DVC, 01 của tỉnh.',
          'Hiệu quả: Tạo kho giấy tờ, dữ liệu cá nhân; tái sử dụng giấy tờ trong thực hiện TTHC phục vụ dịch vụ công không giấy.'
        ]
      },
      {
        title: 'Căn cứ pháp lý',
        items: [
          'Theo nhu cầu, đề nghị của Tổ công tác tỉnh',
          'Thời gian: Theo đề xuất địa phương'
        ]
      },
      {
        title: 'Các bước thực hiện',
        items: [
          'Bước 1: Đánh giá giải pháp lưu trữ, chứng thực dữ liệu điện tử lựa chọn thuê, hoặc đầu tư.',
          'Bước 2: Triển khai tích hợp với các hệ thống giải quyết TTHC để dùng chung, tái sử dụng giấy tờ, dữ liệu điện tử khi giao dịch.',
          'Bước 3: Thực hiện số hóa, chứng thực tài liệu điện tử cho công dân, tổ chức để lưu trữ điện tử trên ứng dụng của Bộ Công an, các ứng dụng số khác.'
        ]
      },
      {
        title: 'Thiết bị',
        items: ['Mất kinh phí']
      },
      {
        title: 'Đơn vị triển khai',
        items: ['HTC SOFTWARE & RAR']
      },
      {
        title: 'Giải pháp',
        items: ['ID Pass - Xác thực căn cước công dân']
      },
      {
        title: 'Nền tảng công nghệ',
        items: ['Web server/Desktop App']
      }
    ]
  },
  // mô hình 04
  {
    id: 'mo-hinh-04',
    title: 'Mô hình 04: Triển khai cung cấp dịch vụ công trực tuyến trên VNeID',
    image: imgModal4,
    sections: [
      {
        title: 'Tổ chức thực hiện:',
        items: ['C06 chủ trì thực hiện']
      },
      {
        title: 'Căn cứ pháp lý',
        items: ['Theo Đề án 06', 'Dự kiến 30/8/2023']
      },
      {
        title: 'Các bước thực hiện',
        items: [
          'Bước 1: C06 triển khai tích hợp các DVC trực tuyến trên ứng dụng VNeID.',
          'Bước 2: Địa phương tuyên truyền người dân cài đặt sử dụng ứng dụng VNeID, tuyên truyền về việc trên ứng dụng VNeID đã có các DVC để người dân truy cập vào Vneid thực hiện các DVC trực tuyến.',
          'Bước 3: Đánh giá hiệu quả và phản ánh những vướng mắc khi thực hiện DVC trực tuyến trên VNeID.'
        ]
      },
      {
        title: 'Thiết bị',
        items: ['Mất kinh phí']
      },
      {
        title: 'Đơn vị triển khai',
        items: ['HTC SOFTWARE & RAR']
      },
      {
        title: 'Giải pháp',
        items: ['ID Pass - Xác thực căn cước công dân']
      },
      {
        title: 'Nền tảng công nghệ',
        items: ['Web server/Desktop App']
      }
    ]
  },
  // mô hình 05
  {
    id: 'mo-hinh-05',
    title:
      'Mô hình 05: Tự động hoá Trung tâm hành chính công thông qua tương tác Kiosk.',
    image: imgModal5,
    sections: [
      {
        title: 'Tổ chức thực hiện:',
        items: [
          'Cục C06: Chủ trì xây dựng và hỗ trợ tích hợp xác thực định danh bằng QR CCCD hoặc đọc thông tin từ thẻ chip trên CCCD; TT RAR cung cấp Kiosk.',
          'Văn phòng UBND, Sở TTTT tỉnh: Đẩu tư mua sắm thiết bị Kiosk và tổ chức triển khai vận hành trong hệ thống các Trung tâm hành chính công, bộ phận một cửa trên toàn tỉnh.',
          'Hiệu quả: Hỗ trợ tự động hóa Trung tâm hành chính công; giảm tiếp dân, hướng dân thực hiện; tiến tới cung cấp các dịch vụ nhận kết quả ngay trên kios.'
        ]
      },
      {
        title: 'Căn cứ pháp lý',
        items: [
          'Theo nhu cầu, đề nghị của Tổ công tác tỉnh',
          'Dự kiến thí điểm: tháng 09/2023 tại Huế'
        ]
      },
      {
        title: 'Các bước thực hiện',
        items: [
          'Bước 1: Sở thông tin và Truyền thông có văn bản gửi các đơn vị trên địa bàn để rá soát, đăng ký đề xuất các DVC không sử dụng hồ sơ giấy.',
          'Bước 2: Sở thông tin và Truyền thông tổng hợp kết quả và báo cáo, đề xuất Tổ trưởng Tổ công tác để tổ chức triển khai.',
          'Bước 3: Tái cấu trúc quy trình và sử dụng dữ liệu điện tử đã có. (liên hệ C06 để gửi bản mẫu các DVC có thể không sử dụng hồ sơ giấy để nghiên cứu, tham khảo áp dụng phù hợp cho địa bàn tỉnh)'
        ]
      },
      {
        title: 'Thiết bị',
        items: ['Mất kinh phí']
      },
      {
        title: 'Đơn vị triển khai',
        items: ['HTC SOFTWARE & RAR']
      },
      {
        title: 'Giải pháp',
        items: ['ID Pass - Xác thực căn cước công dân']
      },
      {
        title: 'Nền tảng công nghệ',
        items: ['1. Thông qua tương tác Kiosk ']
      }
    ]
  }
]

export default data
