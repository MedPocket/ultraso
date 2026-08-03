# Hướng dẫn viết tài liệu (STYLEGUIDE.md)

Tài liệu này quy định các nguyên tắc, chuẩn mực về nội dung, định dạng và cấu trúc cho toàn bộ dự án tài liệu siêu âm lâm sàng **Ultraso**. Hướng dẫn này đảm bảo sự chính xác y khoa, tính thống nhất tuyệt đối trong trình bày, tối ưu hóa khả năng hiển thị trên nền tảng Blume và mang lại trải nghiệm đọc tốt nhất cho nhân viên y tế, bác sĩ lâm sàng và học viên.

---

## 1. Nguyên tắc chung (General Principles)

- **Độ chính xác Y khoa:** Mọi thông tin, kỹ thuật quét, dấu hiệu siêu âm và tiêu chuẩn chẩn đoán lâm sàng phải dựa trên các nguồn bằng chứng khoa học và khuyến cáo uy tín (Bộ Y tế Việt Nam, AIUM, ISUOG, WFUMB, ACR, v.v.). Ưu tiên số liệu định lượng cụ thể, có nguồn gốc rõ ràng.
- **Tính khách quan và Chuyên nghiệp:** Sử dụng giọng văn trung tính, khoa học, nghiêm túc. Tránh biểu đạt cảm xúc cá nhân hoặc sử dụng các từ mang tính chủ quan cảm tính (ví dụ: "rất nguy hiểm", "vô cùng tồi tệ", "khủng khiếp").
- **Tính súc tích và Rõ ràng:** Viết ngắn gọn, đi thẳng vào vấn đề lâm sàng và kỹ thuật siêu âm. Sử dụng các câu chủ động, ngắn gọn, tránh lặp từ và các cách diễn đạt dài dòng không cần thiết.
- **Độc giả mục tiêu:** Tài liệu được thiết kế cho bác sĩ lâm sàng, học viên siêu âm, bác sĩ nội trú, sinh viên y khoa và những người có kiến thức y khoa nền tảng. Khi sử dụng các thuật ngữ chuyên sâu, cần đảm bảo tính chính xác và rõ ràng.

---

## 2. Định dạng văn bản (Formatting & Typography)

### In đậm (Bold)

Sử dụng định dạng in đậm (`**văn bản**`) một cách có chọn lọc để làm nổi bật các **từ khóa quan trọng**, các **ngưỡng số liệu siêu âm/lâm sàng có ý nghĩa**, hoặc **chỉ định/chống chỉ định mấu chốt**.

- **Quy tắc:** Chỉ in đậm cụm từ hoặc số liệu cụ thể. **Không** in đậm toàn bộ câu hoặc cả dòng dài.
- _Đúng:_ Đường kính động mạch chủ bụng bình thường là **< 3 cm**.
- _Sai:_ **Đường kính động mạch chủ bụng bình thường là < 3 cm.**

### In nghiêng (Italic)

Sử dụng định dạng in nghiêng (`_văn bản_` hoặc `*văn bản*`) cho các trường hợp cụ thể sau:

1. **Thuật ngữ tiếng Anh lâm sàng hoặc từ viết tắt quốc tế** đặt trong ngoặc đơn ở lần xuất hiện đầu tiên:
   - _Ví dụ:_ Siêu âm tại giường (_Point-of-Care Ultrasound_ - POCUS).
2. **Tên khoa học của tác nhân vi sinh** (vi khuẩn, virus, nấm...):
   - _Ví dụ:_ _Escherichia coli_, _Staphylococcus aureus_.
3. **Tên hoạt chất/tên thuốc gốc** (generic name) dạng chữ thường:
   - _Ví dụ:_ _lidocain_, _paracetamol_, _gel siêu âm_.
4. **Tên sách, chương sách hoặc hướng dẫn điều trị**:
   - _Ví dụ:_ _Rumack's Diagnostic Ultrasound_, _Phác đồ điều trị Siêu âm_.
5. **Chú thích bên dưới hình ảnh hoặc bảng biểu**:
   - _Ví dụ:_ _Hình "Mặt cắt dọc động mạch chủ bụng"._, _Bảng "Phân loại mức độ hẹp động mạch cảnh"._

### Quy tắc Danh sách (Lists)

