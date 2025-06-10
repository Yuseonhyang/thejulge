import { useState, useCallback } from 'react';
import ModalContext, { ModalState } from './ModalContext';

export default function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modals, setModals] = useState<ModalState>({});

  const openModal = (id: string) => {
    setModals((prev) => ({
      ...prev,
      [id]: { isOpen: true },
    }));
  };

  const closeModal = (id: string) => {
    setModals((prev) => ({
      ...prev,
      [id]: { isOpen: false },
    }));
  };

  const checkIsModalOpen = useCallback(
    (id: string) => {
      return modals[id]?.isOpen ?? false;
    },
    [modals]
  );

  return (
    <ModalContext.Provider value={{ openModal, modals, closeModal, checkIsModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
}
