# 🚀 快速啟動指南

## 立即開始

### 1. 安裝依賴

```bash
npm install
```

### 2. 啟動開發服務器

```bash
npm run dev
```

瀏覽器會自動打開 `http://localhost:3000`

### 3. 構建生產版本

```bash
npm run build
```

構建完成後，文件在 `dist/` 目錄。

## ⚠️ 重要提示

### 缺少的組件

專案中使用了以下組件/功能，但可能尚未完全設置：

1. **UI 組件** (`components/ui/`)
   - Button, Card, Badge, Input 等
   - 需要安裝 shadcn/ui 或手動創建

2. **tRPC 客戶端** (`lib/trpc`)
   - 用於 API 調用
   - 如果沒有後端，需要修改為使用本地 JSON 資料

3. **認證系統** (`_core/hooks/useAuth`)
   - 用戶認證功能
   - 可以暫時禁用或使用 mock 數據

4. **NotFound 頁面** (`pages/NotFound`)
   - 404 錯誤頁面

### 快速修復方案

#### 方案 1: 安裝 shadcn/ui（推薦）

```bash
npx shadcn@latest init
npx shadcn@latest add button card badge input
```

#### 方案 2: 創建基本 UI 組件

如果不想安裝 shadcn/ui，可以創建簡單的組件替代。

#### 方案 3: 使用本地 JSON 資料

修改 `pages/Products.tsx` 直接使用 JSON 文件：

```tsx
import productsData from '@/data/products.json';
import categoriesData from '@/data/categories.json';

// 替換 tRPC 調用
const products = productsData;
const categories = categoriesData;
```

## 📝 下一步

1. 安裝依賴並嘗試運行
2. 根據錯誤信息修復缺少的組件
3. 查看 `BUILD_GUIDE.md` 了解更多詳情

---

**遇到問題？** 查看終端錯誤信息，通常會告訴你缺少什麼。
