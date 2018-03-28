const webpack = require('webpack');
const path = require('path');

module.exports = {
     entry: './src/index.js',
     output: {
         path: './bundle',
         filename: 'bundle.js'
     },
    resolve: {
    root: [
        path.resolve('.')
    ]
}
};