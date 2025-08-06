import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@libs/types": path.resolve(__dirname, "../../libs/types/src"),
			"@libs/shared": path.resolve(__dirname, "../../libs/shared/src"),
			"@apps/client": path.resolve(__dirname, "./src"),
		},
	},
});
