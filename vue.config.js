module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        rewrite: (path)=>path.replace(/^\/api/, ""),
        changeOrigin: true,
      },
    },
  },
}