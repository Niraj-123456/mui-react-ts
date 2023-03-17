import { defineConfig, ConfigEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig((_congifEnv: ConfigEnv) => {
  return {
    plugins: [react()],
    server: {
      port: 3000,
      strictPort: true,
      hmr: {
        port: 9000,
      },
    },
    base: "./",
  };
});
