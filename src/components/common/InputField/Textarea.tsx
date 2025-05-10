import clsx from 'clsx';
import { commonTextInputStyle } from './ui/inputFiledStyle';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function TextArea({ onChange, placeholder, className, ...props }: Props) {
  return (
    <div>
      <textarea
        name={props.name}
        value={props.value}
        onChange={onChange}
        {...props}
        className={clsx(commonTextInputStyle)}
      />
    </div>
  );
}
