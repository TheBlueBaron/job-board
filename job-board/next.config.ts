import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: process.env.UPLOADTHING_HOSTNAME!,
        port: "",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
