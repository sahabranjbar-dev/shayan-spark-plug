// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "assets3.lottiefiles.com"],
  },
};

export default nextConfig;
