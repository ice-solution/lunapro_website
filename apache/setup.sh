#!/bin/bash

# Apache2 VirtualHost 設置腳本
# 用於設置 lunaskin.brandactivation.hk 網站

set -e  # 遇到錯誤立即退出

echo "🚀 開始設置 Apache2 VirtualHost..."

# 顏色定義
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 配置
DOMAIN="lunaskin.brandactivation.hk"
CONF_FILE="lunaskin.brandactivation.hk.conf"
SITES_AVAILABLE="/etc/apache2/sites-available"
SITES_ENABLED="/etc/apache2/sites-enabled"
WEB_ROOT="/var/www/lunapro_website"

# 檢查是否以 root 權限運行
if [ "$EUID" -ne 0 ]; then 
    echo -e "${RED}❌ 請使用 sudo 運行此腳本${NC}"
    exit 1
fi

# 1. 檢查 Apache2 是否已安裝
echo -e "${YELLOW}📦 檢查 Apache2 安裝...${NC}"
if ! command -v apache2 &> /dev/null; then
    echo -e "${YELLOW}⚠️  Apache2 未安裝，正在安裝...${NC}"
    apt update
    apt install -y apache2
else
    echo -e "${GREEN}✅ Apache2 已安裝${NC}"
fi

# 2. 啟用必要的 Apache 模組
echo -e "${YELLOW}🔧 啟用必要的 Apache 模組...${NC}"
a2enmod rewrite
a2enmod headers
# SSL 模組僅在需要 Full SSL 時才啟用（Flexible SSL 不需要）
# a2enmod ssl
echo -e "${GREEN}✅ 模組已啟用${NC}"

# 3. 創建網站目錄
echo -e "${YELLOW}📁 創建網站目錄...${NC}"
mkdir -p "${WEB_ROOT}/dist"
chown -R www-data:www-data "${WEB_ROOT}"
chmod -R 755 "${WEB_ROOT}"
echo -e "${GREEN}✅ 目錄已創建${NC}"

# 4. 複製 VirtualHost 配置文件
echo -e "${YELLOW}📋 複製 VirtualHost 配置文件...${NC}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
if [ ! -f "${SCRIPT_DIR}/${CONF_FILE}" ]; then
    echo -e "${RED}❌ 錯誤: 找不到配置文件 ${CONF_FILE}${NC}"
    exit 1
fi

cp "${SCRIPT_DIR}/${CONF_FILE}" "${SITES_AVAILABLE}/${CONF_FILE}"
echo -e "${GREEN}✅ 配置文件已複製${NC}"

# 5. 啟用網站（a2ensite）
echo -e "${YELLOW}🔗 啟用網站...${NC}"
if [ -L "${SITES_ENABLED}/${CONF_FILE}" ]; then
    echo -e "${YELLOW}⚠️  網站已啟用，跳過...${NC}"
else
    a2ensite "${CONF_FILE}"
    echo -e "${GREEN}✅ 網站已啟用${NC}"
fi

# 6. 禁用默認網站（可選）
echo -e "${YELLOW}🔍 檢查默認網站...${NC}"
if [ -L "${SITES_ENABLED}/000-default.conf" ]; then
    read -p "是否禁用默認網站 (000-default.conf)? [y/N] " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        a2dissite 000-default.conf
        echo -e "${GREEN}✅ 默認網站已禁用${NC}"
    fi
fi

# 7. 測試 Apache 配置
echo -e "${YELLOW}🧪 測試 Apache 配置...${NC}"
if apache2ctl configtest; then
    echo -e "${GREEN}✅ 配置測試通過${NC}"
else
    echo -e "${RED}❌ 配置測試失敗，請檢查錯誤信息${NC}"
    exit 1
fi

# 8. 重載 Apache
echo -e "${YELLOW}🔄 重載 Apache...${NC}"
systemctl reload apache2
echo -e "${GREEN}✅ Apache 已重載${NC}"

# 9. 檢查 Apache 狀態
echo -e "${YELLOW}📊 檢查 Apache 狀態...${NC}"
if systemctl is-active --quiet apache2; then
    echo -e "${GREEN}✅ Apache 運行正常${NC}"
else
    echo -e "${RED}⚠️  警告: Apache 可能未運行${NC}"
    systemctl status apache2
fi

# 10. 顯示下一步操作
echo ""
echo -e "${GREEN}✅ Apache2 VirtualHost 設置完成！${NC}"
echo ""
echo -e "${YELLOW}📝 下一步操作：${NC}"
echo "1. 構建網站："
echo "   cd /path/to/lunaskin_prod"
echo "   npm run build"
echo ""
echo "2. 部署網站："
echo "   sudo cp -r dist/* ${WEB_ROOT}/dist/"
echo "   sudo chown -R www-data:www-data ${WEB_ROOT}"
echo ""
echo "3. 或使用部署腳本："
echo "   ./deploy.sh"
echo ""
echo -e "${YELLOW}🌐 網站地址: https://${DOMAIN}${NC}"
echo ""
echo -e "${YELLOW}⚠️  注意事項：${NC}"
echo "- 確保 DNS 已正確配置指向此服務器"
echo "- 如果使用 Cloudflare，請設置 SSL/TLS 模式為 Flexible"
echo "- 檢查防火牆是否開放端口 80 和 443"
echo ""
