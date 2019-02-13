module.exports = {
    test : /\.m?js$/,
    exclude : /node_modules/,
    use : {
        loader : 'babel-loader',
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
    type : 'javascript/auto'
};
