import { memo, useState } from 'react';

import cls from './Counter.module.scss';

export const Counter = memo(() => {
	const [count, setCount] = useState(0);

	const increment = () => setCount((prev) => prev + 1);
	const decrement = () => setCount((prev) => prev - 1);

	return (
		<div>
			<h1>{count}</h1>
			<button className={cls.btn} onClick={increment}>increment</button>
			<button className={cls.btn} onClick={decrement}>decrement</button>
		</div>
	);
});