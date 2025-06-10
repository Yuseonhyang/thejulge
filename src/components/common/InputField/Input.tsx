import clsx from 'clsx';
import { commonTextInputStyle } from './style/inputFiledStyle';
import { ReactNode } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  rightSlot?: ReactNode;
}

export default function Input({ onChange, className, rightSlot, ...props }: Props) {
  return (
    <div className="flex items-center gap-2 rounded-[10px] md:gap-2.5">
      <input
        placeholder={props.placeholder}
        onChange={onChange}
        {...props}
        className={clsx('h-[58px] rounded-md', commonTextInputStyle, className)}
      />
      {rightSlot && <>{rightSlot}</>}
    </div>
  );
}
