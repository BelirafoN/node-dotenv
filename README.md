# NodeJS Dot Environments

This library exports all pairs (key=value) from `.env`-file to `process.env`-object.
This makes it very easy to configure your application using the environment variables.

## Install

```bash
$ npm i node-dotenv
```

## Usage

```javascript
"use strict";

const dotEnv = require('node-dotenv')(); //It's enough

//if you want get all vars from .env
dotEnv.then(envVars => console.log(envVars));
```

Example `.env`-file structure:

```
varName1=varVal1
varName2=varVal2

varName3=varVal3
...
varNameN=varValN
...
```

## License

Licensed under the MIT License