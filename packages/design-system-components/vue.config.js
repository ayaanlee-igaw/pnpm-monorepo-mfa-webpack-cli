const { defineConfig } = require('@vue/cli-service');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = defineConfig({
  // 서비스별로 개발할 경우 publicPath 주석처리 해주세요.
  publicPath: 'auto',
  pages: {
    index: {
      entry: './src/index.ts',
    },
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          defaultVendors: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'async',
            reuseExistingChunk: true,
          },
          common: {
            name: 'chunk-common',
            minChunks: 2,
            priority: -20,
            chunks: 'async',
            reuseExistingChunk: true,
          },
        },
      },
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'designSystemComponents',
        filename: 'remoteEntry.js',
        exposes: {
          './router': './src/router/index.ts',
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
