import clsx from 'clsx';
import { useState } from 'react';
import ImageUploaderIcon from '../../../assets/ImageUploaderIcon';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className: string;
  image: string | null;
}

export default function ImageUploader({ className, image, onChange, ...props }: Props) {
  const [currentImage, setCurrentImage] = useState<string | null>(image);
  const inputId = 'file-upload';

  const getBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string); // base64 string
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const formattedImage = await getBase64(file);
      setCurrentImage(formattedImage);
    } catch (error) {
      console.error('이미지 변환 실패:', error);
      setCurrentImage(null);
      //@todo : 에러 핸들링
    }
  };

  return (
    <div
      className={clsx(
        'border-gray30 bg-gray10 flex h-[276px] w-[483px] items-center justify-center rounded-[5px] border-1',
        className
      )}
    >
      <input
        id={inputId}
        type="file"
        onChange={handleImageUpload}
        value={props.value}
        {...props}
        className="hidden"
      />
      {currentImage ? (
        <div className="relative h-full w-full">
          <img src={currentImage} alt="previewImage" className="h-full w-full bg-black/70" />
          <label
            htmlFor={inputId}
            className="absolute top-[calc(50%-15px)] left-[calc(50%-54px)] flex h-15 w-27 flex-col items-center justify-center gap-[11px]"
          >
            <ImageUploaderIcon className="text-white" />
            <p className="text-lg-bold text-white">이미지 변경하기</p>
          </label>
        </div>
      ) : (
        <label htmlFor={inputId} className="flex flex-col items-center justify-center gap-[11px]">
          <ImageUploaderIcon className="text-gray40" />
          <p className="text-lg-bold text-gray40">이미지 추가하기</p>
        </label>
      )}
    </div>
  );
}
