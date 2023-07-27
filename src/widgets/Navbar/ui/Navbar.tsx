import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LoginModal } from 'features/AuthByUsername';
import IconEdit from 'shared/assets/icons/icon-edit.svg';
import IconNotification from 'shared/assets/icons/icon-notification.svg';
import iconProfileLogo from 'shared/assets/icons/icon-profile-logo.png';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Portal } from 'shared/ui/Portal/Portal';

import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
	isAuth?: boolean
}

export const Navbar = memo((props: NavbarProps) => {
	const {
		className,
		isAuth = false,
	} = props;

	const [isAuthModal, setAuthModal] = useState(false);
	const { t } = useTranslation();

	const onOpenModal = useCallback(() => setAuthModal(true), []);
	const onCloseModal = useCallback(() => setAuthModal(false), []);

	return (
		<div className={classNames(cls.Navbar, {}, [className])} data-testid="navbar">
			{isAuth ? (
				<>
					<IconEdit />
					<IconNotification />
					<img className={cls.logoImg} src={iconProfileLogo} alt="profile logo" />
				</>
			) : <Button onClick={onOpenModal} theme={ButtonTheme.OUTLINE}>{t('Войти')}</Button>}
			<Portal>
				<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
			</Portal>
		</div>
	);
});
