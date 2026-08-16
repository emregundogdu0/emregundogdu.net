import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  transpilePackages: ["@splinetool/react-spline", "@splinetool/runtime"],
};

export default nextConfig;
