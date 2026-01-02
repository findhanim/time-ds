import { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/time-ds" : "",
  assetPrefix: isProd ? "/time-ds/" : "",
  reactStrictMode: true,
};

export default nextConfig;