Để đảm bảo tính mạch lạc và song song về mặt ngữ pháp, cấu trúc danh sách phải tuân thủ nghiêm ngặt các quy tắc sau:

#### Danh sách không thứ tự (Unordered List)

Sử dụng dấu gạch ngang `-` cho các ý ngang hàng.

- **Ký tự đầu dòng:** Luôn viết hoa chữ cái đầu tiên của mỗi mục.
- **Cấu trúc song song (Parallel Structure):** Các mục trong cùng một danh sách phải đồng nhất về cấu trúc ngữ pháp (ví dụ: tất cả đều bắt đầu bằng danh từ, động từ, hoặc đều là câu hoàn chỉnh).
- **Dấu kết thúc câu:** **Luôn kết thúc bằng dấu chấm `.`** cho tất cả các mục (kể cả cụm từ ngắn hay câu hoàn chỉnh) để đảm bảo tính nhất quán tuyệt đối.
- **Danh sách lồng nhau (Nested lists):** Thụt đầu dòng đúng **2 khoảng trắng (spaces)** so với cấp cha. Hạn chế lồng quá 2 cấp.

**Ví dụ:**

```md
### Tiêu chuẩn kỹ thuật của mặt cắt

- Đặt đầu dò ở vùng thượng vị theo mặt cắt dọc.
- Thấy rõ động mạch chủ bụng phân nhánh động mạch thân tạng.
- Đo đường kính ngoài-ngoài của thành mạch.
```

#### Danh sách có thứ tự (Ordered List)

Sử dụng `1.`, `2.`, `3.` khi trình bày quy trình, các bước thực hiện theo trình tự thời gian, hoặc các mức độ ưu tiên giảm dần.

- Quy tắc viết hoa đầu dòng và dấu chấm kết thúc tương tự danh sách không thứ tự.

**Ví dụ:**

```md
### Quy trình quét siêu âm vùng thượng vị

1. Đặt bệnh nhân ở tư thế nằm ngửa, hít sâu và nín thở.
2. Thoa lượng gel siêu âm vừa đủ lên vùng thượng vị.
3. Đặt đầu dò Convex ở vùng thượng vị theo mặt cắt dọc để định vị động mạch chủ bụng.
```

---

## 3. Kí hiệu, Kí tự đặc biệt & Đo lường

### Kí hiệu toán học và Đơn vị đo lường

- **Phép so sánh:** Luôn thêm **một khoảng trắng** xung quanh các toán tử so sánh (`>`, `<`, `≥`, `≤`, `=`). Sử dụng kí hiệu chuẩn thay vì gõ dạng kí tự ghép.
  - _Đúng:_ `> 3 cm`, `≤ 5 mm`, `≥ 60 cm/s`.
  - _Sai:_ `>3 cm`, `≤5mm`, `>= 60cm/s`.
- **Đơn vị đo lường:** Luôn có **một khoảng trắng** giữa số lượng và đơn vị đo lường.
  - _Đúng:_ 5 MHz, 10 cm, 37 °C, 60 cm/s.
  - _Sai:_ 5MHz, 10cm, 37°C.
- **Phần trăm:** Viết liền chữ số và dấu phần trăm `%` (không có khoảng trắng).
  - _Đúng:_ 50%, 95% CI.
  - _Sai:_ 50 %.
- **Khoảng giá trị (Ranges):** Dùng dấu gạch nối `-` (hyphen) không có khoảng trắng hoặc dùng từ "đến".
  - _Đúng:_ 2 - 5 MHz, 5 đến 10 cm.
  - _Sai:_ 2- 5 MHz, 2-5MHz.

### Quy tắc viết chữ số và chữ

**Các trường hợp bắt buộc/khuyên dùng chữ:**

- **Số đứng ở đầu câu:** Bắt buộc viết bằng chữ và viết hoa chữ cái đầu (ví dụ: "Ba bệnh nhân...", "Năm tần số đầu dò...").
- **Các số nhỏ đại diện cho số lượng:** Trong văn mô tả, văn xuôi, giao tiếp thông thường (thường là từ 1 đến 9, ví dụ: "quét siêu âm ở ba mặt cắt chính").
- **Các cụm từ cố định, thành ngữ, danh từ riêng hoặc từ chỉ thứ tự/tháng:** Ví dụ: "thứ tư", "tháng tư", "ngày một ngày hai".

