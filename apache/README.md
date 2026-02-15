# Apache2 VirtualHost 配置指南

## 域名
- **主域名**: lunaskin.brandactivation.hk
- **別名**: www.lunaskin.brandactivation.hk

## Cloudflare Flexible SSL 配置

### 1. Cloudflare DNS 設定

在 Cloudflare 控制台中：

1. **DNS 記錄**：
   - 類型：A 或 CNAME
   - 名稱：lunaskin（或 @）
   - 目標：您的服務器 IP 地址
   - 代理狀態：已代理（橙色雲朵）

2. **SSL/TLS 設定**：
   - SSL/TLS 加密模式：**Flexible**
   - 這意味著：
     - Cloudflare ↔ 訪客：HTTPS（加密）
     - Cloudflare ↔ 源服務器：HTTP（未加密）

### 2. 服務器配置步驟

#### 步驟 1: 安裝 Apache2（如果尚未安裝）
```bash
sudo apt update
sudo apt install apache2
```

#### 步驟 2: 啟用必要的 Apache 模組
```bash
sudo a2enmod rewrite
sudo a2enmod ssl
sudo a2enmod headers
sudo systemctl restart apache2
```

#### 步驟 3: 創建網站目錄
```bash
sudo mkdir -p /var/www/lunapro_website
sudo chown -R $USER:$USER /var/www/lunapro_website
```

#### 步驟 4: 構建網站
```bash
cd /path/to/lunaskin_prod
npm run build
sudo cp -r dist/* /var/www/lunapro_website/dist/
```

#### 步驟 5: 複製配置文件
```bash
sudo cp apache/lunaskin.brandactivation.hk.conf /etc/apache2/sites-available/
```

#### 步驟 6: 啟用網站
```bash
sudo a2ensite lunaskin.brandactivation.hk.conf
sudo systemctl reload apache2
```

#### 步驟 7: 檢查配置
```bash
sudo apache2ctl configtest
```

### 3. Cloudflare Flexible SSL 注意事項

**Flexible SSL 模式**：
- ✅ 訪客到 Cloudflare：HTTPS（加密）
- ⚠️ Cloudflare 到源服務器：HTTP（未加密）

**安全建議**：
1. 如果可能，建議使用 **Full SSL** 或 **Full (Strict) SSL** 模式
2. 使用 Cloudflare Origin Certificate（免費）來加密 Cloudflare 到源服務器的連接
3. 或者使用 Let's Encrypt 證書

### 4. 使用 Cloudflare Origin Certificate（推薦）

1. 在 Cloudflare 控制台：
   - SSL/TLS → Origin Server
   - 創建證書
   - 下載證書和私鑰

2. 上傳到服務器：
```bash
sudo mkdir -p /etc/ssl/cloudflare
sudo nano /etc/ssl/cloudflare/origin.crt  # 貼上證書內容
sudo nano /etc/ssl/cloudflare/origin.key  # 貼上私鑰內容
sudo chmod 600 /etc/ssl/cloudflare/origin.key
```

3. 更新 virtualhost 配置：
```apache
SSLCertificateFile /etc/ssl/cloudflare/origin.crt
SSLCertificateKeyFile /etc/ssl/cloudflare/origin.key
```

4. 在 Cloudflare 中將 SSL/TLS 模式改為 **Full** 或 **Full (Strict)**

### 5. 防火牆配置

確保端口 80 和 443 已開放：
```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw status
```

### 6. 測試

1. 檢查網站是否可訪問：
```bash
curl -I http://lunaskin.brandactivation.hk
curl -I https://lunaskin.brandactivation.hk
```

2. 檢查 SSL 配置：
```bash
openssl s_client -connect lunaskin.brandactivation.hk:443 -servername lunaskin.brandactivation.hk
```

### 7. 自動部署腳本（可選）

創建部署腳本 `deploy.sh`：
```bash
#!/bin/bash
npm run build
sudo cp -r dist/* /var/www/lunaskin.brandactivation.hk/dist/
sudo systemctl reload apache2
echo "部署完成！"
```

## 故障排除

### 問題：403 Forbidden
- 檢查目錄權限：`sudo chmod -R 755 /var/www/lunapro_website`
- 檢查 Apache 用戶權限：`sudo chown -R www-data:www-data /var/www/lunapro_website`

### 問題：路由不工作（404）
- 確保已啟用 `mod_rewrite`：`sudo a2enmod rewrite`
- 檢查 `.htaccess` 或 virtualhost 中的 RewriteRule 配置

### 問題：SSL 證書錯誤
- Flexible SSL 模式下，可以使用自簽名證書
- 或使用 Cloudflare Origin Certificate

## 相關文件
- VirtualHost 配置：`apache/lunaskin.brandactivation.hk.conf`
- 部署腳本：`deploy.sh`（需要創建）
