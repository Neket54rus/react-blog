import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
	toggleTheme: () => void
	theme: Theme
}

export function useTheme(): UseThemeResult {
	const {theme, setTheme} = useContext(ThemeContext);

	const toggleTheme = () => {
		switch (theme) {
			case Theme.LIGHT:
				setTheme(Theme.DARK);
				localStorage.setItem(LOCAL_STORAGE_THEME_KEY, Theme.DARK);
				return;
			default:
				setTheme(Theme.LIGHT);
				localStorage.setItem(LOCAL_STORAGE_THEME_KEY, Theme.LIGHT);
				return;
		};
	};

	return {toggleTheme, theme};
};