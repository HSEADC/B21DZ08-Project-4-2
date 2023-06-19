const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    cardoftheday: './src/cardoftheday.jsx',
    index: './src/index.jsx',
    menu: './src/menubar.jsx',
    about: './src/about.js',
    styleguide: './src/styleguide.js',
    articles: './src/articles.js',
    search: './src/search.jsx',
    fortunetelling: './src/fortunetelling.js',
    mouseeventcard: './src/cardonmouseevent.js',
    contentrandomizer: './src/contentrandomizer.js',
    page: './src/page.jsx',
    cards: './src/cards.jsx',
    airtable: './src/airtableData.js',
    cardTelling: './src/cards/cardTelling.jsx',
    future: './src/fortunetellings/future.jsx',
    family: './src/fortunetellings/family.jsx',
    love: './src/fortunetellings/love.jsx',
    fortuneTellings: './src/fortuneTellings.jsx'
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
      filename: './cards/fool.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/moon.html',
      filename: './cards/moon.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/sun.html',
      filename: './cards/sun.html',
      chunks: ['cardTelling', 'menu']
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
      chunks: ['fortunetelling', 'menu', 'contentrandomizer', 'fortuneTellings']
    }),
    new HtmlWebpackPlugin({
      template: './src/platform.html',
      filename: './platform.html',
      chunks: ['menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: './about.html',
      chunks: ['index', 'menu', 'mouseeventcard']
    }),
    new HtmlWebpackPlugin({
      template: './src/styleguide.html',
      filename: './styleguide.html',
      chunks: ['menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards.html',
      filename: './cards.html',
      chunks: ['menu', 'articles', 'cards']
    }),
    new HtmlWebpackPlugin({
      template: './src/articlescompilations/lovecompilation.html',
      filename: './articlescompilations/lovecompilation.html',
      chunks: ['menu', 'articles']
    }),

    //Articles
    new HtmlWebpackPlugin({
      template: './src/articles/waiteTarot.html',
      filename: './articles/waiteTarot.html',
      chunks: ['articles', 'menu']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/foursInTarot.html',
      filename: './articles/foursInTarot.html',
      chunks: ['articles', 'menu']
    }),

    new HtmlWebpackPlugin({
      template: './src/articles/yourFirstTarotCards.html',
      filename: './articles/yourFirstTarotCards.html',
      chunks: ['articles', 'menu']
    }),
    //Cards
    new HtmlWebpackPlugin({
      template: './src/cards/fool.html',
      filename: './cards/fool.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/theMagician.html',
      filename: './cards/theMagician.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/priestess.html',
      filename: './cards/priestess.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/bashnya.html',
      filename: './cards/bashnya.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/empress.html',
      filename: './cards/empress.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/emperor.html',
      filename: './cards/emperor.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/priest.html',
      filename: './cards/priest.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/lovers.html',
      filename: './cards/lovers.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/chariot.html',
      filename: './cards/chariot.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/strength.html',
      filename: './cards/strength.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/hermit.html',
      filename: './cards/hermit.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/wheelOfFortune.html',
      filename: './cards/wheelOfFortune.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/justice.html',
      filename: './cards/justice.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/theHangedMan.html',
      filename: './cards/theHangedMan.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/death.html',
      filename: './cards/death.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/temperance.html',
      filename: './cards/temperance.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/theDevil.html',
      filename: './cards/theDevil.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/star.html',
      filename: './cards/star.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/moon.html',
      filename: './cards/moon.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/sun.html',
      filename: './cards/sun.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/judgement.html',
      filename: './cards/judgement.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/world.html',
      filename: './cards/world.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/wandsAce.html',
      filename: './cards/wandsAce.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/kingOfWands.html',
      filename: './cards/kingOfWands.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/queenOfWands.html',
      filename: './cards/queenOfWands.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/knightOfWands.html',
      filename: './cards/knightOfWands.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/pageOfWands.html',
      filename: './cards/pageOfWands.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/wands2.html',
      filename: './cards/wands2.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/wands3.html',
      filename: './cards/wands3.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/wands4.html',
      filename: './cards/wands4.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/wands5.html',
      filename: './cards/wands5.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/wands6.html',
      filename: './cards/wands6.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/wands7.html',
      filename: './cards/wands7.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/wands8.html',
      filename: './cards/wands8.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/wands9.html',
      filename: './cards/wands9.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/wands10.html',
      filename: './cards/wands10.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/aceOfCups.html',
      filename: './cards/aceOfCups.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/kingOfCups.html',
      filename: './cards/kingOfCups.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/queenOfCups.html',
      filename: './cards/queenOfCups.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/cupsKnight.html',
      filename: './cards/cupsKnight.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/pageCups.html',
      filename: './cards/pageCups.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/cups2.html',
      filename: './cards/cups2.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/cups3.html',
      filename: './cards/cups3.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/cups4.html',
      filename: './cards/cups4.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/cups5.html',
      filename: './cards/cups5.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/cups6.html',
      filename: './cards/cups6.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/cups7.html',
      filename: './cards/cups7.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/cups8.html',
      filename: './cards/cups8.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/cups9.html',
      filename: './cards/cups9.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/cups10.html',
      filename: './cards/cups10.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/aceOfSwords.html',
      filename: './cards/aceOfSwords.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/kingOfSwords.html',
      filename: './cards/kingOfSwords.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/queenOfSwords.html',
      filename: './cards/queenOfSwords.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/knightOfSwords.html',
      filename: './cards/knightOfSwords.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/pageOfSwords.html',
      filename: './cards/pageOfSwords.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/swords2.html',
      filename: './cards/swords2.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/swords3.html',
      filename: './cards/swords3.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/swords4.html',
      filename: './cards/swords4.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/swords5.html',
      filename: './cards/swords5.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/swords6.html',
      filename: './cards/swords6.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/swords7.html',
      filename: './cards/swords7.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/swords8.html',
      filename: './cards/swords8.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/swords9.html',
      filename: './cards/swords9.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/swords10.html',
      filename: './cards/swords10.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/aceOfPentacles.html',
      filename: './cards/aceOfPentacles.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/kingOfPentacles.html',
      filename: './cards/kingOfPentacles.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/queenOfPentacles.html',
      filename: './cards/queenOfPentacles.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/knightOfPentacles.html',
      filename: './cards/knightOfPentacles.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/pageOfPentacles.html',
      filename: './cards/pageOfPentacles.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/pentacles2.html',
      filename: './cards/pentacles2.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/pentacles3.html',
      filename: './cards/pentacles3.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/pentacles4.html',
      filename: './cards/pentacles4.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/pentacles5.html',
      filename: './cards/pentacles5.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/pentacles6.html',
      filename: './cards/pentacles6.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/pentacles7.html',
      filename: './cards/pentacles7.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/pentacles8.html',
      filename: './cards/pentacles8.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/pentacles9.html',
      filename: './cards/pentacles9.html',
      chunks: ['cardTelling', 'menu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards/pentacles10.html',
      filename: './cards/pentacles10.html',
      chunks: ['cardTelling', 'menu']
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
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/footer.html'),
        location: 'footer',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
