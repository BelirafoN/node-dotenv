/**
 * Created by BelirafoN on 18/06/16.
 */

"use strict";

const path = require('path');
const readline = require('readline');
const fs = require('fs');
const ENV_FILE_NAME = '.env';

/**
 *
 * @param dotEnvPath
 * @returns {Promise}
 */
module.exports = function(dotEnvPath){
    dotEnvPath = dotEnvPath || null;

    let autoResolvedPath = null,
        mainDirName = path.dirname(require.main.filename),
        relativePath = path.relative(mainDirName, __dirname),
        reversePath = relativePath.match(/^((?:..(?:\/|\\\\))+)/);

    if(reversePath && Array.isArray(reversePath)){
        autoResolvedPath = path.join(mainDirName, reversePath[0] + ENV_FILE_NAME);
    }

    let filePath = dotEnvPath ||
            process.env.NODE_DOT_ENV_PATH ||
            autoResolvedPath ||
            path.join(mainDirName, `./${ENV_FILE_NAME}`);

    return new Promise((resolve, reject) => {
        let reader = readline.createInterface({
                input: fs.createReadStream(filePath)
            }),
            envVars = Object.create(null);

        reader
            .on('line', line => {
                line = line.trim();

                let matches = line.match(/^(.+?)=(.*)$/);
                if(!matches){ return; }

                let key = matches[1].trim();

                if(key){
                    envVars[key] = matches[2].trim();
                }
            })
            .on('close', () => {
                reader.removeAllListeners();
                reader = null;
                resolve(envVars);
            })
            .on('error', reject);
    })
        .then(envVars => {
            Object.assign(process.env, envVars);
            return envVars;
        });
};