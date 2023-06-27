import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

import { BuildOptions } from './types/config';

// Сборник лоудеров для Webpack
export function buildLoaders(option: BuildOptions): webpack.RuleSetRule[] {
	const typescriptLoader = {
		// Лоудер для TypeScript
		test: /\.tsx?$/, // Расшение
		use: 'ts-loader', // Лоудер для этих файлов
		exclude: /node_modules/, // Исключения
	};

	const sassLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			option.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						// Позволяет работать с css модулями
						// Генерация модульных стилей только на файлы .module.
						auto: (resPath: string) => Boolean(resPath.includes('.module.')),
						localIdentName: option.isDev ? '[name]__[local]' : '[hash:base64:8]', // Генерация названий
					},
				},
			},
			'sass-loader',
		],
		exclude: /node_modules/,
	};

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	};

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
			},
		},
	};

	return [babelLoader, typescriptLoader, sassLoader, svgLoader, fileLoader];
}
