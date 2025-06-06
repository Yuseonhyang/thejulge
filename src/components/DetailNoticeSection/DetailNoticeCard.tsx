import { useNavigate } from 'react-router-dom';
import { Notice } from '../../pages/myStore/types/notice';
import WageComparedToPrev from '../../assets/icons/WageComparedToPrev';
import Button from '../common/Button';
import { PATHS } from '../../constants/path';

interface NoticesCardProps {
  notice: Notice;
  address1: string;
  image: string;
  storeDescription: string;
}
export default function DetailNoticeCard({
  notice,
  address1,
  image,
  storeDescription,
}: NoticesCardProps) {
  const navigate = useNavigate();
  const { hourlyPay, workhour, id } = notice;
  const wageComparedToPrev = '기존 시급보다 50%';

  return (
    <div className="border-gray20 flex w-full flex-col gap-3 rounded-xl border-1 bg-white p-3 md:gap-5 md:p-4 lg:flex-row">
      <img
        src={image}
        alt="내가게 이미지"
        className="h-45 w-full max-w-[539px] md:h-90 lg:h-full"
      />
      <div className="flex h-full w-full flex-col gap-4">
        <p className="text-primary text-md-bold md:text-lg-bold">시급</p>
        <div className="flex items-center gap-1 md:gap-2">
          <p className="text-2lg-bold md:text-2xl-bold">{hourlyPay}원</p>

          <div className="md:bg-red40 flex items-center gap-0.5 md:rounded-[20px] md:px-3 md:py-2">
            <p className="text-xs-rg md:text-md-bold text-red40 md:text-white">
              {wageComparedToPrev}
            </p>
            <WageComparedToPrev width="20" height="20" className="text-red40 md:text-white" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1.5">
            <img src="/src/public/icons/workHours.svg" className="size-4" />
            <p className="md:text-md-rg text-xs-rg gray50">{workhour}</p>
          </div>
          <div className="flex items-center gap-1.5">
            <img src="/src/public/icons/address.svg" className="size-4" />
            <p className="text-xs-rg md:text-md-rg gray30">{address1}</p>
          </div>
          <p>{storeDescription}</p>
          <div className="h-12 w-full">
            <Button
              variant="secondary-red"
              size="parent-dependent"
              onClick={() => navigate(PATHS.NOTICE_EDIT)}
            >
              공고 편집하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
