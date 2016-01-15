var webpack = require( 'webpack' );

module.exports = {
    entry: [ './src' ],
    output: {
        path: __dirname + '/',
        filename: 'ractive-hamburger.min.js',
        library: 'RactiveHamburger',
        libraryTarget: 'umd'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false }
      })
    ],
    module: {
        loaders: [
            { test: /\.scss$/, loaders: ["style", "css", "sass"] },
            { test: /\.html$/, loader: 'ractive' }
        ]
    }
};