**Các trường hợp giữ nguyên dạng chữ số:**

- **Ngày tháng năm cụ thể:** Ví dụ: `20/7/2026`, `ngày 5 tháng 8`.
- **Số liệu thống kê, dữ liệu kỹ thuật, số đo lường, tần số, phần trăm, thời gian chính xác:** Ví dụ: `5 MHz`, `10%`, `15 phút`, `3.5 cm`.
- **Chương/mục/điều khoản tài liệu:** Ví dụ: `Chương 3`, `Mục 2`.

### Kí tự đặc biệt & Trình bày

- **Dấu ngoặc kép:** Sử dụng dấu ngoặc kép thẳng `"`. Không dùng kí tự ngoặc kép cong hoặc thay thế khác.
- **Dấu gạch chéo `/`:** Viết liền với các từ ở hai bên khi biểu thị sự lựa chọn hoặc tỷ lệ.
  - _Đúng:_ Đầu dò Convex/Linear, 120/80 mmHg.
  - _Sai:_ Convex / Linear.
- **Kí hiệu `&`:** Tránh sử dụng trong nội dung văn bản thông thường, hãy viết rõ từ "và". Chỉ sử dụng trong tên riêng hoặc tài liệu tham khảo chính thức.
- **Mũi tên chỉ hướng/kết quả:** Sử dụng các kí tự Unicode chuẩn `→`, `←`, `↔` thay vì sử dụng kí tự ghép như `->`, `<-`.
- **Ký tự Hy Lạp:** Sử dụng ký tự Unicode chuẩn (ví dụ: `α` (Alpha), `β` (Beta), `γ` (Gamma), `δ` (Delta), `μ` (Micro)...). Không viết phiên âm tiếng Việt (như mi-crô-mét).
- **Chỉ số trên/dưới (Subscript/Superscript):** Để đảm bảo định dạng Markdown được hiển thị chính xác trên Blume và không bị lỗi biên dịch, **phải sử dụng trực tiếp kí tự Unicode cho chỉ số trên và dưới**. Tránh sử dụng thẻ HTML (`<sup>`, `<sub>`) hoặc kí tự caret (`^`).
  - _Chỉ số trên (Superscript):_ `⁰` `¹` `²` `³` `⁴` `⁵` `⁶` `⁷` `⁸` `⁹` `⁺` `⁻`. (Ví dụ: cm², m/s²).
  - _Chỉ số dưới (Subscript):_ `₀` `₁` `₂` `₃` `₄` `₅` `₆` `₇` `₈` `₉`. (Ví dụ: CO₂).

---

## 4. Thuật ngữ Y khoa & Viết tắt

- **Ưu tiên Tiếng Việt lâm sàng:** Sử dụng thuật ngữ chuyên môn Tiếng Việt chuẩn theo tài liệu của Bộ Y tế hoặc sách giáo trình Trường Đại học Y Dược TP. HCM, Đại học Y Hà Nội.
- **Thuật ngữ Tiếng Anh đồng hành:** Cung cấp thuật ngữ gốc Tiếng Anh viết nghiêng trong ngoặc đơn ở lần xuất hiện đầu tiên của thuật ngữ khó hoặc dễ gây nhầm lẫn.
  - _Ví dụ:_ Trở kháng âm (_Acoustic impedance_).
- **Quy trình Viết tắt:**
  - Lần xuất hiện đầu tiên: Viết đầy đủ thuật ngữ tiếng Việt, kèm theo từ viết tắt trong ngoặc đơn.
  - Các lần xuất hiện sau: Sử dụng trực tiếp từ viết tắt.
  - _Ví dụ:_ Siêu âm hội chẩn tại giường (POCUS) là... Kỹ thuật POCUS giúp...
- **Tên thuốc và Hoạt chất:**
  - Luôn sử dụng tên hoạt chất gốc (Generic name), viết bằng chữ thường và in nghiêng.
  - _Ví dụ:_ _lidocain_, _gel siêu âm_.

---

## 5. Tổ chức Thư mục và Cấu trúc Bài viết

### Tổ chức Thư mục và Tài sản (Assets)

Để duy trì tính di động, độc lập và dễ quản lý của từng chủ đề tài liệu:

