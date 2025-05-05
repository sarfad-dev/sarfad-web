/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		optimizeCss: true,
	},
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: '/sensor-data/:path*',
				destination: 'http://localhost:5000/sensor-data/:path*',
			},
		];
	},	
};

export default nextConfig;