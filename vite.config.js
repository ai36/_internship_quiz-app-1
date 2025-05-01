import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {            
            "@img": "/images",
            "@icons": "/images/icons",            
            "@assets": "/src/assets",
            "@components": "/src/components",
            "@hooks": "/src/hooks",
            "@pages": "/src/pages",
            "@utils": "/src/utils",
        },
    },
});
