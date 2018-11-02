var path = require('path');

var webpeckMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common');

module.exports = webpeckMerge(commonConfig,{
    devtool: 'cheap-eval-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {loader: 'awesome-typescript-loader', options: {
                        traspileOnly: true
                    }},
                    { loader: 'angualr2-template-loader' },
                    { loader: 'angular-router-loader' }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});