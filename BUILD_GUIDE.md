# Luna Skin 專案構建指南

## 📋 前置要求

- Node.js 18+ 
- npm 或 yarn 或 pnpm

## 🚀 快速開始

### 1. 安裝依賴

```bash
npm install
```

### 2. 啟動開發服務器

```bash
npm run dev
```

開發服務器會在 `http://localhost:3000` 啟動，並自動打開瀏覽器。

### 3. 構建生產版本

```bash
npm run build
```

構建完成後，文件會輸出到 `dist/` 目錄。

### 4. 預覽生產構建

```bash
npm run preview
```

## 📁 專案結構

```
lunaskin_prod/
├── pages/              # 頁面組件
│   ├── Home.tsx        # 首頁
│   ├── Products.tsx    # 產品目錄
│   └── ...
├── components/         # 可重用組件
│   ├── layout/         # 布局組件
│   └── ui/             # UI 組件
├── data/               # 資料文件
│   ├── products.json   # 產品資料
│   └── categories.json # 分類資料
├── App.tsx             # 主應用組件
├── main.tsx            # 入口文件
├── index.html          # HTML 模板
├── vite.config.ts      # Vite 配置
└── package.json        # 專案配置
```

## 🔧 可用腳本

- `npm run dev` - 啟動開發服務器
- `npm run build` - 構建生產版本
- `npm run preview` - 預覽生產構建
- `npm run lint` - 運行 ESLint 檢查

## 📦 資料管理

### 產品資料

產品資料存放在 `data/products.json` 和 `data/categories.json`。

要更新產品資料，可以：

1. **手動編輯 JSON 文件**
2. **使用 Excel 處理腳本**：
   ```bash
   node process_excel.js
   ```
   這會讀取 `luna_page.xlsx` 並生成 JSON 文件。

### 載入資料

目前產品頁面使用 tRPC 從後端獲取資料。如果還沒有後端，可以：

1. **臨時使用 JSON 文件**：修改 `pages/Products.tsx` 直接導入 JSON
2. **設置後端 API**：使用 tRPC 或 REST API 提供資料

## 🎨 樣式系統

專案使用 **Tailwind CSS 4** 進行樣式管理。

- 主樣式文件：`index.css`
- 配置：`tailwind.config.js`

## 🖼️ 圖片資源

### 合作夥伴 Logo

將合作夥伴的 logo 圖片放在 `public/partners/` 目錄：

- `public/partners/royal-pacific-hotel.png`
- `public/partners/miramar-jaja.png`
- `public/partners/grace-chan.png`
- `public/partners/ally-chan.png`

如果圖片不存在，會自動顯示文字備用。

### 產品圖片

產品圖片建議放在 `public/images/products/` 目錄，並在產品資料中引用。

## 🔌 後端整合

### 當前狀態

專案使用 tRPC 進行 API 調用。如果還沒有設置後端：

1. **開發階段**：可以直接從 JSON 文件讀取資料
2. **生產階段**：需要設置後端服務器

### 臨時使用 JSON 資料

在 `pages/Products.tsx` 中，可以暫時這樣做：

```tsx
import productsData from '@/data/products.json';
import categoriesData from '@/data/categories.json';

// 使用本地資料而不是 tRPC
const products = productsData;
const categories = categoriesData;
```

## 🐛 常見問題

### 1. 依賴安裝失敗

```bash
# 清除緩存並重新安裝
rm -rf node_modules package-lock.json
npm install
```

### 2. 端口被占用

修改 `vite.config.ts` 中的 `server.port`：

```ts
server: {
  port: 3001, // 改為其他端口
}
```

### 3. 路徑別名不工作

確保 `tsconfig.json` 和 `vite.config.ts` 中的路徑配置正確。

## 📝 下一步

1. ✅ 安裝依賴並啟動開發服務器
2. ⏳ 準備合作夥伴 logo 圖片
3. ⏳ 設置後端 API（如果需要）
4. ⏳ 添加產品圖片
5. ⏳ 配置生產環境部署

## 🚢 部署

構建完成後，`dist/` 目錄包含所有靜態文件，可以部署到：

- Vercel
- Netlify
- GitHub Pages
- 任何靜態文件託管服務

---

**需要幫助？** 查看 `DATA_INTEGRATION_SUMMARY.md` 了解資料整合詳情。
