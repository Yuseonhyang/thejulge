import { useEffect, useState } from 'react';
import Pagination from '../../components/Table/Pagination';
import { useSearchParams } from 'react-router-dom';
import { Notices } from '../myStore/types/notice';
import { getNoticeList } from '../../api/notices';
import { INITIAL_FILTER } from '../../components/common/Dropdown/FilterDropdown/value/initial-value';

export default function NoticeSearchPage() {
  const [searchParams] = useSearchParams();
  const [searchNotices, setSearchNotices] = useState<Notices>();
  const [noticeListFilter, setNoticeListFilter] = useState({
    sortOption: 'time',
    filters: INITIAL_FILTER,
  });

  const keyword = searchParams.get('search') || '';

  const fetchNotices = async () => {
    const data = await getNoticeList(noticeListFilter, keyword);
    setSearchNotices(data);
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  if (!searchNotices) return;

  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-3xl-bold">
          <span className="text-primary">{keyword}</span>에 대한 공고 목록
        </h1>
        <div>필터 들어갈 부분</div>
      </div>
      <section className="flex flex-col gap-4 md:gap-8">
        <div className="grid grid-cols-2 lg:grid-cols-3">{}</div>
        <Pagination count={1} hasNext={true} />
      </section>
    </div>
  );
}
