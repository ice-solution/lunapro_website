export const COOKIE_NAME = "app_session_id";
export const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;
export const AXIOS_TIMEOUT_MS = 30_000;
export const UNAUTHED_ERR_MSG = 'Please login (10001)';
export const NOT_ADMIN_ERR_MSG = 'You do not have required permission (10002)';
export const LUNA_LOGO = '/luna-logo.png';

// 登入 URL - 臨時實現，之後可以替換為真實的登入頁面
export function getLoginUrl(): string {
  return '/contact'; // 暫時導向聯絡頁面，之後可以改為真實的登入頁面
}
