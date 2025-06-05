import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import WageComparedToPrev from '../../../assets/icons/WageComparedToPrev';

export default function NoticesCard({}) {
  const navigate = useNavigate();
  const image = '';
  const storeName = '식당이름';
  const dailyWorkHours = '2023-06-02 15:00~18:00(3시간)';
  const address = '서울시 관악구';
  const hourlyPay = '15,000';
  const wageComparedToPrev = '기존 시급보다 50%';
  const status = true;
  const id = 1234;

  return (
    <div
      className="border-gray20 flex w-full flex-col gap-3 rounded-xl border-1 bg-white p-3 md:gap-5 md:p-4"
      onClick={() => navigate(`/mystore/posts/${id}`)}
    >
      <div
        className={clsx(
          'relative flex h-full min-h-21 w-full items-center justify-center rounded-xl',
          !status && 'bg-black/70'
        )}
      >
        <p
          className={clsx('text-gray30 text-xl-bold md:text-3xl-bold absolute', status && 'hidden')}
        >
          마감완료
        </p>
        <img src={image} alt="내가게 이미지" className="absolute h-full w-full" />
      </div>
      <div className="flex h-full w-full flex-col gap-4">
        <div className={clsx('flex flex-col gap-2', !status && 'text-gray30')}>
          <p className="text-lg-bold md:text-xl-bold">{storeName}</p>
          <div className="flex items-center gap-1.5">
            <img src="src/public/icons/workHours.svg" className="size-4" />
            <p className={clsx('md:text-md-rg text-xs-rg', status ? 'text-gray50' : 'text-gray30')}>
              {dailyWorkHours}
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <img src="src/public/icons/address.svg" className="size-4" />
            <p className={clsx('text-xs-rg md:text-md-rg', status ? 'text-gray50' : 'text-gray30')}>
              {address}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between">
          <p className={clsx('text-2lg-bold md:text-2xl-bold', !status && 'text-gray30')}>
            {hourlyPay}원
          </p>
          {status && (
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
