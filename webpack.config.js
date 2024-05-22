/* Webpack
 * https://practicum.yandex.ru/learn/frontend-developer/courses/67fda678-3b6c-4758-8e58-a35cea7afc92/sprints/294557/topics/c9a02589-547f-4db9-bf31-c8d9e9ff03f2/lessons/c0435f31-4ab7-44f5-a782-4dff69543448/
 * https://webpack.js.org/guides/asset-modules/
 */

const path = require('path'); // подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // подключили плагин
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //берёт много css-файлов и объединяет их в один, то есть собирает бандл. Используется в prod-режиме.


module.exports = {
  devtool: 'eval-source-map', //убрать изменение файлов вебпаком и бейблом
  entry: {
    main: './src/index.js' //точка входа
  },
  output: {
    path: path.resolve(__dirname, 'dist'), //точка выхода
    filename: 'main.js',
    publicPath: ''
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'], //Расширения, на которые Webpack включит в сборку
  },
  mode: 'development', // добавили режим разработчика
  devServer: { //настройки локального сервера:
    static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
    open: true, // сайт будет открываться сам при запуске npm run dev
    watchFiles: ['src/**/*.js', 'src/**/*.html']
  },
  module: {
    rules: [ // rules — это массив правил
      // добавим в него объект правил для бабеля
      {
        test: /\.ts$/, //регулярное выражение, которое ищет все ts файлы
          //test: /\.js$/,
        use: 'ts-loader', //при обработке этих файлов нужно использовать ts-loader
          //use: 'babel-loader',
        exclude: '/node_modules/' //исключает папку node_modules, файлы в ней обрабатывать не нужно
      },
      //Подключение CSS-модулей на React
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'style-loader', //автоматически обрабатывает импортированные CSS-файлы, объединяет их, а затем встраивает стили в тег <style> HTML-документа. Используется в dev-режиме, чтобы автоматически внедрять стили без полной перезагрузки страницы.
          {
            loader: 'css-loader', //нужен, чтобы научить «Вебпак» работать с CSS.
            options: {
              modules: { //Опция modules - необходима для включения конфигурации css-модулей
                mode: 'local',
                localIdentName: '[name]__[local]__[hash:base64:5]', //Имя генерируемого класса можно настроить в опции localIdentName.
                auto: /\.module\.\w+$/i,
              },
              importLoaders: 2, //Значение 2 говорит о том, что некоторые трансформации PostCSS нужно применить до css-loader.
            },
          },
          'postcss-loader', //нужен, чтобы подключить PostCSS.
          {
            loader: 'sass-loader', //является надстройкой для Webpack и использует библиотеку
            //sass - для компиляции Sass-кода в CSS, является JavaScript-реализацией Sass, препроцессора для таблиц стилей.
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ]
  },

  plugins: [
    //https://webpack.js.org/plugins/html-webpack-plugin/#basic-usage
    new HtmlWebpackPlugin({
      template: './src/index.html' // путь к файлу index.html
    }),
    new CleanWebpackPlugin(), // использовали плагин
    new MiniCssExtractPlugin({
      filename: 'static/styles/index.css',
    }),
  ]
}
