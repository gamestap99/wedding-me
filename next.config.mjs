/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["w.ladicdn.com"],
        localPatterns: [
            {
                pathname: 'src/app/assets/**',
                search: '',
            },
        ],
    }
};

export default nextConfig;
