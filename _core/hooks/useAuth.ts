// 臨時的認證 hook 模擬
// 如果沒有後端，可以暫時使用這個模擬版本

export function useAuth() {
  return {
    user: null,
    isAuthenticated: false,
    loading: false,
  };
}
