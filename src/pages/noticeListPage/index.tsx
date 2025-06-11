import { useEffect, useState } from 'react';
import AllNotices from './components/AllNotices';
import NoticesFilters from './components/NoticesFilters';
import RecommendedNotices from './components/RecommendedNotices';
import { getNoticeList } from '../../api/notices';
import { Notices } from '../myStore/types/notice';

export default function NoticeListPage() {
  const [allNotices, setAllNotices] = useState<Notices>();
  const fetchAllNotices = async () => {
    const data = await getNoticeList();
    setAllNotices(data);
  };

  useEffect(() => {
    fetchAllNotices();
  }, []);

  if (!allNotices) return;
  return (
    <div className="flex w-full flex-col gap-20">
      <section className="flex flex-col gap-4 md:gap-8">
        <h1 className="text-3xl-bold">맞춤 공고</h1>
        <RecommendedNotices />
      </section>
      <section className="flex flex-col gap-4 md:gap-8">
        <div className="flex justify-between">
          <h1 className="text-3xl-bold">전체 공고</h1>
          <NoticesFilters />
        </div>
        <AllNotices notices={allNotices} />
      </section>
    </div>
  );
}
