import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: [
    "@fullcalendar/react",
    "@fullcalendar/core",
    "@fullcalendar/daygrid",
  ]
};

export default nextConfig;
