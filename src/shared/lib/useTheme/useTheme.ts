import { useCallback, useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
	toggleTheme: () => void;
	theme: Theme;
}

export function useTheme(): UseThemeResult {
	const { theme, setTheme } = useContext(ThemeContext);

	document.body.className = theme;

	const toggleTheme = useCallback(() => {
		let newTheme: Theme;

		switch (theme) {
		case Theme.LIGHT:
			newTheme = Theme.DARK;
			break;
		default:
			newTheme = Theme.LIGHT;
		}

		setTheme?.(newTheme);
		document.body.className = newTheme;
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	}, [setTheme, theme]);

	return {
		theme: theme || Theme.LIGHT,
		toggleTheme,
	};
}
