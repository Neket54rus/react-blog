import ReactRefreshWebpacPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

import { BuildOptions } from './types/config';

// Сборник плагинов для Webpack
export function buildPlugins(option: BuildOptions): webpack.WebpackPluginInstance[] {
	return [
		new webpack.ProgressPlugin(), // Отображает прогресс сборки
		// Нужен для обновления контента на странице без перезагрузки
		option.isDev && new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({
			// Создает css файл
			filename: 'css/[name].[contenthash:9].css', // формирования пути и названия файлов
			// Для корректной сборки css
			chunkFilename: 'css/[name].[contenthash:9].css',
		}),
		// Подключение html
		new HTMLWebpackPlugin({
			template: option.paths.html, // Путь, корневого html
		}),
		// Нужен для использования глобальных переменных в приложении
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(option.isDev),
		}),
		// Нужен для обновления контента на странице без перезагрузки
		option.isDev &&
			new ReactRefreshWebpacPlugin({
				overlay: false,
			}),
	];
}
