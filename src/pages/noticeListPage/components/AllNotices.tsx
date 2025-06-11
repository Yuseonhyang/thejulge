import Pagination from '../../../components/Table/Pagination';
import NoticesCard from '../../myStore/components/NoticesCard';
import { Notices } from '../../myStore/types/notice';

interface Props {
  notices: Notices;
}
export default function AllNotices({ notices }: Props) {
  const { items } = notices;
  return (
    <div className="flex flex-col gap-[30px] md:gap-10">
      <div className="grid grid-cols-2 gap-1 md:gap-4 lg:grid-cols-3">
        {items.length > 0 &&
          items.map((item) => {
            const { name, address1, imageUrl } = item.item.shop;

            return (
              <NoticesCard
                key={item.item.id}
                notice={item.item}
                name={name}
                address1={address1}
                image={imageUrl}
              />
            );
          })}
      </div>
      <Pagination count={notices.count} hasNext={notices.hasNext} />
    </div>
  );
}
