const { defineConfig } = require('@vue/cli-service');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080,
  },
  publicPath: 'auto',
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'container',
        filename: 'remoteEntry.js',
        remotes: {
          helloVue: 'helloVue@http://localhost:3002/remoteEntry.js',
        },
        shared: {},
      }),
    ],
  },
});
