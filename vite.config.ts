import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",

      // includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],

      manifest: {
        name: "My Vite PWA",
        short_name: "VitePWA",
        description: "A Vite PWA application",
        theme_color: "#ffffff",
        icons: [
          // {
          //   src: "pwa-192x192.png",
          //   sizes: "192x192",
          //   type: "image/png",
          // },
          // {
          //   src: "pwa-512x512.png",
          //   sizes: "512x512",
          //   type: "image/png",
          // },
        ],
      },

      devOptions: {
        enabled: true,
      },
    }),
  ],
});
