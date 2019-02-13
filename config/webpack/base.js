const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode    : 'development',
    entry   : {
        app : './src/index.js'
    },
    output : {
        filename : '[name].js',
        path  : path.resolve('static'),
        publicPath : '/'
    },
    resolve : {
        symlinks : true,
        extensions : ['.js', '.vue', '.mjs'],
        alias : {
            '@' : path.resolve('src')
        }
    },
    module : {
        rules : [
            require('./loaders/vue'),
            require('./loaders/babel'),
            require('./loaders/pug'),
            require('./loaders/sass')
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
