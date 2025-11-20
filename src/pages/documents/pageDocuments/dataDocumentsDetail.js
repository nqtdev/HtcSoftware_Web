// {
//   id: '',
//   title: '',
//   SoKyHieu: '',
//   NgayBanHanh: '',
//   LoaiVanBan: '',
//   CoQuanBanHanh: '',
//   NguoiKy: '',
//   TrichYeu: '',
//   TaiLieu: '/documents/ten-file.pdf',
// }

const data = [
  {
    id: '1',
    title:
      'Nghị quyết số 06/NQ-CP của Chính phủ: Về phát triển thị trường lao động linh hoạt, hiện đại, hiệu quả, bền vững và hội nhập nhằm phục hồi nhanh kinh tế - xã hội',
    SoKyHieu: 'Số 06/NQ-CP',
    NgayBanHanh: '10-01-2023',
    NgayHieuLuc: '10-01-2023',
    LoaiVanBan: 'Nghị quyết',
    CoQuanBanHanh: 'Chính Phủ',
    NguoiKy: 'Phạm Minh Chính',
    TrichYeu:
      'Về phát triển thị trường lao động linh hoạt, hiện đại, hiệu quả, bền vững và hội nhập nhằm phục hồi nhanh kinh tế - xã hội',
    TaiLieu: '/documents/Nghi_Quyet_06_NQCP.pdf',
  },
  {
    id: '2',
    title:
      'Nghị quyết số 57/NQ-TW của Bộ Chính Trị: Về đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo chuyển đổi số quốc gia',
    SoKyHieu: 'Số 57/NQ-TW',
    NgayBanHanh: '22-12-2024',
    NgayHieuLuc: '22-12-2024',
    LoaiVanBan: 'Nghị quyết',
    CoQuanBanHanh: 'Bộ Chính Trị',
    NguoiKy: 'Tô Lâm',
    TrichYeu:
      'Về đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia',
    TaiLieu: '/documents/Nghi_Quyet_57_NQTW.pdf',
  },
  {
    id: '3',
    title:
      'Nghị quyết số 68/NQ-CP, ngày 9/5/2024 của Chính phủ ban hành Chương trình hành động của Chính phủ thực hiện Nghị quyết số 42-NQ/TW ngày 24/11/2023, Hội nghị lần thứ tám Ban chấp hành Trung ương Đảng khóa XIII về tiếp tục đổi mới, nâng cao chất lượng chính sách xã hội, đáp ứng yêu cầu sự nghiệp xây dựng và bảo vệ Tổ quốc trong giai đoạn mới',
    SoKyHieu: 'Số 68/NQ-CP',
    NgayBanHanh: '09-05-2024',
    NgayHieuLuc: '09-05-2024',
    LoaiVanBan: 'Nghị quyết',
    CoQuanBanHanh: 'Chính Phủ',
    NguoiKy: 'Trần Hồng Hà',
    TrichYeu:
      'Ban hành Chương trình hành động của Chính phủ thực hiện Nghị quyết số 42-NQ/TW ngày 24/11/2023, Hội nghị lần thứ tám Ban chấp hành Trung ương Đảng khóa XIII về tiếp tục đổi mới, nâng cao chất lượng chính sách xã hội, đáp ứng yêu cầu sự nghiệp xây dựng và bảo vệ Tổ quốc trong giai đoạn mới',
    TaiLieu: '/documents/Nghi_Quyet_68_NQCP.pdf',
  },
  {
    id: '4',
    title:
      'Nghị quyết số 66/NQ-CP, Nghị quyết ban hành Chương trình hành động của Chính phủ thực hiện Nghị quyết số 41-NQ/TW ngày 10 tháng 10 năm 2023 của Bộ Chính trị về xây dựng và phát huy vai trò của đội ngũ doanh nhân Việt Nam trong thời kỳ mới',
    SoKyHieu: 'Số 66/NQ-CP',
    NgayBanHanh: '09-05-2024',
    NgayHieuLuc: '09-05-2024',
    LoaiVanBan: 'Nghị quyết',
    CoQuanBanHanh: 'Chính Phủ',
    NguoiKy: 'Lê Minh Khái',
    TrichYeu:
      'Ban hành Chương trình hành động của Chính phủ thực hiện Nghị quyết số 41-NQ/TW ngày 10/10/2023 của Bộ Chính trị về xây dựng và phát huy vai trò của đội ngũ doanh nhân Việt Nam trong thời kỳ mới',
    TaiLieu: '/documents/Nghi_Quyet_66_NQCP.pdf',
  },
  {
    id: '5',
    title:
      'Nghị quyết số 71/NQ-CP, Nghị quyết sửa đổi, bổ sung cập nhật Chương trình hành động của Chính phủ thực hiện Nghị quyết số 57-NQ/TW ngày 22 tháng 12 năm 2024 của Bộ Chính trị về đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia',
    SoKyHieu: 'Số 71/NQ-CP',
    NgayBanHanh: '01-04-2025',
    NgayHieuLuc: '01-04-2025',
    LoaiVanBan: 'Nghị quyết',
    CoQuanBanHanh: 'Chính Phủ',
    NguoiKy: 'Phạm Minh Chính',
    TrichYeu:
      'Nghị quyết sửa đổi, bổ sung cập nhật Chương trình hành động của Chính phủ thực hiện Nghị quyết số 57-NQ/TW ngày 22 tháng 12 năm 2024 của Bộ Chính trị về đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia',
    TaiLieu: '/documents/Nghi_Quyet_71_NQCP.pdf',
  },
  {
    id: '6',
    title:
      'Nghị quyết số 81/2025/UBTVQH15 của ỦY BAN THƯỜNG VỤ QUỐC HỘI: Thành lập Tòa án nhân dân cấp tỉnh, Tòa án nhân dân khu vực; quy định phạm vi thẩm quyền theo lãnh thổ của Tòa án nhân dân cấp tỉnh, Tòa án nhân dân khu vực',
    SoKyHieu: '81/2025/UBTVQH15',
    NgayBanHanh: '27-06-2025',
    NgayHieuLuc: '01-07-2025',
    LoaiVanBan: 'Nghị quyết',
    CoQuanBanHanh: 'ỦY BAN THƯỜNG VỤ QUỐC HỘI',
    NguoiKy: 'Trần Thanh Mẫn',
    TrichYeu:
      'Thành lập Tòa án nhân dân cấp tỉnh, Tòa án nhân dân khu vực; quy định phạm vi thẩm quyền theo lãnh thổ của Tòa án nhân dân cấp tỉnh, Tòa án nhân dân khu vực',
    TaiLieu: '/documents/Nghi_Quyet_81_NQUBTVQH.pdf',
  },
  {
    id: '7',
    title:
      'Nghị quyết số 193/2025/QH15 của Quốc hội: Về thí điểm một số cơ chế, chính sách đặc biệt tạo đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia',
    SoKyHieu: '193/2025/QH15',
    NgayBanHanh: '19-02-2025',
    NgayHieuLuc: '19-02-2025',
    LoaiVanBan: 'Nghị quyết',
    CoQuanBanHanh: 'Quốc hội',
    NguoiKy: 'Trần Thanh Mẫn',
    TrichYeu:
      'Về thí điểm một số cơ chế, chính sách đặc biệt tạo đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia',
    TaiLieu: '/documents/Nghi_Quyet_193_NQQH.pdf',
  },
  {
    id: '8',
    title:
      'Nghị định số 88/2025/NĐ-CP của Chính phủ: Quy định chi tiết và hướng dẫn một số điều của Nghị quyết số 193/2025/QH15 ngày 19 tháng 02 năm 2025 của Quốc hội về thí điểm một số cơ chế, chính sách đặc biệt tạo đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia',
    SoKyHieu: '88/2025/NĐ-CP',
    NgayBanHanh: '13-04-2025',
    NgayHieuLuc: '13-04-2025',
    LoaiVanBan: 'Nghị định',
    CoQuanBanHanh: 'Chính Phủ',
    NguoiKy: 'Nguyễn Chí Dũng',
    TrichYeu:
      'Quy định chi tiết và hướng dẫn một số điều của Nghị quyết số 193/2025/QH15 ngày 19 tháng 02 năm 2025 của Quốc hội về thí điểm một số cơ chế, chính sách đặc biệt tạo đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia',
    TaiLieu: '/documents/Nghi_Dinh_88_NĐCP.pdf',
  },
  {
    id: '9',
    title: 'Nghị định số 59/2022/NĐ-CP của Chính phủ: Quy định về định danh và xác thực điện tử',
    SoKyHieu: '59/2022/NĐ-CP',
    NgayBanHanh: '05-09-2022',
    NgayHieuLuc: '20-10-2022',
    LoaiVanBan: 'Nghị định',
    CoQuanBanHanh: 'Chính Phủ',
    NguoiKy: 'Phạm Minh Chính',
    TrichYeu: 'Quy định về định danh và xác thực điện tử',
    TaiLieu: '/documents/Nghi_Dinh_59_NĐCP.pdf',
  },
  {
    id: '10',
    title: 'Nghị định số 69/2024/NĐ-CP của Chính phủ: Quy định về định danh và xác thực điện tử',
    SoKyHieu: '69/2024/NĐ-CP',
    NgayBanHanh: '25-06-2024',
    NgayHieuLuc: '01-07-2024',
    LoaiVanBan: 'Nghị định',
    CoQuanBanHanh: 'Chính Phủ',
    NguoiKy: 'Trần Lưu Quang',
    TrichYeu: 'Quy định về định danh và xác thực điện tử',
    TaiLieu: '/documents/Nghi_Dinh_69_NĐCP.pdf',
  },
]

export default data
