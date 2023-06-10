const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    cardoftheday: './src/cardoftheday.js',
    index: './src/index.js',
    menu: './src/menu.js',
    about: './src/about.js',
    styleguide: './src/styleguide.js',
    articles: './src/articles.js',
    search: './src/search.js',
    fortunetelling: './src/fortunetelling.js',
    mouseeventcard: './src/cardonmouseevent.js',
    contentrandomizer: './src/contentrandomizer.js',
    page: './src/page.jsx',
    cards: './src/cards.jsx',
    searchbox: './src/search.jsx',
    airtable: './src/airtableData.js',
    fool: './src/cards/fool.jsx',
    future: './src/fortunetellings/future.jsx',
    family: './src/fortunetellings/family.jsx',
    love: './src/fortunetellings/love.jsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
    // clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    new CopyPlugin({
      patterns: [{ from: 'src/share', to: 'share' }]
    }),

    // Landing page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index', 'menu', 'mouseeventcard']
    }),

    // Internal pages
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/page.html',
      filename: './pages/page.html',
      chunks: ['page', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/article.html',
      filename: './articles/article.html',
      chunks: ['articles', 'menu', 'contentrandomizer']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles.html',
      filename: './articles.html',
      chunks: ['articles', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/search.html',
      filename: './search.html',
      chunks: ['search', 'menu']
    }),

    new HtmlWebpackPlugin({
      template: './src/cards/fool.html',
      filename: './cards/fool.html'
      // chunks: ['fool']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/moon.html',
      filename: './cards/moon.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/sun.html',
      filename: './cards/sun.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/fortunetellings/family.html',
      filename: './fortunetellings/family.html',
      chunks: ['fortunetelling', 'menu', 'family']
    }),
    new HtmlWebpackPlugin({
      template: './src/fortunetellings/love.html',
      filename: './fortunetellings/love.html',
      chunks: ['fortunetelling', 'menu', 'love']
    }),
    new HtmlWebpackPlugin({
      template: './src/fortunetellings/future.html',
      filename: './fortunetellings/future.html',
      chunks: ['fortunetelling', 'menu', 'future']
    }),
    new HtmlWebpackPlugin({
      template: './src/cardoftheday.html',
      filename: './cardoftheday.html',
      chunks: ['fortunetelling', 'menu', 'contentrandomizer', 'cardoftheday']
    }),
    new HtmlWebpackPlugin({
      template: './src/fortunetellings.html',
      filename: './fortunetellings.html',
      chunks: ['fortunetelling', 'menu', 'contentrandomizer']
    }),
    new HtmlWebpackPlugin({
      template: './src/platform.html',
      filename: './platform.html',
      chunks: ['menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: './about.html',
      chunks: ['menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/styleguide.html',
      filename: './styleguide.html',
      chunks: ['menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards.html',
      filename: './cards.html',
      chunks: ['menu', 'articles', 'cards', 'searchbox']
    }),
    new HtmlWebpackPlugin({
      template: './src/articlescompilations/lovecompilation.html',
      filename: './articlescompilations/lovecompilation.html',
      chunks: ['menu', 'articles']
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/menu.html'),
        location: 'menu',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
