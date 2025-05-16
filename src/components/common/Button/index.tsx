import clsx from 'clsx';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'medium' | 'large' | 'custom';
  variant: 'primary' | 'secondary-red' | 'secondary-blue' | 'disabled';
  customClassName?: string;
}

export default function Button({ onClick, size, variant, customClassName, ...props }: Props) {
  return (
    <button
      className={clsx(
        'rounded-md',
        {
          'text-xs-rg h-8 w-[82px]': size === 'small',
          'text-md-bold h-[37px] w-27': size === 'medium',
          'text-md-bold h-12 w-30': size === 'large',
          customClassName: size === 'custom',
        },
        {
          'bg-primary text-white': variant === 'primary',
          'border-primary text-primary border-1 bg-white': variant === 'secondary-red',
          'border-blue20 text-blue20 border-1 bg-white': variant === 'secondary-blue',
          'bg-gray40 text-white': variant === 'disabled',
        },
        props.className
      )}
      onClick={onClick}
      {...props}
    >
      {props.children}
    </button>
  );
}
