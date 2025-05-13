import { ReactNode } from 'react';
import useOutSideClickAutoClose from '../../../hooks/use-outside-click-auto-close';

interface DropDownProps {
  trigger: ReactNode;
  children: (utils: { close: () => void }) => ReactNode;
}

export default function Dropdown({ trigger, children }: DropDownProps) {
  const { isOpen, toggleIsOpen, close, ref } = useOutSideClickAutoClose(false);

  return (
    <div className="relative w-fit" ref={ref}>
      <div className="w-fit cursor-pointer" onClick={() => toggleIsOpen()}>
        {trigger}
      </div>
      {isOpen && <> {children({ close })}</>}
    </div>
  );
}
