# Ultrasound Learning

Một cổng thông tin giáo dục toàn diện, tương tác dành cho vật lý siêu âm lâm sàng, kỹ thuật quét và các ứng dụng thực tiễn.

## 🚀 Giới thiệu

Dự án **Ultrasound Learning** (siêu âm học) được xây dựng trên nền tảng **Blume** (sử dụng Astro và Vite), giúp các học viên lâm sàng, bác sĩ nội trú và sinh viên y khoa dễ dàng tiếp cận các hướng dẫn cô đọng và trực quan về siêu âm.

Tài liệu được tổ chức theo cấu trúc phân mục rõ ràng từ nguyên lý cơ bản, kỹ thuật quét cho đến hướng dẫn lâm sàng chi tiết.

## 🛠️ Cài đặt & Phát triển

Hệ sinh thái của dự án hỗ trợ Node (v22+) và sử dụng **Bun** làm trình quản lý gói chính.

### 1. Cài đặt các gói phụ thuộc

Sử dụng lệnh sau để cài đặt toàn bộ dependencies:

```bash
bun install
```

### 2. Phát triển (Development Mode)

Chạy môi trường phát triển cục bộ:

```bash
bun run blume dev
```

### 3. Kiểm tra chẩn đoán tài liệu (Doctor Mode)

Chạy công cụ chẩn đoán của Blume để phát hiện lỗi cấu trúc hoặc liên kết:

```bash
npx blume doctor
```

### 4. Biên dịch tĩnh (Production Build)

Biên dịch dự án thành trang web tĩnh (đầu ra lưu tại thư mục `dist/`):

```bash
npx blume build
```

### 5. Xem trước bản dựng tĩnh (Preview Mode)

Chạy máy chủ thử nghiệm cục bộ trên cổng `4321` để kiểm tra trang web đã được biên dịch tĩnh:

```bash
npx blume preview
```
Địa chỉ xem trước: `http://localhost:4321/ultraso`

## ⚙️ Cấu hình đặc trưng

Trang tài liệu này được tùy chỉnh với các thiết lập đặc biệt trong `blume.config.ts`:

- **Đa ngôn ngữ & Tiếng Việt (`i18n`):** Hệ thống sử dụng Tiếng Việt làm ngôn ngữ giao diện chính (`defaultLocale: "vi"`) với hậu tố đường dẫn được ẩn đi (`hideDefaultLocalePrefix: true`) giúp giữ URL luôn ngắn gọn.
- **Tắt phản hồi người dùng (`feedback: false`):** Đã tắt widget "Was this helpful?" (Trang này có hữu ích không?).
- **Bật tính năng chỉnh sửa tài liệu (`github`):** Hỗ trợ liên kết "Chỉnh sửa trên GitHub" trực tiếp trên mỗi trang tài liệu để cộng đồng có thể dễ dàng đóng góp nội dung.
- **Tự động cập nhật dependencies (`.github/renovate.json`):** Tích hợp Renovate sử dụng bộ cấu hình chia sẻ từ `github>area44-config`.

## 📁 Cấu trúc thư mục tài liệu

- `docs/`: Chứa toàn bộ nội dung tài liệu viết bằng Markdown/MDX.
  - `01-basics/`: Các bài học cơ bản về vật lý siêu âm và chế độ hiển thị.
  - `02-scanning/`: Các kỹ thuật điều khiển đầu dò và điều chỉnh máy siêu âm.
  - `index.mdx`: Trang chủ giới thiệu của Ultrasound Learning.
