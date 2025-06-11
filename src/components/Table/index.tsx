import { ApplicationsData } from '../../pages/noticeIdPage/types/applications';
import Pagination from './Pagination';
import { TableRowItem, TableHeader } from './TableRow';

interface Props {
  data: ApplicationsData | undefined;
}
export default function Table({ data }: Props) {
  if (!data) return;
  const { count, hasNext, items } = data;
  return (
    <ol className="border-gray20 flex flex-col items-center rounded-xl border-1">
      <TableHeader />
      {items.length > 0 &&
        items.map((item) => {
          return <TableRowItem application={item} />;
        })}

      <div className="flex h-14 items-center md:h-16">
        <Pagination hasNext={hasNext} count={count} />
      </div>
    </ol>
  );
}
