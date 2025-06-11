import Pagination from '../../../components/Table/Pagination';

export default function AllNotices() {
  return (
    <div className="flex flex-col gap-[30px] md:gap-10">
      <div className="grid grid-cols-2 gap-1 md:gap-4 lg:grid-cols-3">전체 공고카드 </div>
      <Pagination />
    </div>
  );
}
