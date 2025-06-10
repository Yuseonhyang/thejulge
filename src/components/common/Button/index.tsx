import clsx from 'clsx';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large' | 'parent-dependent';
  variant?: 'primary' | 'secondary-red' | 'secondary-gray' | 'secondary-blue' | 'disabled';
}

export default function Button({ onClick, size, variant, ...props }: Props) {
  return (
    <button
      className={clsx(
        'text-md-bold flex items-center justify-center rounded-md',
        {
          'bg-primary text-white': variant === 'primary',
          'border-primary text-primary border-1 bg-white': variant === 'secondary-red',
          'border-gray30 text-primary border-1 bg-white': variant === 'secondary-gray',
          'border-blue20 text-blue20 border-1 bg-white': variant === 'secondary-blue',
          'bg-gray40 text-white': variant === 'disabled',
        },
        {
          'text-xs-rg h-8 w-[82px]': size === 'small',
          'h-[37px] w-27': size === 'medium',
          'h-12 w-30': size === 'large',
          'h-full w-full': size === 'parent-dependent',
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
