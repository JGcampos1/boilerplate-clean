import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import { HotModuleReplacementPlugin } from 'webpack'
import { merge } from 'webpack-merge'
import common from './webpack.common'

export default merge(
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
            transpileOnly: true
          }
        }
      ]
    },
    stats: {
      errorDetails: false
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
    devtool: 'inline-source-map',
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
          files: './src/**/*.{ts,tsx,js,jsx}'
        },
        typescript: {
          memoryLimit: 4096,
          profile: true,
          configFile: 'tsconfig-webpack.json'
        }
      }),
      new ReactRefreshWebpackPlugin({
        overlay: false
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
