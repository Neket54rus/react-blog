import { memo } from 'react';
// import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
	const { className } = props;

	// const { t } = useTranslation();

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				/
			</div>
		</div>
	);
});
