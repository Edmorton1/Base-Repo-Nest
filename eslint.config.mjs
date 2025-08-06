//@ts-check
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import jsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactRefresh from "eslint-plugin-react-refresh";
import pluginCypress from "eslint-plugin-cypress";

export default defineConfig([
	{
		ignores: ["node_modules/", "dist/", "eslint.config.mjs"],
	},
	js.configs.recommended,
	tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	reactHooks.configs["recommended-latest"],
	jsxA11y.flatConfigs.recommended,
	eslintPluginPrettierRecommended,
	reactRefresh.configs.vite,
	pluginCypress.configs.recommended,
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
		languageOptions: {
			ecmaVersion: "latest",
			globals: { ...globals.browser, ...globals.node, ...globals.jest },
			parserOptions: {
				project: "./tsconfig.json",
				tsconfigRootDir: import.meta.dirname,
			},
		},
		// REACT
		plugins: {
			react: pluginReact,
		},
		settings: {
			react: {
				version: "detect",
			},
		},
		rules: {
			// REACT
			"react/react-in-jsx-scope": "off",
			"react-hooks/exhaustive-deps": "error",
			"react/display-name": "off",

			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-floating-promises": "warn",
			"@typescript-eslint/no-unsafe-argument": "warn",
		},
	},
]);
