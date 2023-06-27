import { Configuration } from 'webpack-dev-server';

import { BuildOptions } from './types/config';

// Конфиг сервера
export function buildDevServer(option: BuildOptions): Configuration {
	return {
		port: option.port, // Порт
		open: true, // Открытие по запуску
		historyApiFallback: true, // Позволяет переходить по несуществующим ссылкам
		hot: true, // Позволяет менять контент на странице без перезагрузки
	};
}
