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
        symlinks : false,
        extensions : ['.js', '.vue', '.mjs'],
        alias : {
            vue$: 'vue/dist/vue.js',
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
    ],
    node : {
        setImmediate    : false,
        dgram           : 'empty',
        fs              : 'empty',
        net             : 'empty',
        tls             : 'empty',
        child_process   : 'empty'
    }
};
