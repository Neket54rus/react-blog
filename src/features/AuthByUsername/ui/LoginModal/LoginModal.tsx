import { Suspense, memo } from 'react';

import { Loader } from '@/shared/ui/Loader/Loader';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Portal } from '@/shared/ui/Portal/Portal';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const LoginModal = memo((props: LoginModalProps) => {
    const { className, isOpen = false, onClose } = props;

    return (
        <Portal>
            <Modal className={className} isOpen={isOpen} onClose={onClose} lazy>
                <Suspense fallback={<Loader />}>
                    <LoginFormAsync isOpen={isOpen} />
                </Suspense>
            </Modal>
        </Portal>
    );
});
