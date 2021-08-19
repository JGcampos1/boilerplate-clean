const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { HotModuleReplacementPlugin } = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(
  { ...common },
  {
    output: {
      path: path.resolve(__dirname, 'dist'),
      pathinfo: false,
      filename: '[name].js',
      sourceMapFilename: '[name].map',
      chunkFilename: '[id].js',
      publicPath: '/'
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            transpileOnly: true,
            experimentalWatchApi: true
          }
        }
      ]
    },
    optimization: {
      removeAvailableModules: false,
      removeEmptyChunks: false,
      splitChunks: false,
      runtimeChunk: true
    },
    cache: {
      type: 'filesystem'
    },
    devtool: 'eval-source-map',
    devServer: {
      clientLogLevel: 'warning',
      publicPath: '/',
      contentBase: './public',
      writeToDisk: true,
      historyApiFallback: true,
      port: 3000,
      compress: true,
      hot: true
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        eslint: {
          enabled: false,
          files: './src/**/*.{ts,tsx,js,jsx}',
          options: {
            fix: true
          }
        },
        typescript: {
          memoryLimit: 4096,
          profile: true
        }
      }),
      new ReactRefreshWebpackPlugin({
        overlay: true
      }),
      new Dotenv({
        path: './.env.local',
        safe: true,
        systemvars: true
      }),
      new HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        inject: true,
        template: './template.dev.html'
      })
    ]
  }
)
