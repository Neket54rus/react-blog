import { memo } from 'react';

import './Loader.scss';

export const Loader = memo(() => {
	return (
		<div className="lds-ellipsis" data-testid="loader">
			<div />
			<div />
			<div />
			<div />
		</div>
	);
});
