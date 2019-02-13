module.exports = {
    test    : /\.sass$/,
    exclude : /node_modules/,
    use     : [
        'vue-style-loader',
        {
            loader  : 'css-loader',
            options : {
                sourceMap : true
            }
        },
        'postcss-loader',
        {
            loader  : 'sass-loader',
            options : {
                sourceMap       : true,
                indentedSyntax  : true
            }
        }
    ]
};
