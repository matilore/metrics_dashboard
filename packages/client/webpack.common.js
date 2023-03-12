const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.tsx',
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
         },
         {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        },
         {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'ts-loader'
         }
      ]
   },
   resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
   plugins:[
       new HtmlWebpackPlugin({
            template: path.join(__dirname,'/src/index.html')
       }) 
   ]
}