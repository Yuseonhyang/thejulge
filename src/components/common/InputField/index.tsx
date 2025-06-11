import { clsx } from 'clsx';
import ImageUploader from './ImageUploader';
import Input from './Input';
import TextArea from './Textarea';
import SearchInput from './SearchInput';
import { PLACEHOLDERS } from '../../../constants/placeholders';
import { InputHTMLAttributes, ReactNode } from 'react';
import { defaultLabelStyle } from '../../../styles/common-label-style';

interface Props extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  inputType: 'textarea' | 'image' | 'input' | 'search';

  label?: string;
  gapsize?: string;
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
    <div
      className={clsx('flex h-full w-full flex-col items-start')}
      style={{ gap: `${props.gapsize}px` }}
    >
      {label && <label className={clsx(defaultLabelStyle)}>{label}</label>}
      <div className="flex h-full w-full flex-col gap-2">
        {renderInputField()}
        {errorMessage && <p className="text-red40 text-xs-rg pl-2">{errorMessage}</p>}
      </div>
    </div>
  );
}
