/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig;
