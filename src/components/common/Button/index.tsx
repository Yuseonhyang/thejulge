import clsx from 'clsx';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary-red' | 'secondary-blue' | 'disabled';
}

export default function Button({ onClick, size, variant, disabled, ...rest }: Props) {
  return (
    <button
      className={clsx(
        'rounded-md',
        {
          'text-xs-rg h-8 w-[82px]': size === 'small',
          'text-md-bold h-[37px] w-27': size === 'medium',
          'text-lg-bold h-12 w-full': size === 'large',
        },
        {
          'bg-primary text-white': variant === 'primary',
          'border-primary text-primary border-1 bg-white': variant === 'secondary-red',
          'border-blue20 text-blue20 border-1 bg-white': variant === 'secondary-blue',
          'bg-gray40 text-white': variant === 'disabled',
        },
        rest.className
      )}
      onClick={onClick}
      {...rest}
    >
      {rest.children}
    </button>
  );
}
