import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildOptions } from './types/config';

// Сборник лоудеров для Webpack
export function buildLoaders(option: BuildOptions): webpack.RuleSetRule[] {
	const typescriptLoader = { // Лоудер для TypeScript
		test: /\.tsx?$/, // Расшение
		use: 'ts-loader', // Лоудер для этих файлов
		exclude: /node_modules/, // Исключения
	};

	const sassLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			option.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: "css-loader",
				options: {
					modules: { // Позволяет работать с css модулями
						// Генерация модульных стилей только на файлы .module.
						auto: (resPath: string) => Boolean(resPath.includes('.module.')), 
						localIdentName: option.isDev ? '[name]__[local]' : '[hash:base64:8]', // Генерация названий
					}
				} ,
			},
			"sass-loader",
		],
		exclude: /node_modules/,
	};

	return [ 
		typescriptLoader,
		sassLoader,
	];
};