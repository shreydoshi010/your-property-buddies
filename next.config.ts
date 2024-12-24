// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: 'export',
// };

// export default nextConfig;
module.exports = {
  output: 'export', // Keep this for static export
  images: {
    unoptimized: true, // Disable image optimization
  },
};
