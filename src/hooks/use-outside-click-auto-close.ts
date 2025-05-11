import { useEffect, useRef, useState } from 'react';

export default function useOutSideClickAutoClose(initialOpenState: boolean = false) {
  const [isOpen, setIsOpen] = useState(initialOpenState);
  const ref = useRef<HTMLDivElement>(null);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        close();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return {
    isOpen,
    toggleIsOpen,
    open,
    close,
    ref,
  };
}
