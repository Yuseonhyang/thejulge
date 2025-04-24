import { useState } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
}

export default function Input({
  label,
  onChange,
  value,
  placeholder,
  type = 'text',
  className,
  ...rest
}: Props) {
  const [isFailure, setIsFailure] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    rest.onFocus?.(e);
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsBlurred(true);
    setIsFocused(false);
    rest.onBlur?.(e);
  };

  return (
    <div>
      {label && <label>{label}</label>}
      {rest.leftSlot}
      <input onFocus={handleOnFocus} onBlur={handleOnBlur} onChange={onChange} {...rest}></input>
      {rest.rightSlot}
    </div>
  );
}
