import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import path from 'path'

export default {
  entry: './src/main/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[fullhash:8].js',
    sourceMapFilename: '[name].[fullhash:8].map',
    chunkFilename: '[id].[fullhash:8].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '~': path.join(__dirname, 'src')
    }
  },
  plugins: [new CleanWebpackPlugin()]
}
