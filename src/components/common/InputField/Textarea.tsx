import clsx from 'clsx';
import { commonTextInputStyle } from './style/inputFiledStyle';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function TextArea({ onChange, className, ...props }: Props) {
  return (
    <textarea
      name={props.name}
      value={props.value}
      onChange={onChange}
      placeholder={props.placeholder}
      {...props}
      className={clsx(commonTextInputStyle, 'min-h-[153px] rounded-[5px]', className)}
    />
  );
}
