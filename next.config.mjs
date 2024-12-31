/** @type {import('next').NextConfig} */

const dev = {
    ENV: "test",
    BASE_API: "http://localhost:4000/api",
    CLOUDINARY_CLOUD_NAME: "du5g5tizz",
    CLOUDINARY_KEY: "778328676594889",
    CLOUDINARY_SECRET: "J-ppLjn8mkXYjIMk-O9HIWCxNAs",
    CLOUDINARY_PRESET: "sfglbsa6",
};
  

const prod = {
    ENV: "prod",
    BASE_API: "https://foodgo-server.onrender.com/api",
    CLOUDINARY_CLOUD_NAME: "du5g5tizz",
    CLOUDINARY_KEY: "778328676594889",
    CLOUDINARY_SECRET: "J-ppLjn8mkXYjIMk-O9HIWCxNAs",
    CLOUDINARY_PRESET: "sfglbsa6",
}
  
  const nextConfig = {
    output: "standalone",
    reactStrictMode: false,
    trailingSlash: true,
    env: prod,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
    redirects: async () => [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'http://localhost:3000' }],
        destination: 'http://localhost:3000/:path*',
        permanent: true
      }
    ],
    async headers() {
      return [
        {
          // matching all API routes
          source: "/api/:path*",
          headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" },
            { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
            { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
          ]
        }
      ]
    }
  };
  
export default nextConfig;
  