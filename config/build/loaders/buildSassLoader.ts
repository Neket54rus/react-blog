import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildSassLoader(isDev: boolean) {
	return {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						// Позволяет работать с css модулями
						// Генерация модульных стилей только на файлы .module.
						auto: (resPath: string) => Boolean(resPath.includes('.module.')),
						localIdentName: isDev ? '[name]__[local]' : '[hash:base64:8]', // Генерация названий
					},
				},
			},
			'sass-loader',
		],
		exclude: /node_modules/,
	};
}
