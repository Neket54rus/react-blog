import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { BuildOptions } from './types/config';

// Сборник плагинов для Webpack
export function buildPlugins(option: BuildOptions): webpack.WebpackPluginInstance[] {
	const pluginsList = [
		new webpack.ProgressPlugin(), // Отображает прогресс сборки
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
			__API__: JSON.stringify(option.apiUrl),
			__PROJECT__: JSON.stringify(option.project)
		}),
	];

	if (option.isDev) {
		pluginsList.push(
			// Нужен для обновления контента на странице без перезагрузки
			new webpack.HotModuleReplacementPlugin(),
			// Нужен для присмотра веса сборки
			new BundleAnalyzerPlugin({
				openAnalyzer: false,
			}),
			// Нужен для обновления контента на странице без перезагрузки
			new ReactRefreshWebpackPlugin({
				overlay: false,
			}),
		);
	}

	return pluginsList;
}
