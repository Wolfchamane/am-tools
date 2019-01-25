/**
 * Adds leading zeros (up to two (2)) to any text
 *
 * @method  leftPad
 * @param   {String}    value   Value to pad
 * @return  {String}    Padded value
 */
const leftPad = (value = '') => `00${value}`.substr(value.length);

/**
 * Returns an string with its first character into upper case
 *
 * @method  capitalize
 * @param   {String}    value To be capitalized
 * @return  {String}    Capitalized text
 */
const capitalize = (value = '') =>
{
    if (value.length)
    {
        value = `${value[0].toUpperCase()}${value.substr(1)}`;
    }

    return value;
};

/**
 * Turns a character separated word into its camel-case format.
 *
 * @method  camelize
 * @param   {String}    value   To be camelized
 * @param   {String}    sep     Word separator
 * @return  {String}    Camel-case version of value
 */
const camelize = (value = '', sep = '-') =>
{
    value = value.split(sep);
    if (value.length)
    {
        value = value.map((item, index) => index ? capitalize(item) : item).join('');
    }

    return value;
};

export {
    leftPad,
    capitalize,
    camelize
}
