import { ReactNode } from 'react';
import clsx from 'clsx';

interface Props {
  children: ReactNode;

  className?: string;
}
export default function ModalContainer({ children, ...props }: Props) {
  return (
    <div
      className={clsx(
        'w-full min-w-[327px] rounded-lg bg-white px-7 py-7 md:w-full md:max-w-135',
        props.className
      )}
    >
      {children}
    </div>
  );
}
