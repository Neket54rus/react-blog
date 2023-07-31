import webpack from 'webpack';

import { type BuildOptions } from './types/config';

// Расширения
export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'], // Типы файлов, при импорте которых мы не указываем расширение
		preferAbsolute: true, // Использование абсолютных импортов
		modules: [options.paths.src, 'node_modules'], // путь до корневой папки
		mainFiles: ['index'], // Обозначаем главный файл
		// Обозначение абсолютного импорта
		alias: {
			'@': options.paths.src,
		},
	};
}
