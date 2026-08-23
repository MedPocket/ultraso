# Hướng Dẫn Phong Cách Viết & Trình Bày Tài Liệu Y Khoa

> **Dựa trên _Cẩm nang Phong cách AMA (AMA Manual of Style - Xuất bản lần thứ 11)_ và Tối ưu hóa cho nền tảng tài liệu siêu âm lâm sàng Ultraso (Blume Framework)**
> _Hướng dẫn toàn diện dành cho tác giả, người viết tài liệu kỹ thuật, biên tập viên và đội ngũ biên soạn nội dung y khoa, bài báo lâm sàng, hướng dẫn kỹ thuật siêu âm và trang web tài liệu Ultraso._

---

## Mục Lục

1. [Tổng Quan & Nguyên Tắc Cốt Lõi](#1-tổng-quan--nguyên-tắc-cốt-lõi)
2. [Cấu Trúc Bài Báo, Báo Cáo & Hướng Dẫn Siêu Âm Lâm Sàng](#2-cấu-trúc-bài-báo-báo-cáo--hướng-dẫn-siêu-âm-lâm-sàng)
   - [Các Loại Bài Báo Tiêu Chuẩn](#các-loại-bài-báo-tiêu-chuẩn)
   - [Định Dạng IMRAD & Cấu Trúc Bài Hướng Dẫn Siêu Âm](#định-dạng-imrad--cấu-trúc-bài-hướng-dẫn-siêu-âm)
   - [Tiêu Đề và Tiêu Đề Phụ](#tiêu-đề-và-tiêu-đề-phụ)
   - [Tóm Tắt (Có Cấu Trúc & Không Cấu Trúc)](#tóm-tắt-có-cấu-trúc--không-cấu-trúc)
3. [Tổ Chức Tập Tin, Sắp Xếp Trang & Tài Sản (Blume Platform)](#3-tổ-chức-tập-tin-sắp-xếp-trang--tài-sản-blume-platform)
   - [Tự Động Sắp Xếp Trang theo Tiền Tố Số](#tự-động-sắp-xếp-trang-theo-tiền-tố-số)
   - [Cấu Trúc meta.ts Tối Giản](#cấu-trúc-metats-tối-giản)
   - [Quản Lý Hình Ảnh & Đường Dẫn Tương Đối](#quản-lý-hình-ảnh--đường-dẫn-tương-đối)
4. [Thuật Ngữ Y Khoa & Ngôn Ngữ Tôn Trọng](#4-thuật-ngữ-y-khoa--ngôn-ngữ-tôn-trọng)
   - [Ngôn Ngữ Đặt Con Người Làm Trung Tâm](#ngôn-ngữ-đặt-con-người-làm-trung-tâm)
   - [Cách Dùng Từ Chuẩn Xác](#cách-dùng-từ-chuẩn-xác)
   - [Tên Thuốc & Thiết Bị Y Tế](#tên-thuốc--thiết-bị-y-tế)
   - [Danh Pháp Gen & Sinh Học](#danh-pháp-gen--sinh-học)
5. [Trình Bày Dữ Liệu, Báo Cáo Thống Kê & Trực Quan Hóa](#5-trình-bày-dữ-liệu-báo-cáo-thống-kê--trực-quan-hóa)
   - [Chỉ Số & Giá Trị Thống Kê](#chỉ-số--giá-trị-thống-kê)
   - [Giá Trị P và Khoảng Tin Cậy](#giá-trị-p-và-khoảng-tin-cậy)
   - [Bảng, Hình Ảnh, Callouts & Mermaid Flowcharts](#bảng-hình-ảnh-callouts--mermaid-flowcharts)
6. [Trích Dẫn & Tài Liệu Tham Khảo (AMA Lần Thứ 11)](#6-trích-dẫn--tài-liệu-tham-khảo-ama-lần-thứ-11)
   - [Trích Dẫn Trong Văn Bản](#trích-dẫn-trong-văn-bản)
   - [Định Dạng Danh Sách Tài Liệu Tham Khảo](#định-dạng-danh-sách-tài-liệu-tham-khảo)
   - [DOI và URL](#doi-và-url)
7. [Tiêu Chuẩn Đạo Đức & Tác Giả](#7-tiêu-chuẩn-đạo-đức--tác-giả)
   - [Tiêu Chí Định Danh Tác Giả (ICMJE)](#tiêu-chí-định-danh-tác-giả-icmje)
   - [Xung Đột Lợi Ích & Khai Báo](#xung-đột-lợi-ích--khai-báo)
   - [Bảo Mật Thông Tin Bệnh Nhân & Đồng Ý Tham Gia](#bảo-mật-thông-tin-bệnh-nhân--đồng-ý-tham-gia)
8. [Ngữ Pháp, Quy Tắc Trình Bày & Đơn Vị Đo Lường](#8-ngữ-pháp-quy-tắc-trình-bày--đơn-vị-đo-lường)
   - [Quy Tắc Viết Hoa & Định Dạng Chữ](#quy-tắc-viết-hoa--định-dạng-chữ)
   - [Dấu Câu & Quy Tắc Danh Sách](#dấu-câu--quy-tắc-danh-sách)
   - [Đơn Vị SI & Chữ Số](#đơn-vị-si--chữ-số)

---

## 1. Tổng Quan & Nguyên Tắc Cốt Lõi

Viết tài liệu y khoa và hướng dẫn siêu âm lâm sàng chất lượng cao đòi hỏi sự rõ ràng, chính xác, khách quan và tuân thủ nghiêm ngặt các tiêu chuẩn khoa học và đạo đức. Dù biên soạn báo cáo nghiên cứu, tài liệu kỹ thuật siêu âm hay nội dung giáo dục y khoa, hãy tuân thủ các nguyên tắc cốt lõi sau:

1. **Tính Chính Xác & Khả Năng Nâng Cao Định Tính (Tính Lặp Lại):** Đảm bảo mọi số liệu, thông số siêu âm, giá trị xét nghiệm và khẳng định khoa học có thể kiểm chứng và nhất quán giữa phần tóm tắt, văn bản chính, bảng biểu và hình ảnh.
2. **Rõ Ràng & Trực Tiếp:** Sử dụng câu từ rõ ràng, minh bạch. Ưu tiên thể chủ động khi thích hợp, tránh từ ngữ cầu kỳ/jargon, và giải thích từ viết tắt ở lần xuất hiện đầu tiên.
3. **Tính Bao Hàm & Khách Quan:** Tránh ngôn ngữ mang tính định kiến, gắn nhãn cá nhân theo bệnh lý hoặc điều kiện kinh tế xã hội, hoặc đưa ra kết luận nguyên nhân - kết quả đối với các nghiên cứu quan sát.
4. **Định Dạng Chuẩn Hóa:** Tuân thủ hướng dẫn của AMA lần thứ 11 về trích dẫn tài liệu tham khảo, biểu thức toán học, đơn vị đo lường và cấu trúc tài liệu.
5. **Tham Chiếu Tài Liệu Nền Tảng Blume:** Khi cần làm rõ quy cách định dạng MDX, hiển thị các thành phần hoặc cấu trúc giao diện, tham khảo trực tiếp tại [https://useblume.dev/docs](https://useblume.dev/docs).

---

## 2. Cấu Trúc Bài Báo, Báo Cáo & Hướng Dẫn Siêu Âm Lâm Sàng

### Các Loại Bài Báo Tiêu Chuẩn

| Thể Loại Bài Báo                         | Mục Đích / Phạm Vi                                                   | Độ Dài / Giới Hạn Tiêu Chuẩn | Yêu Cầu Chính                                                  |
| :--------------------------------------- | :------------------------------------------------------------------- | :--------------------------- | :------------------------------------------------------------- |
| **Báo Cáo Nghiên Cứu / Nghiên Cứu Gốc**  | Nghiên cứu thực nghiệm ban đầu (RCT, đoàn hệ, bệnh-chứng, chẩn đoán) | 3000–3500 từ                 | Tóm tắt có cấu trúc, định dạng IMRAD, bảng kiểm CONSORT/STROBE |
| **Tổng Quan Hệ Thống & Phân Tích Gộp**   | Tổng hợp bằng chứng toàn diện từ các cơ sở dữ liệu                   | 3000–3500 từ                 | Tóm tắt có cấu trúc, sơ đồ PRISMA, chiến lược tìm kiếm         |
| **Tổng Quan Mô Tả (Narrative Review)**   | Tổng quan chuyên gia về một chủ đề lâm sàng hoặc tổng hợp giáo dục   | 2000–3000 từ                 | Tóm tắt có hoặc không cấu trúc, tổng hợp dựa trên bằng chứng   |
| **Hướng Dẫn Kỹ Thuật / Mặt Cắt Siêu Âm** | Hướng dẫn kỹ thuật quét, quy trình siêu âm lâm sàng, mặt cắt chuẩn   | Linh hoạt                    | Tiêu đề rõ ràng, cấu trúc mặt cắt chuẩn hóa, hình ảnh minh họa |

### Định Dạng IMRAD & Cấu Trúc Bài Hướng Dẫn Siêu Âm

#### Định Dạng IMRAD (Dành cho Báo cáo Nghiên cứu)

Các báo cáo nghiên cứu thực nghiệm cần tuân thủ cấu trúc **IMRAD**:

- **Đặt Vấn Đề (Introduction):** Trình bày vấn đề lâm sàng, bối cảnh, khoảng trống kiến thức, và mục tiêu.
- **Phương Pháp (Methods):** Mô tả thiết kế nghiên cứu, đối tượng, quy trình siêu âm/xét nghiệm, và phân tích thống kê.
- **Kết Quả (Results):** Trình bày các phát hiện định lượng, thông số đo đạc, kích thước hiệu ứng và độ tin cậy.
- **Bàn Luận (Discussion):** Giải thích kết quả, so sánh với văn liệu, hạn chế nghiên cứu và ý nghĩa lâm sàng.

#### Cấu Trúc Chuẩn Hóa Bài Hướng Dẫn Siêu Âm Lâm Sàng Ultraso

Đối với các bài giảng hoặc hướng dẫn kỹ thuật siêu âm/mặt cắt lâm sàng, tuân thủ nghiêm ngặt các mục sau:

1. **Tổng quan và Chỉ định** (`## Tổng quan và Chỉ định`)
2. **Kỹ thuật và Chuẩn bị** (`## Kỹ thuật và Chuẩn bị`)
3. **Giải phẫu siêu âm bình thường** (`## Giải phẫu siêu âm bình thường`)
4. **Tiêu chuẩn chẩn đoán và Hình ảnh bệnh lý** (`## Tiêu chuẩn chẩn đoán` / `## Hình ảnh bệnh lý`)
5. **Xảo ảnh và Hạn chế** (`## Xảo ảnh và Hạn chế`)
6. **Tài liệu tham khảo** (`## Tài liệu tham khảo`)

### Tiêu Đề và Tiêu Đề Phụ

- **Súc Tích & Giàu Thông Tin:** Trình bày các thuật ngữ chính theo thứ tự logic: _Can thiệp/Kỹ thuật $\rightarrow$ Kết cục $\rightarrow$ Bệnh lý/Quần thể_.
- **Phân Cấp Tiêu Đề:**
  - H1 (`#`): Chỉ dùng cho tên bài viết (tự động tạo từ Frontmatter `title`).
  - H2 (`##`): Các mục chính.
  - H3 (`###`): Các sub-section phụ. Tuyệt đối **không sử dụng H5, H6**.
- **Tránh Ngôn Ngữ Nguyên Nhân - Kết Quả Trong Nghiên Cứu Quan Sát:** Dùng "Mối liên quan giữa..." thay vì "Tác động của...".

### Tóm Tắt (Có Cấu Trúc & Không Cấu Trúc)

Sử dụng Frontmatter `description` để tóm tắt 1 câu định hướng nội dung bài viết phục vụ SEO và hiển thị tổng quan. Đối với bài báo nghiên cứu, sử dụng tóm tắt có cấu trúc (tối đa 350 từ) gồm: _Bối Cảnh, Mục Tiêu, Thiết Kế, Can Thiệp, Biến Số Đầu Ra, Kết Quả, Kết Luận_.

---

## 3. Tổ Chức Tập Tin, Sắp Xếp Trang & Tài Sản (Blume Platform)

### Tự Động Sắp Xếp Trang theo Tiền Tố Số

Để giữ cho tài liệu luôn cập nhật và tự động sắp xếp theo thứ tự mong muốn:

- **Tiền tố số thứ tự:** Mọi file bài viết (`.md` / `.mdx`) trong các thư mục con dưới `docs/` bắt buộc phải được đánh số thứ tự dạng `01-`, `02-`, `03-`...
  - _Ví dụ:_ `docs/01-co-ban/01-vat-ly-sieu-am.mdx`, `docs/01-co-ban/02-modes.mdx`.
- **Tự động xử lý Slug/URL:** Blume tự động tách bỏ tiền tố số khi tạo URL route (ví dụ: `01-vat-ly-sieu-am.mdx` hiển thị tại `/co-ban/vat-ly-sieu-am`), đồng thời xếp thứ tự sidebar đúng theo chữ số.

### Cấu Trúc meta.ts Tối Giản

Tập tin `meta.ts` trong mỗi thư mục chỉ cấu hình thuộc tính của nhóm (title, icon, order, collapsed...), **tuyệt đối không khai báo mảng `pages`**:

```typescript
import { defineMeta } from "blume";

export default defineMeta({
  title: "Nguyên lý siêu âm cơ bản",
  icon: "book-open",
  order: 1,
  collapsed: true,
});
```

### Quản Lý Hình Ảnh & Đường Dẫn Tương Đối

- **Thư mục tài sản (`assets/`):** Lưu trữ toàn bộ hình ảnh trong thư mục `assets/` ở gốc dự án, mô phỏng theo cấu trúc thư mục của bài viết.
  - _Ví dụ:_ `assets/01-co-ban/vat-ly-sieu-am/tro-khang-am.png`
- **Đường dẫn tương đối:** Mọi liên kết hình ảnh và liên kết nội bộ phải dùng đường dẫn tương đối (bắt đầu bằng `./` hoặc `../`).

---

## 4. Thuật Ngữ Y Khoa & Ngôn Ngữ Tôn Trọng

### Ngôn Ngữ Đặt Con Người Làm Trung Tâm

Tránh định danh cá nhân bằng tình trạng bệnh lý, tuổi tác hoặc điều kiện kinh tế xã hội của họ.

| Thuật Ngữ Tránh Dùng                       | Thuật Ngữ Ưu Tiên Sử Dụng                      | Lý Do                                                                |
| :----------------------------------------- | :--------------------------------------------- | :------------------------------------------------------------------- |
| _bệnh nhân tiểu đường_, _người tiểu đường_ | _bệnh nhân mắc bệnh đái tháo đường_            | Ngôn ngữ lấy con người làm trung tâm tách biệt cá nhân khỏi bệnh tật |
| _người nghèo_, _người thất nghiệp_         | _người có thu nhập thấp_                       | Tránh gắn nhãn quần thể                                              |
| _con nghiện_, _người nghiện rượu_          | _người rối loạn sử dụng chất_                  | Loại bỏ ngôn ngữ kỳ thị                                              |
| _điều trị thất bại trên bệnh nhân_         | _phương pháp điều trị không mang lại hiệu quả_ | Bệnh nhân không thất bại; phương pháp điều trị mới là thứ thất bại   |

### Cách Dùng Từ Chuẩn Xác

- **chăm sóc sức khỏe:** Viết thành hai từ riêng biệt, không dùng dấu nối (_hệ thống chăm sóc sức khỏe_).
- **email / internet / website:** Viết thường, không có dấu nối.
- **tai biến mạch máu não vs đột quỵ:** Ưu tiên dùng _đột quỵ_ hoặc _hội chứng đột quỵ_.

### Tên Thuốc & Thiết Bị Y Tế

1. **Tên Biệt Dược / Tên Tên Dược:** Luôn ưu tiên tên gốc phi thương mại chính thức (USAN hoặc INN), viết bằng chữ thường và in nghiêng (ví dụ: _paracetamol_, _pembrolizumab_, _lidocain_).
2. **Gốc Muối:** Bỏ gốc muối ngoại trừ trường hợp bắt buộc (dùng _ampicillin_, không dùng _ampicillin sodium_).

### Danh Pháp Gen & Sinh Học

- **Ký Hiệu Gen vs Protein:**
  - Ký hiệu gen: _In nghiêng_ (ví dụ: _BRCA1_, _EGFR_).
  - Ký hiệu protein: In đứng (không nghiêng) (ví dụ: BRCA1, EGFR).
- **Danh Pháp Sinh Vật:** In nghiêng tên chi và loài (_Staphylococcus aureus_, _Escherichia coli_). Sau lần đề cập đầu tiên, viết tắt tên chi (_S aureus_, _E coli_).

---

## 5. Trình Bày Dữ Liệu, Báo Cáo Thống Kê & Trực Quan Hóa

### Chỉ Số & Giá Trị Thống Kê

1. **Thống Kê Mô Tả:**
   - **Dữ Liệu Phân Phối Chuẩn:** Trình bày dạng **Trung bình (Độ lệch chuẩn / SD)**.
   - **Dữ Liệu Không Phân Phối Chuẩn:** Trình bày dạng **Trung vị (Khoảng tứ phân vị / IQR)**.
2. **Độ Chính Xác & Làm Tròn:** Phần trăm lấy 1 chữ số thập phân (`24.5%`). Báo cáo kích thước mẫu dưới dạng số nguyên (`n = 150`).

### Giá Trị P và Khoảng Tin Cậy

- **Định Dạng Giá Trị P:**
  - Ký hiệu _P_ luôn viết hoa và in nghiêng (_P_).
  - Không viết số 0 trước dấu thập phân đối với giá trị _P_: viết **_P_ = .003**, **_P_ < .001**.
- **Báo cáo kèm Kích thước Hiệu ứng & CI:**
  - _Đúng:_ _Giảm 3.2% tỷ lệ tái nhập viện (95% CI, 1.1%-5.3%; P = .004)._

### Bảng, Hình Ảnh, Callouts & Mermaid Flowcharts

1. **Chú thích bắt buộc:**
   - Hình ảnh: Đặt ngay bên dưới/trên ảnh, viết nghiêng trong ngoặc kép: `_Hình "Mặt cắt dọc động mạch chủ bụng thượng vị"._`
   - Bảng biểu: Đặt ngay phía trên bảng, viết nghiêng trong ngoặc kép: `_Bảng "Tiêu chuẩn chẩn đoán phình động mạch chủ bụng"._`
2. **Hộp thông tin nổi bật (Blume Asides):**
   - `:::note`: Ghi chú, định nghĩa, giá trị bình thường.
   - `:::tip`: Mẹo lâm sàng, thao tác đầu dò tối ưu hình ảnh.
   - `:::caution`: Cảnh báo xảo ảnh, sai sót chẩn đoán thường gặp.
   - `:::danger`: Dấu hiệu đỏ nguy kịch đe dọa tính mạng (vd: dọa vỡ phình ĐMC).
3. **Sơ đồ luồng (Flowcharts):** Vẽ bằng khối mã **Mermaid** thay vì ASCII art.

---

## 6. Trích Dẫn & Tài Liệu Tham Khảo (AMA Lần Thứ 11)

### Trích Dẫn Trong Văn Bản

- Sử dụng chữ số Ả Rập ở dạng chỉ số trên (`<sup>1</sup>`, `<sup>2,3</sup>`, `<sup>4-7</sup>`) đặt **bên ngoài** dấu chấm/dấu phẩy.

### Định Dạng Danh Sách Tài Liệu Tham Khảo

Liệt kê 6 tác giả đầu tiên, nếu có từ 7 tác giả trở lên, thêm "et al." sau tác giả thứ 6.

1. **Bài Báo Tạp Chí:**
   Tác giả. Tiêu đề bài báo. _Tên Tạp Chí Viết Tắt_. Năm;Tập(Số):Trang. https://doi.org/10.xxxx/xxxx
2. **Sách:**
   Tác giả/Biên tập viên. _Tiêu Đề Sách_. Tái bản lần thứ. Nhà xuất bản; Năm.
3. **Tài Liệu Hướng Dẫn/Quy Trình:**
   Bộ Y tế Việt Nam (2020) - _Hướng dẫn quy trình kỹ thuật chuyên ngành Siêu âm_.

---

## 7. Tiêu Chuẩn Đạo Đức & Tác Giả

- **Tiêu Chí Tác Giả (ICMJE):** Tác giả phải đóng góp quan trọng vào ý tưởng/thiết kế, viết/sửa đổi bản thảo, chấp thuận xuất bản và chịu trách nhiệm nội dung.
- **An Danh Hóa Bệnh Nhân:** Loại bỏ tất cả thông tin định danh bệnh nhân (tên, số bệnh án) khỏi văn bản, bảng và hình ảnh siêu âm.

---

## 8. Ngữ Pháp, Quy Tắc Trình Bày & Đơn Vị Đo Lường

### Quy Tắc Viết Hoa & Định Dạng Chữ

- **In đậm:** Chỉ in đậm cụm từ/số liệu mấu chốt (`**< 3 cm**`). Không in đậm cả câu.
- **Eponyms:** Bỏ sở hữu cách đối với tên eponyms (dùng _bệnh Alzheimer_, _bệnh Parkinson_).

### Dấu Câu & Quy Tắc Danh Sách

- **Danh sách không thứ tự (`-`) / Có thứ tự (`1.`):**
  - Viết hoa chữ cái đầu tiên của mỗi mục.
  - **Luôn kết thúc bằng dấu chấm `.`** cho mọi mục.
  - Thụt đầu dòng 2 khoảng trắng cho cấp con (lồng tối đa 2 cấp).

### Đơn Vị SI & Chữ Số

- **Đơn vị SI:** Có khoảng trắng giữa chữ số và đơn vị: `5 MHz`, `10 cm`, `37.5 °C`, `60 cm/s`.
- **Phần trăm:** Viết liền chữ số và dấu `%`: `50%`.
- **Chữ số:** Sử dụng chữ số cho mọi đơn vị đo lường, tuổi, thời gian, phần trăm hoặc thống kê. Viết bằng chữ khi số đứng ở đầu câu.
