import fs from 'fs';
import path from 'path';
import rimraf from 'rimraf-promise';
import fsep from 'fs-extra-promise';
import {exec} from 'child-process-promise';
import 'colors';

require.extensions['.html'] = (module, filename) => {
    module.exports = fs.readFileSync(filename, 'utf8');
};

const repoRoot = path.resolve(__dirname, '../');
const demoBuiltRoot = path.join(repoRoot, 'demo-built');
const demoBuilt = path.join(demoBuiltRoot, 'redux-autoform');

const licenseSrc = path.join(repoRoot, 'LICENSE');
const licenseDest = path.join(demoBuilt, 'LICENSE');

console.log('building demo'.green);

if (process.env.NODE_ENV !== 'production') {
    console.log(`build-docs can only run in production. Current NODE_ENV: ${process.env.NODE_ENV}`.red);
    process.exit();
}

rimraf(demoBuiltRoot)
    .then(() => fsep.mkdir(demoBuiltRoot))
    .then(() => fsep.mkdir(demoBuilt))
    .then(() => {
        console.log('writing static page files...');

        let wrap = require('../demo/client/index.html')
            .replace(/\$\{css\}/g, 'assets/main.css')
            .replace(/\$\{js\}/g, 'assets/bundle.js');

        let demoHtmlPath = path.join(demoBuilt, 'demo.html');

        console.log('finish writing page files...');

        return fsep.writeFile(demoHtmlPath, wrap);
    })
    .then(() => {
        console.log('running webpack on webpack.config.demo.prod.js...');
        return exec(`webpack --config webpack.config.demo.prod.js`);
    })
    .then(() => fsep.copyAsync(licenseSrc, licenseDest))
    .then(() => console.log('demo built'.green))
    .catch(e=> console.log(e));
