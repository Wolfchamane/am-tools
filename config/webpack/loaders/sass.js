module.exports = {
    test    : /\.(sa|sc|c)ss$/,
    exclude : /node_modules/,
    use     : [
        'style-loader',
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
