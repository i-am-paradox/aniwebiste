import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/aniwebiste",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
