import { clsx } from 'clsx';
import ImageUploader from './ImageUploader';
import Input from './Input';
import TextArea from './Textarea';

interface Props {
  inputType: 'textarea' | 'image' | 'input';
  onChange: () => void;
  placeholder: string;

  label?: string;
  gapSize?: string;
  className?: string;

  validate?: () => void;
  errorMessage?: string;
}

export default function InputField({
  label,
  inputType,
  errorMessage,
  className = '',
  validate,
  ...props
}: Props) {
  const renderInputField = () => {
    switch (inputType) {
      case 'input':
        return <Input className={className} {...props} />;

      case 'textarea':
        return <TextArea className={className} {...props} />;

      case 'image':
        return <ImageUploader className={className} />;

      default:
        return null;
    }
  };

  return (
    <div className={clsx('flex w-full flex-col items-start', props.gapSize)}>
      {label && <label className="text-lg-rg text-black">{label}</label>}
      <div className="flex flex-col gap-2">
        {renderInputField()}
        {errorMessage && <p className="text-red40 text-xs-rg pl-2">{errorMessage}</p>}
      </div>
    </div>
  );
}
