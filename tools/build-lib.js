import path from 'path';
import fsep from 'fs-extra-promise';
import rimraf from 'rimraf-promise';
import colors from 'colors';
import { exec } from 'child-process-promise';

const repoRoot = path.resolve(__dirname, '../');
const lib = path.join(repoRoot, 'lib');
const lessSrc = path.join(repoRoot, '/src/styles');
const lessDest = path.join(lib, '/styles');

console.log('building lib'.green);

rimraf(lib)
    .then((error) => {
        let babelCli = '"./node_modules/.bin/babel" src -d lib';
        return exec(babelCli).fail((error) => console.log(colors.red(error)));
    })
    .then(() => fsep.copyAsync(lessSrc, lessDest))
    .then(() => console.log('lib built'.green));
