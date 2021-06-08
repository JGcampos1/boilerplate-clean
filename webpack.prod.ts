import BrotliPlugin from 'brotli-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import DuplicatePackageCheckerPlugin from 'duplicate-package-checker-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import TerserPlugin from 'terser-webpack-plugin'
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { merge } from 'webpack-merge'
import common from './webpack.common'

module.exports = merge(
  { ...common },
  {
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          loader: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },

    externals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    },

    resolve: {
      plugins: [
        new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, 'tsconfig-webpack.json')
        })
      ]
    },
    optimization: {
      runtimeChunk: {
        name: 'manifest'
      },
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'node_vendors',
            chunks: 'all'
          },
          common: {
            test: /[\\/]src[\\/]presentation[\\/]components[\\/]/,
            chunks: 'all',
            minSize: 0
          }
        }
      },
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            sourceMap: true,
            compress: {
              ecma: 5,
              inline: 2
            },
            mangle: {
              safari10: true
            },
            parse: {
              ecma: 5
            }
          },
          parallel: true
        })
      ]
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled'
      }),
      new Dotenv({
        path: './.env',
        safe: true,
        systemvars: true
      }),
      new BrotliPlugin({
        asset: '[path].br[query]',
        test: /\.(js|css|html|svg)$/
      }),
      new HtmlWebpackPlugin({
        template: './template.prod.html',
        cache: true
      }),
      new DuplicatePackageCheckerPlugin(),
      new CopyPlugin({
        patterns: [{ from: 'public/locales', to: 'locales' }]
      })
    ]
  }
)
