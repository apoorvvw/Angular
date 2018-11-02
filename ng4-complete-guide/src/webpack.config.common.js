var HtmlWebapck = require('html-webpack-plugin');

module.exports = {
    entry: './src/app/main.ts',
    resolve: {
        extentions: [
            '.js',
            'ts'
        ]
    },
    module:{
        rules: [
            {
                test:/\.html$/,
                loaders: ['html-loader']
            },
            {
                test:/\.css$/,
                loaders: ['raw-loader']
            },
        ],
        exprContextCritical: false
    },
    plugins: [
        new HtmlWebapckPlugin({
            template: 'src/index.html'
        })
    ]
}