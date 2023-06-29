import path from 'path';

export default {
	clearMocks: true,
	testEnvironment: 'jsdom',
	coveragePathIgnorePatterns: [
		'\\\\node_modules\\\\',
	],
	moduleDirectories: [
		'node_modules',
	],
	moduleFileExtensions: [
		'js',
		'jsx',
		'ts',
		'tsx',
		'json',
		'node',
	],
	modulePaths: [
		'<rootDir>src',
	],
	testMatch: [
		'<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
	],
	rootDir: '../../',
	setupFilesAfterEnv: [
		'<rootDir>config/jest/setupJest.ts',
	],
	moduleNameMapper: {
		'\\.(s?css)$': 'identity-obj-proxy',
		'\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
	},
};