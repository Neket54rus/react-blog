import webpack from 'webpack';

// Расшерения
export function buildResolvers(): webpack.ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'], // Типы файлов, при импорте которых мы не указываем расширение
	};
};