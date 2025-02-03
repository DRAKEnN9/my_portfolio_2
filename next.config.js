

module.exports = {
    reactStrictMode: true,
    output: "export", // Enable static export
    images: {
      unoptimized: true, // Disable image optimization for static export
    },
    env: {
      NAME: process.env.NAME,
    }
}