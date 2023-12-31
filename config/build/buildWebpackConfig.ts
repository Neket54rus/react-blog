import webpack from 'webpack';

import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';

// Полная конфигурация webpack
export function buildWebpackConfig(option: BuildOptions): webpack.Configuration {
	return {
		mode: option.mode, // development || production
		entry: option.paths.entry, // Главный JS файл
		output: {
			filename: '[name].[contenthash].js', // Название готового JS файла
			path: option.paths.build, // Путь, куда будет собираться проект
			clean: true, // Очищать папку с готовым проектом перед сборкой
			publicPath: '/' // Нужно для корректной работы страниц
		},
		plugins: buildPlugins(option), // Плагины для Webpack
		module: {
			rules: buildLoaders(option), // Обработка лоудеров. Лоудер - файл, который выходит за рамки JS
		},
		resolve: buildResolvers(option), // Расширения
		devtool: option.isDev ? 'inline-source-map' : undefined, // Помогает отслеживать ошибки в большом количестве файлов
		devServer: option.isDev ? buildDevServer(option) : undefined, // Работа с серверов в режиме разработки
	};
}
