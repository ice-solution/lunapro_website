import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const portRaw = env.VITE_PORT ?? env.PORT;
  const port = portRaw ? Number(portRaw) : 3000;

  return {
    plugins: [react()],
    define: {
      // 讓前端也能讀到非 VITE_ 前綴的 FRONTEND_URL
      "import.meta.env.FRONTEND_URL": JSON.stringify(env.FRONTEND_URL ?? ""),
      // 讓前端也能讀到非 VITE_ 前綴的 WHATSAPP_PHONE
      "import.meta.env.WHATSAPP_PHONE": JSON.stringify(env.WHATSAPP_PHONE ?? ""),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./"),
        "@shared": path.resolve(__dirname, "./"),
        "@/_core": path.resolve(__dirname, "./_core"),
      },
    },
    server: {
      port: Number.isFinite(port) ? port : 3000,
      open: (env.VITE_OPEN ?? "true") === "true",
      host: env.VITE_HOST || undefined,
    },
    preview: {
      port: env.VITE_PREVIEW_PORT ? Number(env.VITE_PREVIEW_PORT) : 4173,
      host: env.VITE_HOST || undefined,
    },
    build: {
      outDir: "dist",
      sourcemap: true,
    },
  };
});
