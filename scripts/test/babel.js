const path = require('path');
const fs = require('fs');
const babelCore = require('babel-core');
const crypto = require('crypto');

const babelrc = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', '..', '.babelrc')).toString());
Object.assign(babelrc, {
    babelrc    : false,
    sourceMaps : true
});

const strOpt = JSON.stringify(babelrc);

/**
 * Compila un archivo ES usando Babel.
 *
 * @param {String}  dir         Ruta del directorio donde se encuentra el archivo.
 * @param {String}  name        Nombre del archivo.
 * @param {Object}  options     Configuración de Babel.
 * @param {Boolean} addIstanbul Si es `true` se agrega el plugin de istanbul.
 *
 * @return {Object|null} Resultado de la compilación.
 */
const compileJs = (dir, name, options, addIstanbul = true) =>
{
    const _filename = path.join(dir, name);
    if (addIstanbul)
    {
        const _plugins = options.plugins;
        if (Array.isArray(_plugins))
        {
            if (!_plugins.includes('istanbul'))
            {
                options.plugins = ['istanbul', ..._plugins];
            }
        }
        else
        {
            options.plugins = ['istanbul'];
        }
    }

    return fs.existsSync(_filename) ? babelCore.transformFileSync(_filename, options) : null;
};

/**
 * Construye la clave del caché de Jest.
 *
 * @param {String} fileContent  Contenido del archivo.
 * @param {String} filename     Ruta del archivo siendo procesado.
 * @param {String} config       Configuración serializada.
 * @param {String} cacheOptions Opciones del caché.
 *
 * @return {String} Hash a usar como clave del caché.
 */
const getCacheKey = (fileContent, filename, config, cacheOptions) =>
{
    return crypto
        .createHash('md5')
        .update(__filename)
        .update('\0', 'utf8')
        .update(fileContent)
        .update('\0', 'utf8')
        .update(path.relative(cacheOptions.rootDir, filename))
        .update('\0', 'utf8')
        .update(config)
        .update('\0', 'utf8')
        .update(strOpt)
        .update('\0', 'utf8')
        .update(cacheOptions.instrument ? 'instrument' : '')
        .digest('hex');
};

module.exports = {
    canInstrument : false,
    getCacheKey,
    /**
     * @override
     */
    process(src, filename /* , config, transformOptions*/)
    {
        return compileJs(
            path.dirname(filename),
            path.basename(filename),
            Object.assign({}, babelrc),
            false
        );
    }
}
