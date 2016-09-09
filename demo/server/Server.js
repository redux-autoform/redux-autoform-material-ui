import fs from 'fs';
import Express, { Router } from 'express';
import path from 'path';
import config from '../../webpack.config.demo.dev';
import colors from 'colors';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import multer from 'multer';

class Server {
	static isDevelopment() {
		return process.env.NODE_ENV !== 'production';
	}

	static getStorage() {
		const storage = multer.diskStorage({
			destination: (request, file, callback) => {
				callback(null, "./demo/uploads");
			},
			filename: (request, file, callback) => {
				callback(null, file.originalname + '-' + Date.now())
			}
		});

		return multer({storage});
	}

	static init() {
		const webpackCompiler = webpack(config);
		const app = new Express();
		const router = new Router();
		const upload = this.getStorage();

		require.extensions['.html'] = (module, filename) => {
			module.exports = fs.readFileSync(filename, 'utf8');
		};

		router.post("/upload", (request, response) => {
			upload.array("fileData")(request, response, (err) => {
				if(err) {
					response.json({status: false, message: "There was an error while uploading files."});
					return;
				}

				response.json({status: true, message: "Files correctly uploaded."});
			})
		});

		app.use(router);

		if (this.isDevelopment()) {
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