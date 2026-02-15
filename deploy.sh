#!/bin/bash

# Luna Skin 網站部署腳本
# 使用方法: ./deploy.sh

set -e  # 遇到錯誤立即退出

echo "🚀 開始部署 Luna Skin 網站..."

# 顏色定義
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 配置
DOMAIN="lunaskin.brandactivation.hk"
WEB_ROOT="/var/www/lunapro_website/dist"
BUILD_DIR="dist"

# 檢查是否在正確的目錄
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ 錯誤: 請在項目根目錄運行此腳本${NC}"
    exit 1
fi

# 1. 構建項目
echo -e "${YELLOW}📦 正在構建項目...${NC}"
npm run build

if [ ! -d "$BUILD_DIR" ]; then
    echo -e "${RED}❌ 錯誤: 構建失敗，dist 目錄不存在${NC}"
    exit 1
fi

# 2. 備份現有文件（可選）
if [ -d "$WEB_ROOT" ]; then
    echo -e "${YELLOW}💾 備份現有文件...${NC}"
    sudo cp -r "$WEB_ROOT" "${WEB_ROOT}.backup.$(date +%Y%m%d_%H%M%S)" || true
fi

# 3. 創建目標目錄（如果不存在）
echo -e "${YELLOW}📁 創建目標目錄...${NC}"
sudo mkdir -p "$WEB_ROOT"
sudo chown -R $USER:$USER "$(dirname $WEB_ROOT)"

# 4. 複製文件
echo -e "${YELLOW}📋 複製文件到服務器...${NC}"
sudo rm -rf "$WEB_ROOT"/*
sudo cp -r "$BUILD_DIR"/* "$WEB_ROOT"/

# 5. 設置權限
echo -e "${YELLOW}🔐 設置文件權限...${NC}"
sudo chown -R www-data:www-data "$WEB_ROOT"
sudo chmod -R 755 "$WEB_ROOT"

# 6. 重載 Apache
echo -e "${YELLOW}🔄 重載 Apache 配置...${NC}"
sudo systemctl reload apache2

# 7. 檢查 Apache 狀態
if sudo systemctl is-active --quiet apache2; then
    echo -e "${GREEN}✅ Apache 運行正常${NC}"
else
    echo -e "${RED}⚠️  警告: Apache 可能未運行${NC}"
fi

# 8. 完成
echo -e "${GREEN}✅ 部署完成！${NC}"
echo -e "${GREEN}🌐 網站地址: https://${DOMAIN}${NC}"

# 9. 測試（可選）
echo -e "${YELLOW}🧪 測試網站...${NC}"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "https://${DOMAIN}" || echo "000")
if [ "$HTTP_CODE" = "200" ]; then
    echo -e "${GREEN}✅ 網站響應正常 (HTTP ${HTTP_CODE})${NC}"
else
    echo -e "${YELLOW}⚠️  網站響應碼: ${HTTP_CODE}${NC}"
fi

echo -e "${GREEN}🎉 部署流程完成！${NC}"
