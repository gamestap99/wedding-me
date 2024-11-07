/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname: '"w.ladicdn.com',
                port: '',
                search: '',
            },
        ],
        localPatterns: [
            {
                pathname: 'src/app/assets/**',
                search: '',
            },
        ],
    },
    compiler:{
        removeConsole: process.env.NODE_ENV === "production",
    }
};

export default nextConfig;
