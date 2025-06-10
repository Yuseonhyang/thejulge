import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import useModalContext from './useModalContext';

interface ModalPortalProps {
  children: React.ReactNode;
  modalId: string;

  containerId?: string;
}

export default function ModalPortal({
  children,
  modalId,
  containerId = 'modal-root',
}: ModalPortalProps) {
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const { checkIsModalOpen } = useModalContext();

  useEffect(() => {
    let el = document.getElementById(containerId);

    if (!el) {
      el = document.createElement('div');
      el.id = containerId;
      document.body.appendChild(el);
    }

    setContainer(el);
  }, [containerId]);

  if (!container || !checkIsModalOpen(modalId)) return null;

  return createPortal(
    typeof children === 'function' ? (children as () => React.ReactNode)() : children,
    container
  );
}
