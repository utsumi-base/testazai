/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        'https://cautious-space-waddle-rvj5g45j7936px-3000.app.github.dev/'
        // ここでCodespaceのURLのOriginを指定する
      ],
    },
  },
};

module.exports = nextConfig;
