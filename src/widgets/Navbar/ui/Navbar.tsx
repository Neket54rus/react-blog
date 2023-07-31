import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { selectUserAuthData, userActions } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import IconEdit from '@/shared/assets/icons/icon-edit.svg';
import IconNotification from '@/shared/assets/icons/icon-notification.svg';
import iconProfileLogo from '@/shared/assets/icons/icon-profile-logo.png';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
    const { className } = props;

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isAuth = useSelector(selectUserAuthData);
    const [isAuthModal, setAuthModal] = useState(false);

    const onOpenModal = useCallback(() => setAuthModal(true), []);
    const onCloseModal = useCallback(() => setAuthModal(false), []);
    const onLogout = useCallback(
        () => dispatch(userActions.logout()),
        [dispatch],
    );

    if (!isAuth) {
        return (
            <div
                className={classNames(cls.Navbar, {}, [className])}
                data-testid='navbar-non-authorization'
            >
                <Button onClick={onOpenModal} theme={ButtonTheme.OUTLINE}>
                    {t('Войти')}
                </Button>
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.Navbar, {}, [className])}
            data-testid='navbar-authorization'
        >
            <IconEdit />
            <IconNotification />
            <img
                className={cls.logoImg}
                src={iconProfileLogo}
                alt='profile logo'
            />
            <Button theme={ButtonTheme.OUTLINE} onClick={onLogout}>
                {t('Выйти')}
            </Button>
        </div>
    );
});
