import { clsx } from 'clsx';
import ImageUploader from './ImageUploader';
import Input from './Input';
import TextArea from './Textarea';
import SearchInput from './SearchInput';
import { PLACEHOLDERS } from '../../../constants/placeholders';
import { InputHTMLAttributes, ReactNode } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  inputType: 'textarea' | 'image' | 'input' | 'search';

  label?: string;
  gapSize?: string;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;

  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  selectImage?: (value: string) => void;
  validate?: () => void;
  errorMessage?: string;
  image?: string;
}

export default function InputField({
  label,
  inputType,
  errorMessage,
  placeholder = PLACEHOLDERS.default,
  validate,
  image = '',
  ...props
}: Props) {
  const renderInputField = () => {
    switch (inputType) {
      case 'input':
        return <Input placeholder={placeholder} {...props} />;

      case 'textarea':
        return <TextArea placeholder={placeholder} {...props} />;

      case 'image':
        return (
          <ImageUploader
            image={image}
            className={props.className}
            selectImage={props.selectImage}
          />
        );

      case 'search':
        return <SearchInput {...props} />;

      default:
        return null;
    }
  };

  return (
    <form
      className={clsx('flex h-full w-full flex-col items-start')}
      style={{ gap: `${props.gapSize}px` }}
    >
      {label && <label className="text-lg-rg text-black">{label}</label>}
      <div className="flex h-full w-full flex-col gap-2">
        {renderInputField()}
        {errorMessage && <p className="text-red40 text-xs-rg pl-2">{errorMessage}</p>}
      </div>
    </form>
  );
}
