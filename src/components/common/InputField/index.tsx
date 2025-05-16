import { clsx } from 'clsx';
import ImageUploader from './ImageUploader';
import Input from './Input';
import TextArea from './Textarea';
import SearchInput from './SearchInput';
import { ReactNode } from 'react';

interface Props {
  inputType: 'textarea' | 'image' | 'input' | 'search';
  onChange: () => void;

  placeholder?: string;
  label?: string;
  gapSize?: string;
  className?: string;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;

  validate?: () => void;
  errorMessage?: string;
  image?: string;
  value?: string | readonly string[] | number | undefined;
}

export default function InputField({
  label,
  inputType,
  errorMessage,
  className = '',
  validate,
  image = '',
  ...props
}: Props) {
  const renderInputField = () => {
    switch (inputType) {
      case 'input':
        return <Input className={className} {...props} />;

      case 'textarea':
        return <TextArea className={className} {...props} />;

      case 'image':
        return <ImageUploader onChange={props.onChange} image={image} className={className} />;

      case 'search':
        return <SearchInput className={className} {...props} />;

      default:
        return null;
    }
  };

  return (
    <div className={clsx('flex h-full w-full flex-col items-start', props.gapSize)}>
      {label && <label className="text-lg-rg text-black">{label}</label>}
      <div className="flex h-full w-full flex-col gap-2">
        {renderInputField()}
        {errorMessage && <p className="text-red40 text-xs-rg pl-2">{errorMessage}</p>}
      </div>
    </div>
  );
}
