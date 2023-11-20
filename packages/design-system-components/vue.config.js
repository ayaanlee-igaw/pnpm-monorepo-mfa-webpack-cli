const { defineConfig } = require("@vue/cli-service");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = defineConfig({
  publicPath: process.env.VUE_APP_SELF_SERVE ? "/" : "auto",
  pages: {
    index: {
      entry: "./src/index.ts",
    },
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          defaultVendors: {
            name: "chunk-vendors",
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: "async",
            reuseExistingChunk: true,
          },
          common: {
            name: "chunk-common",
            minChunks: 2,
            priority: -20,
            chunks: "async",
            reuseExistingChunk: true,
          },
        },
      },
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "designSystemComponents",
        filename: "remoteEntry.js",
        remotes: {
          shared: "shared@http://localhost:8083/remoteEntry.js",
        },
        exposes: {
          "./router": "./src/router/index.ts",
        },
        shared: {
          vue: {
            singleton: true,
            version: "3.3.4",
          },
          "element-plus": {
            singleton: true,
            version: "2.4.1",
          },
          axios: {
            singleton: true,
            version: "1.6.2",
          },
        },
      }),
    ],
  },
  transpileDependencies: true,
});
