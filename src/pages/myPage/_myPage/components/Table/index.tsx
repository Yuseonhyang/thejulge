import Pagination from './Pagination';
import { TableRowItem, TableHeader } from './TableRow';

export default function Table() {
  return (
    <ol className="border-gray20 flex flex-col items-center rounded-xl border-1">
      <TableHeader />
      <TableRowItem />
      <TableRowItem />
      <TableRowItem />
      <div className="flex h-14 items-center md:h-16">
        <Pagination />
      </div>
    </ol>
  );
}
