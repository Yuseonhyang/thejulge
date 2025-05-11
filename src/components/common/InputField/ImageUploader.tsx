import clsx from 'clsx';
import { useState } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className: string;
  image: string | null;
}
//@todo : 카메라 이미지 svgr하기

export default function ImageUploader({ className, image, ...props }: Props) {
  const [currentImage, setCurrentImage] = useState<string | null>(image);
  const inputId = 'file-upload';

  const handleChange = (file: any) => {
    setCurrentImage(file);
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
        onChange={handleChange}
        value={props.value}
        {...props}
        className="hidden"
      />
      {currentImage ? (
        <div className="relative h-full w-full">
          <img src={currentImage} alt="previewImage" className="h-full w-full opacity-70" />
          <label
            htmlFor={inputId}
            className="absolute flex flex-col items-center justify-center gap-[11px]"
          >
            <img src="src/public/icons/camera.svg" className="size-8" />
            <p className="text-lg-bold text-white">이미지 변경하기</p>
          </label>
        </div>
      ) : (
        <label htmlFor={inputId} className="flex flex-col items-center justify-center gap-[11px]">
          <img src="src/public/icons/camera.svg" className="size-8" />
          <p className="text-lg-bold text-gray40">이미지 추가하기</p>
        </label>
      )}
    </div>
  );
}
