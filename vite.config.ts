import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "../backend/static",
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            output: {
                manualChunks: id => {
                    if (id.includes("@fluentui/react-icons")) {
                        return "fluentui-icons";
                    } else if (id.includes("@fluentui/react")) {
                        return "fluentui-react";
                    } else if (id.includes("node_modules")) {
                        return "vendor";
                    }
                }
            }
        },
        target: "esnext"
    },
    server: {
        proxy: {
            "/content/": "https://app-backend-m4e2xqbf2aomm.azurewebsites.net",
            "/auth_setup": "https://app-backend-m4e2xqbf2aomm.azurewebsites.net",
            "/.auth/me": "https://app-backend-m4e2xqbf2aomm.azurewebsites.net",
            "/ask": "https://app-backend-m4e2xqbf2aomm.azurewebsites.net",
            "/chat": "https://app-backend-m4e2xqbf2aomm.azurewebsites.net",
            "/config": "https://app-backend-m4e2xqbf2aomm.azurewebsites.net"
        }
    }
});
