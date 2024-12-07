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
      filename: "events.html",
      template: "src/events.html",
    }),
    new HtmlWebpackPlugin({
      filename: "schedules.html",
      template: "src/schedules.html",
    }),
    new HtmlWebpackPlugin({
      filename: "speaker.html",
      template: "src/speaker.html",
    }),
    new HtmlWebpackPlugin({
      filename: "speaker-details.html",
      template: "src/speaker-details.html",
    }),
    new HtmlWebpackPlugin({
      filename: "venue.html",
      template: "src/venue.html",
    }),
    new HtmlWebpackPlugin({
      filename: "contact-us.html",
      template: "src/contact-us.html",
    }),


    new HtmlWebpackSimpleIncludePlugin([
      {
        tag: '<include-headnav />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/headnav.html")),
      },
      {
        tag: '<include-hero />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/hero.html")),
      },
      {
        tag: '<include-conference />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/conference.html")),
      },
      {
        tag: '<include-speakers />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/speakers.html")),
      },
      {
        tag: '<include-schedule />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/schedule.html")),
      },
      {
        tag: '<include-ticket />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/ticket.html")),
      },
      {
        tag: '<include-testimonial />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/testimonial.html")),
      },
      {
        tag: '<include-faq />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/faq.html")),
      },
      {
        tag: '<include-register />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/register.html")),
      },
      {
        tag: '<include-footer />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/footer.html")),
      },
      {
        tag: '<include-ehero />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/ehero.html")),
      },
      {
        tag: '<include-digital-conference />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/digital-conference.html")),
      },
      {
        tag: '<include-image-gallery />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/image-gallery.html")),
      },
      {
        tag: '<include-statics />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/statics.html")),
      },
      {
        tag: '<include-details />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/details.html")),
      },
      {
        tag: '<include-speakers-two />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/speakers-two.html")),
      },
      {
        tag: '<include-venue-item />',
        content: fs.readFileSync(path.resolve(__dirname, "src/partials/venue-item.html")),
      },
    ])
  ],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};

