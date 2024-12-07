const path = require("path");
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
      filename: "about-us.html", 
      template: "src/about-us.html",
    }),

    new HtmlWebpackPlugin({
      filename: "blog.html", 
      template: "src/blog.html",
    }),

    new HtmlWebpackPlugin({
      filename: "blog-details.html", 
      template: "src/blog-details.html",
    }),

    new HtmlWebpackPlugin({
      filename: "menu.html", 
      template: "src/menu.html",
    }),

    new HtmlWebpackPlugin({
      filename: "book-table.html", 
      template: "src/book-table.html",
    }),

    new HtmlWebpackPlugin({
      filename: "contact.html", 
      template: "src/contact.html",
    }),

    new HtmlWebpackSimpleIncludePlugin([
      {
        tag: '<include-header />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/header.html")),

      },
    ])
  ],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
