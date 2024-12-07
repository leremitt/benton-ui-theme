const path = require("path");
const autoprefixer = require('autoprefixer')
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const fs = require('fs');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackSimpleIncludePlugin = require("html-webpack-simple-include-plugin");
module.exports = {
  entry: {
    main: "./src/index.js",
  },
  mode: "development",
  devServer: {
    watchFiles: ["src/**/*"],
    hot: true,
    port:8080,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer
                ]
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets", to: "assets" }
      ],
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "services-details.html",
      template: "src/services-details.html",
    }),
    new HtmlWebpackPlugin({
      filename: "blog-details.html",
      template: "src/blog-details.html",
    }),
    new HtmlWebpackPlugin({
      filename: "events-details.html",
      template: "src/events-details.html",
    }),
    new HtmlWebpackPlugin({
      filename: "portfolio-details.html",
      template: "src/portfolio-details.html",
    }),
    new HtmlWebpackPlugin({
      filename: "product-all.html",
      template: "src/product-all.html",
    }),
    new HtmlWebpackPlugin({
      filename: "product-details.html",
      template: "src/product-details.html",
    }),
    new HtmlWebpackPlugin({
      filename: "cart.html",
      template: "src/cart.html",
    }),
    new HtmlWebpackPlugin({
      filename: "checkout.html",
      template: "src/checkout.html",
    }),

    new HtmlWebpackSimpleIncludePlugin([
      {
        tag: '<include-check />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/check.html")),
      },
      {
        tag: '<include-footer />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/footer.html")),
      },
      {
        tag: '<include-detailslider />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/details-slider.html")),
      },
      {
        tag: '<include-navbar />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/navbar.html")),
      },
    ])
  ],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};

