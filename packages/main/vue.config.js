const { defineConfig } = require("@vue/cli-service");
const { ModuleFederationPlugin } = require("webpack").container;
const designSystemComponentsPackage = require("../design-system-components/package.json");
const sharedPackage = require("../shared/package.json");

module.exports = defineConfig({
  // publicPath: process.env.VUE_APP_SELF_SERVE ? "/" : "auto",
  pages: {
    index: {
      entry: "./src/index.ts",
    },
  },
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "main",
        filename: "remoteEntry.js",
        remotes: {
          designSystemComponents: `designSystemComponents@http://localhost:8082/design-system-components-v${designSystemComponentsPackage.version}.js`,
          shared: `shared@http://localhost:8083/shared-v${sharedPackage.version}.js`,
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
