const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(_dirname, 'dist'),
        filename: 'bundler.js'
    }
}