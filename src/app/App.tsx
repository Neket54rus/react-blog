import { Suspense, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { AppRouter } from './providers/router';

export const App = memo(() => {
	return (
		<div className={classNames('app', {}, [])}>
			<Suspense fallback="">
				<div className="content-page">
					<Sidebar />
					<AppRouter />
				</div>
				<Navbar />
			</Suspense>
		</div>
	);
});
