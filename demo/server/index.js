import fs from 'fs';
import React from 'react';
import express from 'express';
import path from 'path';
import webpackConfig from '../../webpack/webpack.config.demo.dev';
import colors from 'colors';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';

const webpackCompiler = webpack(webpackConfig);

require.extensions['.html'] = (module, filename) => {
    module.exports = fs.readFileSync(filename, 'utf8');
};

const development = process.env.NODE_ENV !== 'production';
let app = express();

if (development) {
    app.use(webpackMiddleware(webpackCompiler));
    app.use(webpackHotMiddleware(webpackCompiler));
    app.use((request, response) => {
        let wrap = require('../client/index.html')
            .replace(/\$\{css\}/g, '')
            .replace(/\$\{js\}/g, '/bundle.js');

        response.status(200).send(wrap);
    });
} else {
    app.use(express.static(path.join(__dirname, '../demo-built')));
}

app.listen(4000, '0.0.0.0', () => {
    console.log(colors.green(`Redux Autoform started at http://localhost:4000/. NODE_ENV: ${process.env.NODE_ENV}`));
});
