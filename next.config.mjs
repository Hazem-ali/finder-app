/** @type {import('next').NextConfig} */


const nextConfig = {
  images: {
    domains: ['localhost'],
  },
    // images: {
    //     remotePatterns: [
    //       {
    //         protocol: 'http',
    //         hostname: 'localhost',
    //         port: '8000',
    //         pathname: '/media/**',
    //       },
    //     ],
    //   },


    reactStrictMode:false,
};

export default nextConfig;
