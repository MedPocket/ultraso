# Hướng dẫn dành cho AI Agent (AGENTS.md)

Tài liệu này cung cấp cái nhìn tổng quan và hướng dẫn kỹ thuật cho các AI Agent hoặc lập trình viên khi tham gia xây dựng, cập nhật và phát triển trang tài liệu **Ultraso**.

---

## 1. Phát triển dự án (Development)

Dự án sử dụng trình quản lý gói **Bun** và framework tài liệu **Blume** (phát triển trên nền tảng Astro và Vite).

### Các lệnh cốt lõi (Core Commands)

- **Cài đặt thư viện:**
  ```bash
  bun install
  ```
- **Chạy môi trường phát triển (Dev server):**
  ```bash
  bun run dev
  ```
  _Môi trường phát triển sẽ chạy tại địa chỉ mặc định `http://localhost:4321/ultraso`._
- **Kiểm tra lỗi mã nguồn (Linting):**
  ```bash
  bun run lint
  ```
  _Sử dụng `oxlint` để kiểm tra nhanh lỗi cú pháp._
- **Định dạng mã nguồn (Formatting):**
  ```bash
  bun run fmt
  ```
  _Sử dụng `oxfmt` để tự động định dạng mã nguồn._
- **Kiểm tra kiểu dữ liệu (Type-checking):**
  ```bash
  bun run typecheck
  ```
  _Sử dụng `blume check` để kiểm tra kiểu dữ liệu TypeScript._
- **Biên dịch dự án thành trang tĩnh (Static Build):**
  ```bash
  bun run build
  ```
  _Kết quả biên dịch tĩnh sẽ được xuất ra thư mục `dist/`._
- **Xem trước bản dựng tĩnh (Preview):**
  ```bash
  bun run preview
  ```

---

## 2. Kiến trúc & Cấu hình dự án (Architecture & Configuration)

### Cấu hình chính (`blume.config.ts`)

- Dự án mặc định được cấu hình ngôn ngữ hiển thị là tiếng Việt (`vi`).
- Widget phản hồi (`feedback: false`) được tắt mặc định.
- Phông chữ mặc định của Blume được cấu hình sử dụng `Be Vietnam Pro` thông qua tệp cấu hình và ghi đè kiểu dáng trong `theme.css`.
- Hệ thống hỗ trợ đa nền tảng triển khai (Dual Deployment) dựa trên biến môi trường `NETLIFY`:
  - **Netlify:** Triển khai tại thư mục gốc (`/`).
  - **GitHub Pages:** Triển khai tại đường dẫn con (`/ultraso`).

### Patch thư viện Blume (`scripts/patch-blume.js`)

- Do Blume không hỗ trợ tùy chọn tắt liên kết host/site ở phần chân trang (footer) của ảnh OG được sinh ra, dự án sử dụng một đoạn script postinstall bằng ESM (`scripts/patch-blume.js`) để tự động can thiệp và loại bỏ phần chân trang này từ mã nguồn của gói `blume` trong thư mục `node_modules` ngay sau khi chạy lệnh `bun install`.

### Quản lý giao diện & Phông chữ (`theme.css`)

- Các tùy biến giao diện hoặc phông chữ đều được ghi đè trong `theme.css`.
- **Lưu ý cực kỳ quan trọng:** Để tránh các cảnh báo biên dịch CSS hoặc thứ tự tải tài nguyên từ Vite trong quá trình build, các phông chữ tùy chỉnh phải được khai báo bằng khối `@font-face` trực tiếp với các liên kết tuyệt đối, tránh tuyệt đối việc sử dụng lệnh `@import` CSS.

---

## 3. Cấu trúc tài liệu & Định tuyến (Documentation Structure & Routing)

### Quy tắc loại bỏ tiền tố sắp xếp

- Thư mục tài liệu nằm trong `docs/`.
- Blume tự động loại bỏ các tiền tố sắp xếp bằng số dạng `XX-` (ví dụ: `01-co-ban/`, `02-ky-thuat-quet/`, `03-sieu-am-mo-mem/`) ra khỏi đường dẫn URL của các tài liệu khi sinh ra. Do đó:
  - Thư mục `docs/01-co-ban/` sẽ có đường dẫn URL là `/co-ban/`.
  - Thư mục `docs/03-sieu-am-mo-mem/` sẽ có đường dẫn URL là `/sieu-am-mo-mem/`.

### Quản lý Menu & Sidebar (`meta.ts`)

- Mỗi thư mục con trong `docs/` chứa một tệp tin cấu hình `meta.ts` sử dụng hàm `defineMeta` của Blume để định nghĩa cấu trúc menu hiển thị:
  ```typescript
  import { defineMeta } from "blume";

  export default defineMeta({
    title: "Tiêu đề Menu",
    icon: "tên-icon-lucide",
    order: 1,
    collapsed: true,
    pages: ["tên-tệp-tin-mdx-không-bao-gồm-đuôi"],
  });
  ```

### Quy chuẩn viết tài liệu

- Để đảm bảo tính đồng nhất tuyệt đối về định dạng, ngữ pháp y khoa, cách viết kí hiệu chuyên ngành và cấu trúc bài viết, các AI Agent **bắt buộc** phải tuân thủ nghiêm ngặt hướng dẫn trong tệp **`STYLEGUIDE.md`** của dự án.
