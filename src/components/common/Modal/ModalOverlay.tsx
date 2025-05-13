import clsx from 'clsx';
import { ReactNode, useEffect } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  onClick: () => void;
}
export default function ModalOverlay({ children, className, ...props }: Props) {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
  return (
    <div
      className={clsx(
        'fixed inset-0 z-999 flex items-center justify-center bg-black/70',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
