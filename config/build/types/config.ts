export type BuildMode = 'production' | 'development' // Типы мода сборки

// Интерфейс для путей webpack.config
export interface BuildPath {
	entry: string // entry - главный js файлы
	build: string // build - путь до папки со сборкой
	html: string // html - пусть до корневого html
	src: string // src - путь до корневой папки
}

// Интерфейс для глобальных переменных
export interface BuildEnv {
	mode: BuildMode
	port: number
	apiUrl: string
}

// Интерфейс для опций сборки Webpack
export interface BuildOptions {
	mode: BuildMode
	paths: BuildPath
	isDev: boolean
	port: number
	apiUrl: string
	project: 'storybook' | 'frontend' | 'jest'
}
