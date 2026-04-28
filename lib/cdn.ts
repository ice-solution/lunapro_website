function stripTrailingSlash(value: string) {
  return value.endsWith("/") ? value.slice(0, -1) : value;
}

function stripLeadingSlash(value: string) {
  return value.startsWith("/") ? value.slice(1) : value;
}

/**
 * 將相對資源路徑（例如 `/images/001.png`）自動加上 CDN base。
 * - CDN base 來源：`FRONTEND_URL`（若沒設就直接回傳原值）
 * - 絕對網址（http/https/data/blob）不會被改動
 */
export function cdnUrl(input?: string | null): string {
  if (!input) return "";

  const value = String(input);
  if (
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("data:") ||
    value.startsWith("blob:")
  ) {
    return value;
  }

  const base =
    (import.meta.env as any).FRONTEND_URL ||
    (import.meta.env as any).VITE_FRONTEND_URL ||
    "";

  if (!base) return value;

  const normalizedBase = stripTrailingSlash(String(base));
  const normalizedPath = stripLeadingSlash(value);
  return `${normalizedBase}/${normalizedPath}`;
}

