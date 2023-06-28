import { Suspense, memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = memo(() => {
	return (
		<Suspense fallback={(<PageLoader />)}>
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
