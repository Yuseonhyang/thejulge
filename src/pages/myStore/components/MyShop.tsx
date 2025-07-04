import { useNavigate } from 'react-router-dom';
import { Shop } from '../types/store';
import { PATHS } from '../../../constants/path';
import Button from '../../../components/common/Button';

interface StoreProps {
  shop: Shop;
}
export default function MyShop({ shop }: StoreProps) {
  const { imageUrl, name, category, address1, description, id } = shop;

  const navigate = useNavigate();

  return (
    <div className="bg-red10 flex w-full flex-col gap-3 rounded-xl border-1 border-none px-5 py-5 md:gap-4 md:px-6 md:py-6 lg:flex-row lg:gap-8">
      <img src={imageUrl} alt="내가게 이미지" className="h-full w-full rounded-xl" />
      <div className="flex h-full w-full flex-col gap-6 md:gap-10 lg:gap-14">
        <div className="flex flex-col gap-2">
          <p className="text-md-bold text-primary md:text-lg-bold">{category}</p>
          <p className="text-2xl-bold md:text-3xl-bold">{name}</p>
          <div className="flex items-center gap-1.5">
            <img src="src/public/icons/address.svg" className="size-4" />
            <p className="text-gray50 text-md-rg md:text-lg-rg">{address1}</p>
          </div>
          <p className="text-md-rg md:text-lg-rg">{description}</p>
        </div>
        <div className="flex h-9.5 gap-2 md:h-12">
          <Button
            variant="secondary-red"
            size="parent-dependent"
            onClick={() => navigate(PATHS.STORE_EDIT)}
          >
            편집하기
          </Button>
          <Button
            variant="primary"
            size="parent-dependent"
            onClick={() => navigate(`${PATHS.NOTICE_REGISTER}?shopId=${id}`)}
          >
            공고 등록하기
          </Button>
        </div>
      </div>
    </div>
  );
}
