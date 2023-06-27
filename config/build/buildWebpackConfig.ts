import webpack from 'webpack';

import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

// Полная конфигурация webpack
export function buildWebpackConfig(option: BuildOptions): webpack.Configuration {
	return {
		mode: option.mode, // development || production
		entry: option.paths.entry, // Главный JS файл
		output: {
			filename: '[name].[contenthash].js', // Название готового JS файла
			path: option.paths.build, // Путь, куда будет собираться проект
			clean: true, // Очищать папку с готовым проектом перед сборкой
		},
		plugins: buildPlugins(option), // Плагины для Webpack
		module: {
			rules: buildLoaders(option), // Обработка лоудеров. Лоудер - файл, который выходит за рамки JS
		},
		resolve: buildResolvers(option), // Расшерения
		devtool: option.isDev ? 'inline-source-map' : undefined, // Помогает отслеживать ошибки в большом колличестве файлов
		devServer: option.isDev ? buildDevServer(option) : undefined, // Работа с серверов в режиме разработки
	};
}
