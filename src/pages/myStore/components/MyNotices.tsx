import { Notices } from '../types/notice';
import { Shop } from '../types/store';
import NoticesCard from './NoticesCard';

interface MyNoticesProps {
  notices: Notices;
  shop: Shop;
}
export default function MyNotices({ notices, shop }: MyNoticesProps) {
  return (
    <div className="grid h-full w-full grid-cols-2 gap-6 rounded-xl lg:grid-cols-3">
      {notices.items.map((notice) => {
        return (
          <NoticesCard
            key={notice.item.id}
            notice={notice.item}
            name={shop.name || ''}
            address1={shop.address1 || ''}
            image={shop.imageUrl || ''}
          />
        );
      })}
    </div>
  );
}
