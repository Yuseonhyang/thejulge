import clsx from 'clsx';
import { commonTextInputStyle } from './style/inputFiledStyle';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ onChange, value, type = 'text', className, ...props }: Props) {
  return (
    <input
      placeholder={props.placeholder}
      onChange={onChange}
      {...props}
      className={clsx('h-[58px] rounded-md', commonTextInputStyle, className)}
    />
  );
}
