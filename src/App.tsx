import { Suspense, memo } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { AboutPage } from './pages/AboutPage';
import { MainPage } from './pages/MainPage';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

export const App = memo(() => {
	const {toggleTheme, theme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Switch theme</button>
			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>
			<Suspense fallback={<h1>Loading...</h1>}>
				<Routes>
					<Route path='/about' element={<AboutPage />} />
					<Route path='/' element={<MainPage />} />
					<Route path='*' element={<MainPage />} />
				</Routes>
			</Suspense>
		</div>
	);
});