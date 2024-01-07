/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "https://lh3.googleusercontent.com/a/ACg8ocLwIObWwhJoGwPNAcB1H-voDv2OqaVuEg7OJVMFBl1G=s96-c",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
