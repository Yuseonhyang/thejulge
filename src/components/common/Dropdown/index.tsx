import { ReactNode } from 'react';
import useOutSideClickAutoClose from '../../../hooks/useOutsideClickAutoClose';
import clsx from 'clsx';
import { defaultLabelStyle } from '../../../styles/common-label-style';

interface DropDownProps {
  trigger: ReactNode;
  children: (utils: { close: () => void }) => ReactNode;
  label?: string;
}

export default function Dropdown({ trigger, children, label }: DropDownProps) {
  const { isOpen, toggleIsOpen, close, ref } = useOutSideClickAutoClose(false);

  return (
    <div className="flex flex-col gap-2">
      {label && <label className={clsx(defaultLabelStyle)}>{label}</label>}
      <div className="relative" ref={ref}>
        <div className="cursor-pointer" onClick={() => toggleIsOpen()}>
          {trigger}
        </div>
        {isOpen && <> {children({ close })}</>}
      </div>
    </div>
  );
}
