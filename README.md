## 📁 `assets/`

Chứa File CSS/global style (nếu dùng)

---

## 📁 `components/`

Chứa các **UI component có thể tái sử dụng**, được chia thành các nhóm logic nếu cần:
- `common/`: các component nhỏ như `Button`, `Modal`, `Input`, v.v.
- `featureX/`: component gắn liền với một tính năng cụ thể như `QuizCard`, `AnswerOption`, v.v.

> Các component nên được đặt tên theo PascalCase: `QuizCard.jsx`, `LoginForm.jsx`

---

## 📁 `hooks/`

Chứa các **custom React hooks** dùng để tái sử dụng logic:
- `useDebounce.js`
- `useAuth.js`
- `useTimer.js`

> Tên hook bắt buộc bắt đầu bằng `use`.

---

## 📁 `routes/`

Chứa các component tương ứng với **route/page chính** của ứng dụng:
- `HomePage.jsx`
- `LoginPage.jsx`
- `QuizPage.jsx`

> Mỗi file trong đây tương ứng với một `<Route path="/...">`.

---

## 📁 `services/`

Chứa các chức năng liên quan đến kết nối dữ liệu và nhà cung cấp trạng thái:

### 📂 `services/api/`
Chứa các hàm gọi API hoặc thiết lập `axios`:
- `quizAPI.js`
- `authAPI.js`
- `axiosInstance.js`

### 📂 `services/providers/`
Chứa các **React Context Providers** hoặc thư viện bên thứ ba được cấu hình (AuthProvider, ThemeProvider,...)

### 📂 `store/`
Chứa logic quản lý **global state** như Redux hoặc Zustand:
- `store.js`
- `quizSlice.js`
- `authSlice.js`

---

## 📁 `utils/`

Chứa các hàm tiện ích không phụ thuộc vào React:
- `formatDate.js`
- `shuffleArray.js`
- `validateInput.js`

> Dùng để xử lý logic thuần JavaScript có thể tái sử dụng.

---

## 📌 Quy ước đặt tên

| Loại                 | Quy ước          | Ví dụ                          |
|----------------------|------------------|-------------------------------|
| Folder               | `kebab-case`     | `quiz-page`, `user-form`     |
| Component file       | `PascalCase.jsx` | `LoginForm.jsx`               |
| Hook file            | `camelCase.js`   | `useAuth.js`, `useTimer.js`   |
| API / Utils / Slice  | `camelCase.js`   | `quizAPI.js`, `quizSlice.js`  |
| CSS module           | `.module.css`    | `LoginForm.module.css`        |

---

Nếu bạn là thành viên mới, hãy tuân thủ cấu trúc này để giữ codebase sạch và dễ bảo trì.