import { createContext } from 'react';

export interface ModalState {
  [id: string]: { isOpen: boolean };
}
type ModalContextActions = {
  openModal: (id: string) => void;
  closeModal: (id: string) => void;
  modals: ModalState;
  checkIsModalOpen: (id: string) => boolean;
};

const ModalContext = createContext<ModalContextActions | null>(null);

export default ModalContext;
