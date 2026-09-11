const baseUrl = import.meta.env.VITE_PUBLIC_APP_URL || 'https://htcsoftware.vn'

export const seoConfig = {
  default: {
    title: 'HTC Software - Giải pháp Chuyển đổi số & Định danh điện tử',
    tabTitle: 'HTC Software - Giải pháp Chuyển đổi số & Định danh điện tử',
    description:
      'Công ty Cổ phần Giải pháp Phần mềm HTC - Đơn vị tiên phong cung cấp giải pháp RAR eKYC, RAR VNeID, thiết bị đọc thẻ CCCD gắn chip CheckID và mô hình Đề án 06.',
    image: '/logo_sw.webp',
    url: `${baseUrl}`,
    keywords: [
      'htc software',
      'phần mềm htc',
      'công ty htc software',
      'giải pháp eid',
      'định danh điện tử',
      'xác thực danh tính điện tử',
      'giải pháp ekyc',
      'rar ekyc platform',
      'rar vneid platform',
      'htc ekyc platform',
      'checkid',
      'checkid-sr',
      'checkid-et100',
      'checkid-r301',
      'checkid-hn212',
      'meta eye',
      'xác thực cccd gắn chip',
      'đề án 06',
      'định danh điện tử bộ công an',
    ],
    openGraph: {
      title: 'HTC Software - Giải pháp Chuyển đổi số & Định danh điện tử',
      description:
        'Bộ giải pháp định danh điện tử, xác thực CCCD gắn chip và chuyển đổi số toàn diện cho doanh nghiệp, cơ quan nhà nước và ngân hàng.',
      url: `${baseUrl}`,
      siteName: 'HTC Software',
      image: {
        url: '/logo_sw.webp',
        alt: 'HTC Software - Giải pháp Chuyển đổi số & Định danh điện tử',
        width: 1200,
        height: 630,
      },
      locale: 'vi_VN',
      phoneNumber: '0708896666',
      email: 'kinhdoanh@htcsoftware.vn',
      type: 'website',
      countryName: 'Vietnam',
    },
    alternates: {
      canonical: `${baseUrl}`,
    },
    metadataBase: new URL(`${baseUrl}`),
  },

  '/': {
    title: 'HTC Software - Giải pháp Chuyển đổi số & Định danh điện tử',
    tabTitle: 'Trang Chủ',
    description:
      'Công ty Cổ phần Giải pháp Phần mềm HTC - Đơn vị tiên phong cung cấp giải pháp RAR eKYC, RAR VNeID, thiết bị đọc thẻ CCCD gắn chip CheckID và mô hình Đề án 06.',
    keywords: 'htc software, trang chu htc software, giai phap ekyc, xac thuc cccd',
    image: '/logo_sw.webp',
    url: `${baseUrl}`,
  },

  // Giải pháp
  '/solution/RarEkycPlatform': {
    title: 'RAR eKYC Platform - Xác thực CCCD gắn chip & eID Bộ Công An',
    tabTitle: 'RAR eKYC Platform - eID',
    description:
      'Nền tảng RAR eKYC Platform kết nối cơ sở dữ liệu quốc gia về dân cư, xác thực căn cước công dân gắn chip chuẩn Bộ Công An.',
    keywords: 'rar ekyc, rar ekyc platform, eid bộ công an, xác thực cccd gắn chip, htc software',
    image: '/logo_sw.webp',
    url: `${baseUrl}/solution/RarEkycPlatform`,
  },

  '/solution/RarVNeidPlatform': {
    title: 'RAR VNeID Platform - Giải pháp Định danh qua ứng dụng VNeID',
    tabTitle: 'RAR VNeID Platform - VNeID',
    description:
      'Nền tảng RAR VNeID Platform kết nối và xác thực tài khoản định danh điện tử của công dân qua VNeID nhanh chóng và an toàn.',
    keywords: 'rar vneid, vneid platform, định danh vneid, xác thực vneid, htc software',
    image: '/logo_sw.webp',
    url: `${baseUrl}/solution/RarVNeidPlatform`,
  },

  '/solution/HtcEkycPlatform': {
    title: 'HTC eKYC Platform - Định danh khách hàng điện tử toàn diện',
    tabTitle: 'HTC eKYC Platform',
    description:
      'Nền tảng HTC eKYC Platform tích hợp công nghệ OCR bóc tách dữ liệu, Face Matching và kiểm tra thực thể sống Liveness Check chuẩn quốc tế.',
    keywords: 'htc ekyc, ekyc platform, sinh trắc học khuôn mặt, ocr cccd, liveness check',
    image: '/logo_sw.webp',
    url: `${baseUrl}/solution/HtcEkycPlatform`,
  },

  // Thiết bị / Sản phẩm
  '/products/checkID-SR': {
    title: 'CheckID-SR - Thiết bị đọc và quét thẻ CCCD 2 mặt tự động',
    tabTitle: 'CheckID-SR - Thiết bị đọc thẻ scan 2 mặt',
    description:
      'Thiết bị CheckID-SR quét hình ảnh 2 mặt CCCD và đọc chip đồng thời, đối soát thông tin thẻ chính xác và bảo mật tuyệt đối.',
    keywords: 'checkid-sr, máy quét cccd, quét thẻ cccd 2 mặt, đầu đọc cccd gắn chip',
    image: '/logo_sw.webp',
    url: `${baseUrl}/products/checkID-SR`,
  },

  '/products/checkID-ET100': {
    title: 'CheckID-ET100 - Thiết bị đọc thẻ CCCD dạng Tablet thông minh',
    tabTitle: 'CheckID-ET100 - Thiết bị đọc thẻ Tablets',
    description:
      'CheckID-ET100 là thiết bị đọc thẻ CCCD gắn chip chuyên dụng tích hợp màn hình cảm ứng tablet, camera sinh trắc học và phần mềm xác thực.',
    keywords: 'checkid-et100, tablet đọc cccd, máy đọc cccd để bàn, thiết bị xác thực cccd',
    image: '/logo_sw.webp',
    url: `${baseUrl}/products/checkID-ET100`,
  },

  '/products/checkID-R301': {
    title: 'CheckID-R301 - Thiết bị đọc thẻ CCCD nhỏ gọn kết nối USB',
    tabTitle: 'CheckID-R301 - Thiết bị đọc thẻ nhỏ gọn nhất',
    description:
      'CheckID-R301 với thiết kế siêu nhỏ gọn, đọc chip thẻ căn cước nhanh chóng, dễ dàng cắm và sử dụng trên mọi hệ điều hành máy tính.',
    keywords: 'checkid-r301, đầu đọc cccd usb, máy đọc thẻ cccd nhỏ gọn, r301',
    image: '/logo_sw.webp',
    url: `${baseUrl}/products/checkID-R301`,
  },

  '/products/checkID-HN212': {
    title: 'CheckID-HN212 - Thiết bị đọc thẻ CCCD gắn chip đa năng tiện lợi',
    tabTitle: 'CheckID-HN212 - Thiết bị đọc thẻ tiện lợi',
    description:
      'CheckID-HN212 mang lại giải pháp đọc thẻ CCCD hiệu suất cao, vận hành bền bỉ và thuận tiện cho quầy giao dịch, bệnh viện, trường học.',
    keywords: 'checkid-hn212, thiết bị đọc cccd, đầu đọc thẻ chip hn212, cccd gắn chip',
    image: '/logo_sw.webp',
    url: `${baseUrl}/products/checkID-HN212`,
  },

  '/products/meta-eye': {
    title: 'Meta eYe - Thiết bị thực tế ảo tăng cường thế hệ mới',
    tabTitle: 'Meta eYe - Thiết bị thực tế ảo tăng cường',
    description:
      'Meta eYe mang công nghệ đột phá Meta Reality, camera màu Passthrough và vi xử lý Qualcomm Snapdragon XR2 Gen 2 cho trải nghiệm AR/VR vượt bậc.',
    keywords: 'meta eye, thực tế ảo tăng cường, kính ar vr, thiet bi thuc te ao',
    image: '/logo_sw.webp',
    url: `${baseUrl}/products/meta-eye`,
  },

  // Tin tức - Tài liệu
  '/newDocuments/tin-tuc': {
    title: 'Tin tức & Sự kiện | HTC Software',
    tabTitle: 'Tin tức & Sự kiện',
    description:
      'Cập nhật các tin tức mới nhất về chuyển đổi số quốc gia, an toàn dữ liệu, định danh điện tử eID và các sự kiện công nghệ của HTC Software.',
    keywords: 'tin tức htc software, tin tức công nghệ, định danh điện tử, sự kiện htc',
    image: '/logo_sw.webp',
    url: `${baseUrl}/newDocuments/tin-tuc`,
  },

  '/newDocuments/tai-lieu': {
    title: 'Văn bản & Tài liệu pháp luật | HTC Software',
    tabTitle: 'Văn bản & Tài liệu pháp luật',
    description:
      'Tổng hợp các văn bản pháp quy, nghị quyết của Chính phủ, nghị định, thông tư liên quan đến Đề án 06, chuyển đổi số và định danh xác thực điện tử.',
    keywords: 'văn bản đề án 06, nghị quyết chuyển đổi số, tài liệu pháp luật, căn cứ pháp lý',
    image: '/logo_sw.webp',
    url: `${baseUrl}/newDocuments/tai-lieu`,
  },

  // Mô hình Đề án 06
  '/mo-hinh': {
    title: 'Mô hình triển khai dịch vụ',
    tabTitle: 'Mô hình triển khai dịch vụ',
    description:
      'Danh sách các mô hình triển khai dịch vụ công, xác thực căn cước công dân gắn chip và chuyển đổi số theo Đề án 06 của Chính phủ.',
    keywords: 'mô hình đề án 06, 43 mô hình đề án 06, mô hình dịch vụ công, xác thực cccd',
    image: '/logo_sw.webp',
    url: `${baseUrl}/mo-hinh`,
  },
}
