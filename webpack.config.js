const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSASS = new ExtractTextPlugin('app01.css');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: '/Users/dasydow/IdeaProjects/webpack_01/build/public/',
        filename:'webpack_01.js',
        publicPath: 'public/'
    },
    plugins:[
    new UglifyJsPlugin({
        sourceMap:true
    }),
        extractSASS
    ],
    devtool: 'source-map',
    module:{
        rules: [{
            test:/\.scss$/,
            use: extractSASS.extract(['css-loader', 'sass-loader'])
            }]
    }
};