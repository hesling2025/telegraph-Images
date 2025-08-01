/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {  
    return [  
      {  
        // 这里的路径可以根据您的需求进行调整  
        source: '/(.*)',  
        headers: [  
          {  
            key: 'Access-Control-Allow-Origin',  
            value: '*', // 或者具体的域名  
          },  
          {  
            key: 'Access-Control-Allow-Methods',  
            value: 'GET, POST, OPTIONS',  
          },  
          {  
            key: 'Access-Control-Allow-Headers',  
            value: 'Content-Type',  
          },  
        ],  
      },  
    ]  
  },
    async rewrites() {
        return [
            {
                source: '/file/:name*',
                destination: '/api/file/:name*', 
            },
        ]
    },
};

export default nextConfig;
