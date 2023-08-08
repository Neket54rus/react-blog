import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text';

import { selectLoginError } from '../../model/selectors/selectLoginError/selectLoginError';
import { selectLoginLoading } from '../../model/selectors/selectLoginLoading/selectLoginLoading';
import { selectLoginPassword } from '../../model/selectors/selectLoginPassword/selectLoginPassword';
import { selectLoginUsername } from '../../model/selectors/selectLoginUsername/selectLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    isOpen?: boolean;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
    const { className, isOpen } = props;

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(selectLoginUsername);
    const password = useSelector(selectLoginPassword);
    const isLoading = useSelector(selectLoginLoading);
    const error = useSelector(selectLoginError);

    const changeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const changePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const submit = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div
                className={classNames(cls.LoginForm, {}, [className])}
                data-testid='LoginForm'
            >
                <Text className={cls.title} size={TextSize.M} center>
                    {t('Форма авторизации')}
                </Text>
                {error && (
                    <Text className={cls.error} theme={TextTheme.ERROR} center>
                        {t('Произошла ошибка при входе')}
                    </Text>
                )}
                <Input
                    placeholder={t('Введите имя')}
                    value={username}
                    onChange={changeUsername}
                    autofocus={isOpen}
                    disabled={isLoading}
                />
                <Input
                    placeholder={t('Введите пароль')}
                    type='password'
                    value={password}
                    onChange={changePassword}
                    disabled={isLoading}
                />
                <Button
                    className={cls.btn}
                    theme={ButtonTheme.OUTLINE}
                    disabled={(username && password) === '' || isLoading}
                    onClick={submit}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
