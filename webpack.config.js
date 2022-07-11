const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const OptimizeCssAssetWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const autoprefixer = require("autoprefixer");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const filename = (ext) =>
  isProd ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const optimization = () => {
  const configObj = {
    splitChunks: {
      chunks: "all",
    },
  };

  if (isProd) {
    configObj.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin(),
    ];
  }

  return configObj;
};

const plugins = () => {
  const basePlugins = [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "src/doctor1.html"),
      filename: "doctor1.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "src/doctor2.html"),
      filename: "doctor2.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "src/doctor3.html"),
      filename: "doctor3.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "src/doctor4.html"),
      filename: "doctor4.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "src/doctor5.html"),
      filename: "doctor5.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "src/doctor6.html"),
      filename: "doctor6.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `./css/${filename("css")}`,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets"),
          to: path.resolve(__dirname, "app/assets"),
        },
      ],
    }),
    new FaviconsWebpackPlugin({
      logo: "./assets/favicons/android-chrome-512x512.png",
      mode: "webapp",
      devMode: "webapp",
      favicons: {
        appName: "Dental clinic",
        appDescription: "Dental clinic is the best place for your health",
        developerName: "Ihor",
        background: "#ffffff",
        theme_color: "#ffffff",
      },
    }),
  ];

  return basePlugins;
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "./js/main.js",
  output: {
    filename: `./js/${filename("js")}`,
    path: path.resolve(__dirname, "app"),
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "app"),
    },
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
  optimization: optimization(),
  plugins: plugins(),
  devtool: isProd ? false : "source-map",
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          esModule: false,
        },
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
            },
          },
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [autoprefixer()],
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(?:|gif|png|jpg|jpeg|svg)$/,
        type: "asset/resource",
        generator: {
          filename: isDev ? "img/[hash][ext][query]" : "img/[name][ext][query]",
        },
      },
      {
        test: /\.(?:|woff2)$/,
        type: "asset/resource",
        generator: {
          filename: isDev
            ? "fonts/[hash][ext][query]"
            : "fonts/[name][ext][query]",
        },
      },
    ],
  },
};
