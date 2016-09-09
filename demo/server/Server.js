import fs from 'fs';
import React from 'react';
import Express from 'express';
import path from 'path';
import webpackConfig from '../../webpack.config.demo.dev';
import colors from 'colors';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';

class Server {
	static webpackCompiler = webpack(webpackConfig);
	static isDevelopment = process.env.NODE_ENV !== 'production';
	static app = Express();

	static doInit() {
		this.init(this.app, this.isDevelopment, this.webpackCompiler);
	}

	static init(app, isDevelopment, webpackCompiler) {
		require.extensions['.html'] = (module, filename) => {
			module.exports = fs.readFileSync(filename, 'utf8');
		};

		if (isDevelopment) {
			app.use(webpackMiddleware(webpackCompiler));
			app.use(webpackHotMiddleware(webpackCompiler));
			app.use((request, response) => {
				let wrap = require('../client/index.html')
					.replace(/\$\{css\}/g, '')
					.replace(/\$\{js\}/g, '/bundle.js');

				response.status(200).send(wrap);
			});
		} else {
			app.use(Express.static(path.join(__dirname, '../demo-built')));
		}

		app.listen(4000, '0.0.0.0', () => {
			console.log(colors.green(`Redux Autoform started at http://localhost:4000/. NODE_ENV: ${process.env.NODE_ENV}`));
		});

	}
}

export default Server;