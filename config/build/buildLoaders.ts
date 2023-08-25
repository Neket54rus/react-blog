import webpack from 'webpack';

import { buildSassLoader } from './loaders/buildSassLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { BuildOptions } from './types/config';

// Сборник лоудеров для Webpack
export function buildLoaders(option: BuildOptions): webpack.RuleSetRule[] {
	const typescriptLoader = {
		// Лоудер для TypeScript
		test: /\.tsx?$/, // Расшение
		use: 'ts-loader', // Лоудер для этих файлов
		exclude: /node_modules/, // Исключения
	};

	const sassLoader = buildSassLoader(option.isDev);

	const svgLoader = buildSvgLoader();

	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	const babelLoader = {
		test: /\.(js|jsx|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
				plugins: [option.isDev && require.resolve('react-refresh/babel')].filter(Boolean)
			},
		},
	};

	return [babelLoader, typescriptLoader, sassLoader, svgLoader, fileLoader];
}
