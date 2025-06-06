import { ReactNode } from 'react';
import useOutSideClickAutoClose from '../../../hooks/useOutsideClickAutoClose';

interface DropDownProps {
  trigger: ReactNode;
  children: (utils: { close: () => void }) => ReactNode;
}

export default function Dropdown({ trigger, children }: DropDownProps) {
  const { isOpen, toggleIsOpen, close, ref } = useOutSideClickAutoClose(false);

  return (
    <div className="relative" ref={ref}>
      <div className="cursor-pointer" onClick={() => toggleIsOpen()}>
        {trigger}
      </div>
      {isOpen && <> {children({ close })}</>}
    </div>
  );
}
