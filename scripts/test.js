const path = require('path');

let tech = process.argv.pop();
const args = process.argv.slice(2);
if (!['vue'].includes(tech))
{
    args.push(tech);
    tech = 'vue';
}

const cwd = process.cwd();
const root = path.resolve(__dirname, '..');

let config;
if (cwd === root)
{
    config = require(path.resolve(root, 'config', 'jest', tech, 'config.js'));
}
else
{
    config   = require(path.resolve(process.cwd(), 'node_modules', '@am', 'tools', 'config', 'jest', tech, 'config.js'));
}

args.push('--coverage');
// args.push('--debug');
args.push(`--config ${JSON.stringify(config)}`);

// console.log(args);

require('jest').run(args);