- **Vị trí ảnh:** Tất cả hình ảnh minh họa cho một bài viết hoặc danh mục phải được lưu trữ trong thư mục con local có tên `_images/` nằm cùng cấp với bài viết đó.
  - _Đúng:_ `docs/01-co-ban/_images/vat-ly-sieu-am/tro-khang-am.png`
  - _Sai:_ `public/images/tro-khang-am.png`
- **Đường dẫn trong Frontmatter & Nội dung:** Mọi liên kết nội bộ khai báo trong Frontmatter (ví dụ: các hành động nút bấm) hoặc liên kết giữa các trang phải sử dụng **đường dẫn tương đối** (bắt đầu bằng `./` hoặc `../`) để tránh lỗi khi triển khai dự án trên các base path khác nhau (như GitHub Pages `/ultraso` hoặc Netlify `/`).
  - _Ví dụ:_ `href: ./vat-ly-sieu-am` thay vì `href: /co-ban/vat-ly-sieu-am`.

### Cấu trúc Frontmatter chuẩn

```yaml
---
title: Tên bài viết/Kỹ thuật/Chủ đề (Ngắn gọn, rõ ràng)
description: Tóm tắt 1 câu định hướng nội dung bài viết phục vụ SEO và hiển thị.
---
```

### Phân cấp Tiêu đề (Headings)

- Sử dụng H1 (`#`) duy nhất cho tên bài viết (được tự động tạo từ `title` trong Frontmatter).
- Sử dụng H2 (`##`) cho các phần chính và H3 (`###`) cho các phần phụ. Cấm nhảy cóc tiêu đề (ví dụ từ H2 xuống H4).

### Giới hạn độ sâu lồng ghép (Nesting Limits)

Để tài liệu luôn súc tích, dễ đọc lướt (scan) và tránh tình trạng phân mảnh nội dung, tổng mức độ lồng ghép từ Tiêu đề (Heading) xuống đến Danh sách (List) phải được kiểm soát nghiêm ngặt nhằm tránh cấu trúc dạng cây quá sâu:

