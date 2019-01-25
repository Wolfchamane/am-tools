# am-tools

> Provides different development tools

[![NPM](https://nodei.co/npm/am-tools.png)](https://www.npmjs.com/package/am-tools)

## Installation

```bash
$ npm i --save am-tools
```

## Data tools

### String

Common shared/used methods for manipulating String values.

```javascript
// ES6 file
import { leftPad, capitalize, camelize } from 'am-tools/src/string';

console.log(leftPad('2')); // '02'
console.log(capitalize('hello')); // 'Hello'
console.log(camelize('hello-world')); // 'helloWorld'
```

## Package tools

### Testing

Runs tests with `Jest`, `Babel` and `Instanbul`.

Add into `package.json`: 
```json
{
    "scripts": "NODE_ENV=testing node node_modules/am-tools/scripts/test.js --no-cache"
}
```

Run:
```bash
$ npm run test
```
