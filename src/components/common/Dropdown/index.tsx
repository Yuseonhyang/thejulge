import clsx from 'clsx';
import { ReactNode } from 'react';
import useOutSideClickAutoClose from '../../../hooks/use-outside-click-auto-close';

interface DropDownProps {
  trigger: ReactNode;
  children: (utils: { close: () => void }) => ReactNode;

  statement?: string;
  className?: string;
}

export default function Dropdown({
  trigger,
  children,
  statement = 'right-0 left-0',
  className,
  ...props
}: DropDownProps) {
  const { isOpen, toggleIsOpen, close, ref } = useOutSideClickAutoClose(false);

  return (
    <div className="relative" ref={ref}>
      <div className="w-fit cursor-pointer" onClick={() => toggleIsOpen()}>
        {trigger}
      </div>
      {isOpen && (
        <div
          className={clsx(
            'border-gray20 absolute rounded-md border bg-white',
            statement,
            className
          )}
        >
          {children({ close })}
        </div>
      )}
    </div>
  );
}
