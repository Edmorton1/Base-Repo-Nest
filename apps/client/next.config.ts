import type { NextConfig } from "next";

if (!process.env["URL_SERVER"]) {
	throw new Error("Укажите переменную URL_SERVER");
}

const nextConfig: NextConfig = {
	/* config options here */
	output: "standalone",
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
