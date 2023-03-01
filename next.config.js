/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "i.ibb.co",
      "www.gamespot.com",
      "play-lh.googleusercontent.com",
      "upload.wikimedia.org",
    ],
  },
};

module.exports = nextConfig;
