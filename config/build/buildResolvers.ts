import webpack from 'webpack';

import { BuildOptions } from './types/config';

// Расшерения
export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'], // Типы файлов, при импорте которых мы не указываем расширение
		preferAbsolute: true, // Ипсользование абсолютных импортов
		modules: [options.paths.src, 'node_modules'], // путь до корневой папки
		mainFiles: ['index'], // Обозначаем главный файл
		alias: {}, // Обозначение абсолютного ипорта
	};
};