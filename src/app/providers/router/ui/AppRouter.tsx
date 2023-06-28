import { Suspense, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = memo(() => {
	const { t } = useTranslation();

	return (
		<Suspense fallback={(
			<h1>
				{t('Загрузка')}
				...
			</h1>
		)}
		>
			<Routes>
				{Object.values(routeConfig).map((route) => (
					<Route
						key={route.path}
						path={route.path}
						element={<div className="page-wrapper">{route.element}</div>}
					/>
				))}
			</Routes>
		</Suspense>
	);
});
