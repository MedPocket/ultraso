# Hướng dẫn viết tài liệu (STYLEGUIDE.md)

Tài liệu này quy định các nguyên tắc, chuẩn mực về nội dung, định dạng và cấu trúc cho toàn bộ dự án tài liệu siêu âm lâm sàng **Ultraso**. Hướng dẫn này kết hợp giữa [**AMA Manual of Style (Phiên bản Tiếng Việt)**](https://github.com/area44-labs/ama-manual-of-style/blob/main/STYLEGUIDE.vi.md) và các quy chuẩn kỹ thuật của nền tảng Blume nhằm đảm bảo sự chính xác y khoa, tính thống nhất tuyệt đối trong trình bày, tối ưu hóa khả năng hiển thị và mang lại trải nghiệm đọc tốt nhất cho nhân viên y tế, bác sĩ lâm sàng và học viên.

---

## 1. Nguyên tắc chung (General Principles)

- **Chuẩn mực AMA Manual of Style:** Mọi bài viết, báo cáo lâm sàng và hướng dẫn kỹ thuật phải tuân thủ các nguyên tắc cốt lõi của AMA Manual of Style:
  - **Tính chính xác & Khả năng lặp lại:** Đảm bảo mọi số liệu, giá trị xét nghiệm và khẳng định khoa học có thể kiểm chứng.
  - **Rõ ràng & Trực tiếp:** Sử dụng câu từ minh bạch, ưu tiên thể chủ động, giải thích từ viết tắt ở lần xuất hiện đầu tiên.
  - **Tính bao hàm & Tôn trọng:** Ngôn ngữ đặt con người làm trung tâm (person-first language), tránh định danh bệnh nhân theo tên bệnh (ví dụ: dùng _bệnh nhân mắc đái tháo đường_ thay vì _bệnh nhân tiểu đường_).
- **Độ chính xác Y khoa:** Mọi thông tin, kỹ thuật quét, dấu hiệu siêu âm và tiêu chuẩn chẩn đoán lâm sàng phải dựa trên các nguồn bằng chứng khoa học và khuyến cáo uy tín (Bộ Y tế Việt Nam, AIUM, ISUOG, WFUMB, ACR, v.v.). Ưu tiên số liệu định lượng cụ thể, có nguồn gốc rõ ràng.
- **Tham chiếu tài liệu Blume:** Khi cần tra cứu về các thành phần hiển thị, định dạng mdx, hoặc cấu trúc hệ thống, Agent và tác giả phải tham khảo tài liệu chính thức tại [https://useblume.dev/docs](https://useblume.dev/docs) để cập nhật phiên bản mới nhất.

---

## 2. Tổ chức File, Thư mục và Sắp xếp Trang

### Tự động Sắp xếp Trang theo Tiền tố Số (Numerical Ordering)

Để đảm bảo các trang tự động hiển thị theo đúng thứ tự logic mà **không cần phải khai báo danh sách file thủ công trong `meta.ts`**:

- **Đánh số file bài viết:** Tất cả các file bài viết (`.md` / `.mdx`) thuộc cùng một thư mục nội dung (ngoại trừ `index.mdx`) phải được đặt tên có tiền tố số thứ tự dạng `01-`, `02-`, `03-`...
  - _Ví dụ:_
    - `01-vat-ly-sieu-am.mdx`
    - `02-modes.mdx`
- **Xử lý Slug/URL của Blume:** Blume sẽ tự động loại bỏ tiền tố số khi tạo URL route (ví dụ: `01-vat-ly-sieu-am.mdx` sẽ có URL `/co-ban/vat-ly-sieu-am`), đồng thời tự động sắp xếp sidebar theo thứ tự số tiền tố.
- **Cấu trúc `meta.ts` tối giản:** File `meta.ts` trong từng thư mục chỉ khai báo các thông tin nhóm (title, icon, order, collapsed...), **tuyệt đối không khai báo thuộc tính `pages`**.

```typescript
// Đúng (meta.ts)
import { defineMeta } from "blume";

export default defineMeta({
  title: "Nguyên lý siêu âm cơ bản",
  icon: "book-open",
  order: 1,
  collapsed: true,
});
```

### Vị trí Tài sản (Assets) và Đường dẫn

- **Vị trí ảnh:** Tất cả hình ảnh minh họa phải được lưu trữ trong thư mục `assets/` nằm ở thư mục gốc (root) của dự án. Hãy giữ nguyên cấu trúc thư mục của bài viết tương ứng trong `assets/` để dễ quản lý.
  - _Ví dụ:_ `assets/01-co-ban/vat-ly-sieu-am/tro-khang-am.png`
- **Đường dẫn tương đối:** Mọi liên kết nội bộ khai báo trong Frontmatter hoặc liên kết giữa các trang phải sử dụng **đường dẫn tương đối** (bắt đầu bằng `./` hoặc `../`) để tránh lỗi khi triển khai trên các môi trường subpath khác nhau.

---

## 3. Định dạng Văn bản & Phong cách Viết (Typography & Style)

### In đậm (Bold) & In nghiêng (Italic)

- **In đậm (`**văn bản**`):** Dùng có chọn lọc để làm nổi bật các **từ khóa quan trọng**, **ngưỡng số liệu siêu âm/lâm sàng**, hoặc **chỉ định/chống chỉ định mấu chốt**. Không in đậm cả câu.
- **In nghiêng (`_văn bản_` hoặc `*văn bản*`):**
  1. **Thuật ngữ tiếng Anh lâm sàng hoặc từ viết tắt quốc tế** ở lần xuất hiện đầu tiên: _Point-of-Care Ultrasound_ (POCUS).
  2. **Danh pháp sinh vật / vi sinh:** Tên chi và loài in nghiêng (ví dụ: _Escherichia coli_, _Staphylococcus aureus_).
  3. **Ký hiệu gen:** In nghiêng (ví dụ: _BRCA1_, _EGFR_). (Lưu ý: Ký hiệu Protein viết đứng: BRCA1, EGFR).
  4. **Tên hoạt chất/tên thuốc gốc (Generic name):** dạng chữ thường in nghiêng (ví dụ: _lidocain_, _paracetamol_).
  5. **Tên sách, báo, chương sách, hướng dẫn:** _Rumack's Diagnostic Ultrasound_.
  6. **Chú thích hình ảnh, bảng biểu:** _Hình "Mặt cắt dọc động mạch chủ bụng"._

### Quy tắc Danh sách (Lists)

- **Cấu trúc song song:** Các mục trong cùng một danh sách phải đồng nhất ngữ pháp.
- **Ký tự đầu dòng:** Viết hoa chữ cái đầu tiên của mỗi mục.
- **Kết thúc câu:** **Luôn kết thúc bằng dấu chấm `.`** cho tất cả các mục.
- **Danh sách lồng nhau:** Thụt đầu dòng đúng **2 khoảng trắng**. Lồng tối đa **2 cấp**.

---

## 4. Kí hiệu, Toán học & Báo cáo Thống kê (AMA Standard)

### Phép so sánh & Đơn vị đo lường

- **Phép so sánh:** Thêm **một khoảng trắng** xung quanh các toán tử (`>`, `<`, `≥`, `≤`, `=`).
  - _Đúng:_ `> 3 cm`, `≤ 5 mm`, `≥ 60 cm/s`.
- **Đơn vị SI & Khoảng cách:**
  - Có một khoảng trắng giữa số lượng và đơn vị đo lường: `5 MHz`, `10 cm`, `37.5 °C`, `60 cm/s`.
  - Phần trăm: Viết liền chữ số và dấu `%` (ví dụ: `50%`, `95% CI`).
- **Chữ số vs Chữ viết:**
  - Sử dụng chữ số cho tất cả số đo lường, thời gian, tuổi, phần trăm hoặc giá trị thống kê (ví dụ: `5 mg`, `3 tuổi`, `2%`).
  - Số đứng đầu câu phải viết bằng chữ (ví dụ: "Ba bệnh nhân...").

### Giá trị P và Khoảng Tin cậy (AMA 11th Edition)

- **Ký hiệu P:** Luôn viết hoa và in nghiêng (_P_). Không viết số 0 trước dấu thập phân đối với giá trị _P_ (ví dụ: **_P_ = .003**, **_P_ < .001**).
- **Luôn kèm Khoảng tin cậy (CI) và Kích thước hiệu ứng:** Không báo cáo giá trị _P_ đứng một mình.
  - _Đúng:_ _Can thiệp giúp giảm 3.2% tỷ lệ tái nhập viện (95% CI, 1.1%-5.3%; P = .004)._

---

## 5. Thuật ngữ Y khoa, Danh pháp & Ngôn ngữ Tôn trọng

- **Ngôn ngữ đặt con người làm trung tâm (Person-First Language):**
  - _Ưu tiên:_ _bệnh nhân mắc đái tháo đường_ (thay vì _bệnh nhân tiểu đường_), _người rối loạn sử dụng chất_ (thay vì _con nghiện_).
- **Thuật ngữ Y khoa:** Ưu tiên thuật ngữ Tiếng Việt chuẩn lâm sàng (Bộ Y tế, Đại học Y Dược TP.HCM, Đại học Y Hà Nội). Cung cấp thuật ngữ Tiếng Anh viết nghiêng trong ngoặc đơn ở lần xuất hiện đầu tiên.
- **Tên Thuốc & Thiết Bị:** Sử dụng tên gốc phi thương mại (Generic name), viết thường và in nghiêng (ví dụ: _paracetamol_, _lidocain_).
- **Tên bệnh mang tên người (Eponyms):** Bỏ sở hữu cách (ví dụ: _bệnh Alzheimer_, _bệnh Parkinson_).

---

## 6. Cấu trúc Bài viết & Báo cáo Lâm sàng

### Định dạng IMRAD (cho bài báo nghiên cứu / tổng quan kỹ thuật)

Đối với các bài nghiên cứu thực nghiệm hoặc tổng quan kỹ thuật chuyên sâu, áp dụng cấu trúc **IMRAD**:

1. **Đặt vấn đề (Introduction)**
2. **Phương pháp (Methods)**
3. **Kết quả (Results)**
4. **Bàn luận (Discussion)**

### Cấu trúc Chuẩn hóa cho Hướng dẫn Siêu âm / Mặt cắt Clinical

Mỗi bài hướng dẫn kỹ thuật siêu âm/mặt cắt lâm sàng cần tuân thủ cấu trúc tiêu đề sau:

1. **Tổng quan và Chỉ định** (`## Tổng quan và Chỉ định`)
2. **Kỹ thuật và Chuẩn bị** (`## Kỹ thuật và Chuẩn bị`)
3. **Giải phẫu siêu âm bình thường** (`## Giải phẫu siêu âm bình thường`)
4. **Tiêu chuẩn chẩn đoán và Hình ảnh bệnh lý** (`## Tiêu chuẩn chẩn đoán` hoặc `## Hình ảnh bệnh lý`)
5. **Xảo ảnh và Hạn chế** (`## Xảo ảnh và Hạn chế`)
6. **Tài liệu tham khảo** (`## Tài liệu tham khảo`)

---

## 7. Hình ảnh, Bảng biểu, Callouts (Asides) & Flowcharts

- **Chú thích bắt buộc:**
  - Hình ảnh: Đặt ngay bên dưới/trên ảnh: `_Hình "Mặt cắt dọc động mạch chủ bụng thượng vị"._`
  - Bảng biểu: Đặt ngay phía trên bảng: `_Bảng "Tiêu chuẩn chẩn đoán phình động mạch chủ bụng"._`
- **Callouts (Blume Asides):** `:::note`, `:::tip`, `:::caution`, `:::danger`.
- **Sơ đồ / Flowcharts:** Các quy trình chẩn đoán, cây quyết định lâm sàng phải được vẽ bằng khối mã **Mermaid** (không sử dụng ASCII art).

---

## 8. Trích dẫn & Tài liệu Tham khảo (Định dạng AMA 11th Edition)

- **Trích dẫn trong văn bản:** Sử dụng chữ số Ả Rập ở dạng chỉ số trên (`<sup>1</sup>`, `<sup>2,3</sup>`, `<sup>4-7</sup>`) đặt bên ngoài dấu chấm/dấu phẩy.
- **Định dạng Danh sách Tài liệu tham khảo:**
  - Sắp xếp ưu tiên: Tài liệu Bộ Y tế trước, tài liệu quốc tế (AIUM, ISUOG, WFUMB, ACR, AMA...) sau.
  - Liệt kê tối đa 6 tác giả; nếu từ 7 tác giả trở lên, ghi 6 tác giả đầu kèm "et al."
  - Bao gồm DOI (`https://doi.org/...`) nếu có, không đặt dấu chấm ở cuối DOI/URL.

**Ví dụ:**

```md
## Tài liệu tham khảo

1. Bộ Y tế Việt Nam (2020) - _Hướng dẫn quy trình kỹ thuật chuyên ngành Siêu âm_.
2. Rumack PR, Levine D, eds. _Diagnostic Ultrasound_. 5th ed. Elsevier; 2018.
3. Christiansen SL, Iverson C, Flanagin A, et al. Preferred reporting style for medical publishing. _JAMA_. 2020;323(12):1150-1158. https://doi.org/10.1001/jama.2020.1234
```
