const { defineConfig } = require('@vue/cli-service');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = defineConfig({
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
          },
          'element-plus': {
            singleton: true,
          },
        },
      }),
    ],
  },
  transpileDependencies: true,
});
