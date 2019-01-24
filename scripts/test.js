const config   = require('../src/jest/config');
const argv     = process.argv.slice(2);
if (!argv.includes('--coverage'))
{
    argv.push('--coverage');
}
argv.push('--config', JSON.stringify(config, null, 4));

require('jest').run(argv);
