import { FC, useMemo, useState } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '@/shared/lib/useTheme/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
	initialTheme?: Theme
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
	const {
		children,
		initialTheme,
	} = props;

	const [theme, setTheme] = useState(initialTheme || defaultTheme);

	const defaultProps = useMemo(() => ({
		theme,
		setTheme,
	}), [theme]);

	return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
