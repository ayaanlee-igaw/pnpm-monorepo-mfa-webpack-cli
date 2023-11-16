const { defineConfig } = require('@vue/cli-service');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = defineConfig({
  // publicPath: 'auto',
  pages: {
    index: {
      entry: './src/index.ts',
    },
  },
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'main',
        filename: 'remoteEntry.js',
        remotes: {
          designSystemComponents: 'designSystemComponents@http://localhost:8082/remoteEntry.js',
        },
        shared: {
          vue: {
            singleton: true,
            version: '3.3.4',
          },
          'element-plus': {
            singleton: true,
            version: '2.4.1',
          },
        },
      }),
    ],
  },
  transpileDependencies: true,
});
