const path = require('path');
const cwd = process.cwd();
const root = path.resolve(__dirname, '..');

module.exports = {
    testRegex                  : '/tests/[^_].+.m?js$',
    collectCoverageFrom        : ['src/**/*.{mjs,js}', '!**/node_modules/**'],
    coverageDirectory          : '<rootDir>/coverage',
    coveragePathIgnorePatterns : ['/node_modules/'],
    coverageThreshold          : {
        global : {
            branches   : 90,
            functions  : 90,
            lines      : 90,
            statements : -10
        }
    },
    moduleFileExtensions : ['js', 'mjs'],
    moduleNameMapper     : {
        '^%/(.*)$' : `${root}/$1`,
        '^@/(.*)$' : '<rootDir>/src/$1',
        '^#/(.*)$' : '<rootDir>/tests/$1'
    },
    rootDir             : cwd,
    roots               : ['<rootDir>/src', '<rootDir>/tests'],
    transform           : {
        '\\.m?js$' : `${root}/config/babel.js`
    },
    transformIgnorePatterns : ['/node_modules/']
};
