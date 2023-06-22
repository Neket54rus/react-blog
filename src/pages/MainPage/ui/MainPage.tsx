import { memo } from 'react';

import { Counter } from '../../../components/Counter';

const MainPage = memo(() => {
	return (
		<div>
			<Counter />
		</div>
	)
});

export default MainPage;