- **Giới hạn Heading:** Khuyến khích tối đa chỉ dùng đến H3 (###). H4 (####) chỉ dùng khi thực sự cần thiết để chia nhỏ các ý phức tạp. Tuyệt đối **không sử dụng H5, H6.**
- **Giới hạn List:** Danh sách chỉ lồng tối đa **2 cấp** (1 cấp cha, 1 cấp con).
- **Quy tắc phối hợp Heading - List:** Không vượt quá 4 mức độ phân cấp (tính từ H2) đối với bất kỳ đoạn nội dung nào.
  - _Cấu trúc tối ưu (Khuyên dùng):_ `H2` → `H3` → `List cấp 1` → `List cấp 2`.
  - _Nếu đã sử dụng đến H4:_ Phía dưới H4 chỉ được dùng **List 1 cấp** (không lồng nhau).

### Cấu trúc bài giảng/hướng dẫn siêu âm chuẩn hóa

Mỗi bài viết hướng dẫn siêu âm/mặt cắt cần tuân theo cấu trúc tiêu đề chuẩn mực dưới đây để tạo tính nhất quán cho toàn bộ trang web:

1. **Tổng quan và Chỉ định** (`## Tổng quan và Chỉ định`)
   - Giới thiệu chung về mặt cắt/bệnh học, lý do thực hiện và các chỉ định chính.
2. **Kỹ thuật và Chuẩn bị** (`## Kỹ thuật và Chuẩn bị`)
   - Tư thế bệnh nhân, cách lựa chọn và điều chỉnh đầu dò (tần số, preset), mốc giải phẫu định vị.
3. **Giải phẫu siêu âm bình thường** (`## Giải phẫu siêu âm bình thường`)
   - Mô tả các cấu trúc bình thường quan sát được trên mặt cắt, các chỉ số đo lường bình thường.
4. **Tiêu chuẩn chẩn đoán và Hình ảnh bệnh lý** (`## Tiêu chuẩn chẩn đoán` hoặc `## Hình ảnh bệnh lý`)
   - Các dấu hiệu siêu âm bất thường, tiêu chuẩn chẩn đoán các bệnh lý thường gặp.
5. **Xảo ảnh và Hạn chế** (`## Xảo ảnh và Hạn chế`)
   - Các xảo ảnh (artifacts) thường gặp có thể gây nhầm lẫn và các hạn chế của kỹ thuật quét.
6. **Tài liệu tham khảo** (`## Tài liệu tham khảo`)
   - Danh sách nguồn trích dẫn uy tín.

---

## 6. Hình ảnh, Bảng biểu và Callouts (Asides)

### Hình ảnh (Pictures/Images)

- Cú pháp chèn ảnh sử dụng đường dẫn tương đối: `![Mô tả ngắn gọn alt-text](./_images/tên-thư-mục/tên-ảnh.png)`
- **Chú thích ảnh bắt buộc:** Phải đặt ngay bên dưới hoặc bên trên ảnh, viết nghiêng và đặt trong ngoặc kép:
  - _Ví dụ:_ `_Hình "Mặt cắt dọc động mạch chủ bụng thượng vị"._`

### Bảng biểu (Tables)

- Sử dụng bảng Markdown để so sánh hoặc hệ thống hóa dữ liệu số lượng phức tạp.
- **Chú thích bảng bắt buộc:** Đặt ngay phía trên bảng biểu, viết nghiêng và đặt trong ngoặc kép:
  - _Ví dụ:_ `_Bảng "Các mức độ hẹp động mạch cảnh theo vận tốc đỉnh tâm thu"._`

**Ví dụ trình bày:**

```md
_Bảng "Tiêu chuẩn chẩn đoán phình động mạch chủ bụng"._

| Đường kính động mạch chủ bụng (cm) | Phân loại mức độ | Khuyến cáo theo dõi  |
| ---------------------------------- | ---------------- | -------------------- |
| < 3.0                              | Bình thường      | Không cần theo dõi   |
| 3.0 - 4.0                          | Nhỏ              | Siêu âm mỗi 12 tháng |
| 4.0 - 5.4                          | Trung bình       | Siêu âm mỗi 6 tháng  |
| ≥ 5.5                              | Lớn              | Chỉ định phẫu thuật  |
```

### Hộp thông tin nổi bật (Asides/Callouts)

Sử dụng cú pháp Blume Asides để phân loại thông tin cảnh báo kỹ thuật và lâm sàng:

- `:::note` (Ghi chú): Dùng cho định nghĩa, tiêu chuẩn chẩn đoán, giá trị bình thường, thông tin bổ sung.
- `:::tip` (Lời khuyên/Mẹo): Các kinh nghiệm thực hành lâm sàng, kỹ thuật chỉnh máy hoặc thao tác đầu dò giúp tối ưu hóa hình ảnh.
- `:::caution` (Thận trọng): Cảnh báo về các sai sót thường gặp, chẩn đoán nhầm do xảo ảnh, hoặc các lỗi thao tác đầu dò cần tránh.
- `:::danger` (Nguy hiểm): Các dấu hiệu nguy kịch đỏ đe dọa tính mạng (ví dụ: phình tách động mạch chủ bụng dọa vỡ), chống chỉ định tuyệt đối.

**Ví dụ:**

```md
:::danger
Nếu phát hiện đường kính túi phình động mạch chủ bụng ≥ 5.5 cm hoặc có dấu hiệu tụ máu thành sau, hãy chuyển cấp cứu ngoại khoa mạch máu ngay lập tức vì nguy cơ vỡ cực kỳ cao.
:::
```

---

## 7. Tài liệu tham khảo (References)

Danh sách tài liệu tham khảo phải được chuẩn hóa theo cấu trúc định dạng nhất quán:
`Tên tổ chức/Tác giả (Năm) - Tên bài viết/Tên sách in nghiêng`.

- **Quy tắc:**
  - Sắp xếp theo thứ tự ưu tiên: Tài liệu trong nước (Bộ Y tế) trước, tài liệu quốc tế (AIUM, ISUOG, WFUMB, ACR, các sách chuẩn mực...) sau.
  - Các chữ cái đầu tiên viết hoa, tên sách/văn bản pháp quy được in nghiêng.

**Ví dụ:**

```md
## Tài liệu tham khảo

- Bộ Y tế Việt Nam (2020) - _Hướng dẫn quy trình kỹ thuật chuyên ngành Siêu âm_.
- Peter R. Rumack et al. (2018) - _Diagnostic Ultrasound 5th Edition_.
- AIUM (2019) - _Practice Parameter for the Performance of an Ultrasound Examination of the Abdomen_.
```
