import { lazy } from 'react';

export const AboutPageAsync = lazy(() => {
	return new Promise((resolve) => {
	// @ts-ignore
		setTimeout(() => resolve(import('./AboutPage')), 30000);
	});
});
