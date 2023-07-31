import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Portal } from '@/shared/ui/Portal/Portal';

import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const LoginModal = memo((props: LoginModalProps) => {
    const { className, isOpen = false, onClose } = props;

    return (
        <Portal>
            <Modal
                className={classNames('', {}, [className])}
                isOpen={isOpen}
                onClose={onClose}
            >
                <LoginForm isOpen={isOpen} />
            </Modal>
        </Portal>
    );
});
