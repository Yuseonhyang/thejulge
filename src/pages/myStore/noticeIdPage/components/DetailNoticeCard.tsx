import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { Notice } from '../../types/notice';
import WageComparedToPrev from '../../../../assets/icons/WageComparedToPrev';

interface NoticesCardProps {
  notice: Notice;
  name: string;
  address1: string;
  image: string;
}
export default function DetailNoticeCard({ notice, name, address1, image }: NoticesCardProps) {
  const { hourlyPay, workhour, closed, id } = notice;
  const navigate = useNavigate();
  const wageComparedToPrev = '기존 시급보다 50%';

  return (
    <div
      className="border-gray20 flex w-full flex-col gap-3 rounded-xl border-1 bg-white p-3 md:gap-5 md:p-4"
      onClick={() => navigate(`/${id}`)}
    >
      <div
        className={clsx(
          'relative flex h-full min-h-21 w-full items-center justify-center rounded-xl',
          closed && 'bg-black/70'
        )}
      >
        <p
          className={clsx(
            'text-gray30 text-xl-bold md:text-3xl-bold absolute',
            !closed && 'hidden'
          )}
        >
          마감완료
        </p>
        <img src={image} alt="내가게 이미지" className="absolute h-full w-full" />
      </div>
      <div className="flex h-full w-full flex-col gap-4">
        <div className={clsx('flex flex-col gap-2', closed && 'text-gray30')}>
          <p className="text-lg-bold md:text-xl-bold">{name}</p>
          <div className="flex items-center gap-1.5">
            <img src="src/public/icons/workHours.svg" className="size-4" />
            <p
              className={clsx('md:text-md-rg text-xs-rg', !closed ? 'text-gray50' : 'text-gray30')}
            >
              {workhour}
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <img src="src/public/icons/address.svg" className="size-4" />
            <p
              className={clsx('text-xs-rg md:text-md-rg', !closed ? 'text-gray50' : 'text-gray30')}
            >
              {address1}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between">
          <p className={clsx('text-2lg-bold md:text-2xl-bold', closed && 'text-gray30')}>
            {hourlyPay}원
          </p>
          {!closed && (
            <div className="md:bg-red40 flex items-center gap-0.5 md:rounded-[20px] md:px-3 md:py-2">
              <p className="text-xs-rg md:text-md-bold text-red40 md:text-white">
                {wageComparedToPrev}
              </p>
              <WageComparedToPrev width="20" height="20" className="text-red40 md:text-white" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
