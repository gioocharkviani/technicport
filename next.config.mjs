/** @mode {import('next').NextConfig} */

const nextConfig = {
    images: {
      remotePatterns: [
        {
        //   protocol: "",
          hostname: "**",
        },
      ],
    },
  };
  
export default nextConfig;
