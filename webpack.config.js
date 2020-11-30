const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  //Lo primero es decir el punto de entrada
  entry: './src/index.js',
  //despues debemos de decir donde se guardara todo el proyecto
  //para esto necesitamos el uso de path para decir una ruta y resolve para saber donde estamos
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
   
  },
  resolve: {
    //tenemos que decir que extensiones va a estar analizando para que webpack este preparado
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        //aqui psaremos reglas que se detectan por medio de loaders
        //pasaremos que archivos vamos a estar utilizando y checando
        test: /\.(js|jsx)$/,
        exclude: /node_moudle/,
        use: {
          //aqui decimos que utilizara este loader para poder leer js y jsx
          loader: 'babel-loader',
        },
      },
      {
          test: /\.html$/,
          use:[
             {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(s*)css$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					'css-loader',
					'sass-loader',
				],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      //aqui le estamos diciendo cual será nuestro punto de entrada referiendose al html
      //estamos diciendo que templete vamos a utiilizar para utilizar nuestro codigo
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename:'assets/[name].css'
    })
  ],
  devServer: {
    //aqui estamos creando nuestro sever de desarrollo
    contentBase: path.join(__dirname, 'dist'),
    compress: true, //estamos diciendo si lo queremos comprimir
    historyApiFallback:true,    
    port: 3005,
  },
};
