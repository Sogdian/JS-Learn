const path = require('path'); // подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // подключили плагин


module.exports = {
  devtool: 'eval-source-map', //убрать изменение файлов вебпаком и бейблом
  entry: { main: './src/index.js' }, //точка входа
  output: {
    path: path.resolve(__dirname, 'dist'), //точка выхода
    filename: 'main.js',
    publicPath: ''
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
        // регулярное выражение, которое ищет все js файлы
        test: /\.js$/,
        // при обработке этих файлов нужно использовать babel-loader
        use: 'babel-loader',
        // исключает папку node_modules, файлы в ней обрабатывать не нужно
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [
    //https://webpack.js.org/plugins/html-webpack-plugin/#basic-usage
    new HtmlWebpackPlugin({
      template: './src/index.html' // путь к файлу index.html
    }),
    new CleanWebpackPlugin(), // использовали плагин
  ]
}
