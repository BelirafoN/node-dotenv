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

// or with an explicit file path
dotEnv = require('node-dotenv')('../file/path/to/.env'); //It's enough

//if you want get all vars from .env
dotEnv.then(envVars => console.log(envVars));
``` 

## File path to `.env` 

`.env`-file search stage (places): 

1. parameter passed in the call module;
2. value from environment variable `NODE_DOT_ENV_PATH`;
3. in root directory of your project;
4. as a result of call `dirname(require.main.filename)`.
 
## Example `.env`-file structure:

```
varName1=varVal1
varName2=varVal2

varName3=varVal3
...
varNameN=varValN
...
``` 

## Comments in `.env` 

You can commented some strings of `.env`-file like follow: 

```
varName1=varVal1
#varName2=varVal2
varName3=varVal3
``` 

String started with `#` will not be parse.

## License

Licensed under the MIT License