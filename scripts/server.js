#!//usr/bin/env node

process.argv.push(
    '--inline',
    '--progress',
    '--config',
    path.resolve(process.cwd(), 'node_modules', 'am-tools', 'config', 'webpack', 'dev')
);

require('webpack-dev-server/bin/webpack-dev-server');
