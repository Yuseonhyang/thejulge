import { Application } from '../../pages/noticeIdPage/types/applications';
import Badge from './Badge';

export function TableHeader() {
  return (
    <li className="md:text-md-rg bg-red10 border-gray20 flex h-10 w-full items-center justify-between rounded-t-xl border-b-1 text-sm md:h-12.5">
      <p className="w-[189px] px-3 md:w-57">가게</p>
      <p className="hidden w-full px-3 md:block lg:w-75">일자</p>
      <p className="hidden px-3 lg:block lg:w-50">시급</p>
      <p className="w-40.5 px-3 md:w-55">상태</p>
    </li>
  );
}

export function TableRowItem({ application }: { application: Application }) {
  const { name: storeName } = application.item.shop.item;
  const { hourlyPay } = application.item.notice.item;
  const status = application.item.status;

  const time = '2023.01.02~~~~ 2023.01.02~~~~ 2023.01.02~~~~ 2023.01.02~~~~ 2023.01.02~~~~ ';
  return (
    <li className="md:text-md-rg border-gray20 flex h-11.5 w-full items-center justify-between border-b-1 text-sm md:h-16">
      <p className="w-[189px] px-3 md:w-57">{storeName}</p>
      <p className="hidden w-full truncate px-3 md:block lg:w-75">{time}</p>
      <p className="hidden px-3 lg:block lg:w-50">{hourlyPay}원</p>
      <div className="border-gray20 w-40.5 border-l-1 md:w-55 lg:border-none">
        <div className="px-3">
          <Badge status={status} />
        </div>
      </div>
    </li>
  );
}
