import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildOptions } from './types/config';

// Сборник плагинов для Webpack
export function buildPlugins(option: BuildOptions): webpack.WebpackPluginInstance[] {
	return [
		new webpack.ProgressPlugin(), // Отображает прогресс сборки
		new MiniCssExtractPlugin({ // Создает css файл
			filename: 'css/[name].[contenthash:9].css', // формирования пути и названия файлов
			chunkFilename: 'css/[name].[contenthash:9].css',
		}), // Для корректной сборки css
		new HTMLWebpackPlugin({ // Подключение html
			template: option.paths.html, // Путь, корневого html
		}),
	];
};