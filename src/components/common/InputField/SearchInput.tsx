import clsx from 'clsx';
import { ReactNode } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  leftSlot?: ReactNode;
}

export default function SearchInput({ onChange, className, leftSlot, ...props }: Props) {
  return (
    <div className="bg-gray10 flex items-center gap-2 rounded-[10px] px-2 py-2.5 md:gap-2.5 md:px-2.5">
      {leftSlot && <>{leftSlot}</>}
      <input
        placeholder={props.placeholder}
        onChange={onChange}
        {...props}
        className={clsx('w-full border-none', className)}
      />
    </div>
  );
}
