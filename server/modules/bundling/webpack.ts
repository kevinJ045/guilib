const webpack = require('webpack');
const path = require('path');
const MemoryFS = require('memory-fs'); // Import the memory-fs module
const fs = require('fs').promises;
const sass = require('sass');

export async function WebpackBuild(filename: string, config: any) {

  return new Promise((resolve, reject) => {
		try {
			const webpackConfig = {
				entry: filename,
				output: {
					filename: 'bundle.js',
					path: '/',
				},
				resolve: {
					modules: [path.resolve('./app/'), path.resolve('./node_modules')],
					extensions: ['.ts', '.js'],
				},
				target: 'web',
				module: {
					rules: [
						{
							test: /\.js?$/,
							exclude: /node_modules|server|public/,
						},
						{
							test: /\.ts?$/,
							use: [
								'babel-loader',
								'ts-loader'
							],
							exclude: /node_modules|server/,
						},
						{
							test: /\.s[ac]ss$/i,
							use: [
								"style-loader",
								"css-loader",
								{
									loader: "sass-loader",
									options: {
										implementation: sass
									},
								},
							],
							exclude: /node_modules|server/,
						},
						{
							test: /\.css$/i,
							use: [
								"style-loader",
								"css-loader",
							],
							exclude: /node_modules|server/,
						}
					]
				},
				...config
			};
	
			// Create an instance of MemoryFS
			const memoryFS = new MemoryFS();
	
			// Attach the memory file system to Webpack
			const compiler = webpack(webpackConfig);
			compiler.outputFileSystem = memoryFS;
	
			// Run Webpack
			compiler.run((err: any, stats: any) => {
				if (err || stats.hasErrors()) {
					console.error(err || stats.toString('errors-only'));
					resolve(err ? err.toString() : stats.toString('errors-only'));
				} else {
					// Read the bundled code from MemoryFS as text
					const bundledCode = memoryFS.readFileSync('/bundle.js', 'utf-8');
	
					
	
					console.log(bundledCode);
	
					resolve(bundledCode);
				}
			});
		} catch (error) {
			console.error(error);
			resolve((error as Error).toString());
		}
	});
}
