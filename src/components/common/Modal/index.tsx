import { ReactNode } from 'react';
import ModalContainer from './ModalContainer';
import ModalOverlay from './ModalOverlay';
import DefaultModalFooter from './DefaultModalFooter';

interface Props {
  children: ReactNode;

  defaultFooterText?: string;
  modalFooter?: ReactNode;
}
export default function Modal({ children, defaultFooterText = '확인', ...props }: Props) {
  return (
    <ModalOverlay>
      <ModalContainer className="">
        {children}
        {props.modalFooter && <DefaultModalFooter defaultFooterText={defaultFooterText} />}
      </ModalContainer>
    </ModalOverlay>
  );
}
