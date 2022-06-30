/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap, {
      dev,
      dir,
      outDir,
      distDir,
      buildId
    }
  ) {
    return {
      '/': {
        page: '/'
      },
      '/quienes-somos': {
        page: '/quienes-somos'
      },
    }
  },
}

module.exports = nextConfig