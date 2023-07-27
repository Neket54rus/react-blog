import { MouseEvent, ReactNode, memo, useCallback, useEffect } from 'react';

import { Mods, classNames } from 'shared/lib/classNames/classNames';

import cls from './Modal.module.scss';

interface ModalProps {
	className?: string
	children: ReactNode
	isOpen?: boolean
	onClose?: () => void
}

export const Modal = memo((props: ModalProps) => {
	const {
		className,
		children,
		isOpen = false,
		onClose,
	} = props;

	const closeHandler = useCallback(() => {
		if (onClose) onClose();
	}, [onClose]);

	const onContentClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
	}, []);

	const onKeyDown = useCallback((event: KeyboardEvent) => {
		if (event.key === 'Escape') closeHandler();
	}, [closeHandler]);

	useEffect(() => {
		if (isOpen) window.addEventListener('keydown', onKeyDown);

		return () => window.removeEventListener('keydown', onKeyDown);
	}, [isOpen, onKeyDown]);

	const mods: Mods = {
		[cls.opened]: isOpen,
	};

	return (
		<div className={classNames(cls.Modal, mods, [className])}>
			<div className={cls.overlay} onClick={closeHandler}>
				<div className={cls.content} onClick={onContentClick}>
					{children}
				</div>
			</div>
		</div>
	);
});
