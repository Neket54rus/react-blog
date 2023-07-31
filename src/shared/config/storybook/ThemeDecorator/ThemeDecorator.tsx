import { Story } from '@storybook/react';

import { Theme } from '@/shared/lib/useTheme/ThemeContext';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
	return (
		<body className={`app ${theme}`}>
			<StoryComponent />
		</body>
	);
};
