/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "www.dsmonline.in",
          port: "",
          pathname: "/**",
        },
      ],
    },
  };
  
  export default nextConfig;
  
