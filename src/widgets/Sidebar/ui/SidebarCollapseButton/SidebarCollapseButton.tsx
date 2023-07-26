import { memo } from 'react';

import IconArrow from 'shared/assets/icons/icon-arrow.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

import cls from './SidebarCollapseButton.module.scss';

interface SidebarCollapseButtonProps {
	className?: string
	collapsed?: boolean
	onClick?: () => void
}

export const SidebarCollapseButton = memo((props: SidebarCollapseButtonProps) => {
	const {
		className,
		collapsed = false,
		onClick,
	} = props;

	return (
		<Button
			className={classNames(cls.SidebarCollapseButton, { [cls.collapsed]: collapsed }, [className])}
			onClick={onClick}
			data-testid="toggle-btn"
		>
			<IconArrow className={cls.arrow} />
			<IconArrow className={cls.arrowHover} />
		</Button>
	);
});
