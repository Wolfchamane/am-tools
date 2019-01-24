const common = require('../common');
const path = require('path');

module.exports = {
    canInstrument : false,
    getCacheKey   : common.getCacheKey,
    /**
     * @override
     */
    process(src, filename /* , config, transformOptions*/)
    {
        return common.compileJs(
            path.dirname(filename),
            path.basename(filename),
            Object.assign({}, common.babelrc),
            false
        );
    }
}
