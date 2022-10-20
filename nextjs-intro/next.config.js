/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // url이 변경됨
    return [
      {
        source: "/contact",
        destination: "https://nomadcoders.co",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    // url을 변경되지 않음.
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
