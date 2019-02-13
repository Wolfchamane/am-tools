module.exports = {
    test : /\.vue$/,
    loader : 'vue-loader',
    options : {
        cssSourceMap       : true,
        cacheBusting       : true,
        transformToRequire : {
            image  : 'xlink:href',
            img    : 'src',
            source : 'src',
            video  : ['src', 'poster']
        }
    }
};
