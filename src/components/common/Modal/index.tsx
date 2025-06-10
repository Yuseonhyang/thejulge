import { ReactNode } from 'react';
import ModalContainer from './ModalContainer';
import ModalOverlay from './ModalOverlay';
import DefaultModalFooter from './DefaultModalFooter';
import clsx from 'clsx';
import useModalContext from './core/useModalContext';

interface Props {
  children: ReactNode;
  modalId: string;

  modalContainerClassName?: string;
  defaultFooterText?: string;
  modalFooter?: ReactNode;
}
export default function Modal({ modalId, defaultFooterText = '확인', ...props }: Props) {
  const { closeModal } = useModalContext();

  return (
    <ModalOverlay onClick={() => closeModal(modalId)}>
      <ModalContainer
        className={clsx('flex flex-col items-center gap-8', props.modalContainerClassName)}
      >
        {props.children}
        {!props.modalFooter && <DefaultModalFooter defaultFooterText={defaultFooterText} />}
      </ModalContainer>
    </ModalOverlay>
  );
}
