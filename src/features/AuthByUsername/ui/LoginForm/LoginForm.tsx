import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import { Input } from 'shared/ui/Input/Input';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string
	onClose?: () => void
	isOpen?: boolean
}

export const LoginForm = memo((props: LoginFormProps) => {
	const {
		className,
		onClose,
		isOpen,
	} = props;

	const { t } = useTranslation();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const changeUsername = (value: string) => setUsername(value);
	const changePassword = (value: string) => setPassword(value);

	const submit = () => {
		if (onClose) {
			setUsername('');
			setPassword('');
			onClose();
		}
	};

	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<Input
				placeholder={t('Введите имя')}
				value={username}
				onChange={changeUsername}
				autofocus={isOpen}
			/>
			<Input
				placeholder={t('Введите пароль')}
				type="password"
				value={password}
				onChange={changePassword}
			/>
			<Button
				className={cls.btn}
				theme={ButtonTheme.OUTLINE}
				disabled={(username && password) === ''}
				onClick={submit}
			>
				{t('Войти')}

			</Button>
		</div>
	);
});
