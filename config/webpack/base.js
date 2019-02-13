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
            {
                test : /\.vue$/,
                loader : 'vue-loader'
            },
            {
                test : /\.m?js$/,
                loader : 'babel-loader',
                exclude : /node_modules/,
                type : 'javascript-auto',
                options : {
                    babelrc : false,
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                modules: false
                            }
                        ]
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        '@babel/plugin-transform-modules-commonjs',
                        '@babel/plugin-transform-runtime'
                    ]
                }
            },
            {
                test : /\.pug$/,
                loader : 'pug-plain-loader'
            },
            {
                test : /\.(sa|sc|c)ss$/,
                use : [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
