#!//usr/bin/env node

const chalk = require('chalk');
const path = require('path');

const tech = process.argv.pop();

if (['vue'].includes(tech))
{
    process.argv.push(
        '--inline',
        '--progress',
        '--config',
        path.resolve(process.cwd(), 'node_modules', '@am', 'tools', 'config', 'webpack', tech, 'dev')
    );

    console.log(`Running ${chalk.blue(tech)} webpack config for development`);
    require('webpack-dev-server/bin/webpack-dev-server');
}
else
{
    console.error(`[${chalk.red.bold(tech)}] is not valid`);
}
