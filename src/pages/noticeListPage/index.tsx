import { useEffect, useState } from 'react';
import AllNotices from './components/AllNotices';
import RecommendedNotices from './components/RecommendedNotices';
import { getNoticeList } from '../../api/notices';
import { Notices } from '../myStore/types/notice';
import { SelectedFilterType } from '../../components/common/Dropdown/FilterDropdown/types';
import { INITIAL_FILTER } from '../../components/common/Dropdown/FilterDropdown/value/initial-value';
import NoticesFilters from '../../components/NoticesFilters';

/** @todo
 * 맞춤 공고는 추후에 추가 예정
 * 맞춤 공고는 유저의 위치 정보를 기반으로 하여
 * 해당 지역의 공고를 추천하는 기능을 구현할 예정
 */

export default function NoticeListPage() {
  const [allNotices, setAllNotices] = useState<Notices>();
  const [noticeListFilter, setNoticeListFilter] = useState({
    sortOption: 'time',
    filters: INITIAL_FILTER,
  });

  const changeNoticeListFilter = (key: string, value: string | SelectedFilterType) => {
    setNoticeListFilter((prev) => ({ ...prev, [key]: value }));
  };

  const fetchAllNotices = async () => {
    const data = await getNoticeList(noticeListFilter);
    setAllNotices(data);
  };

  useEffect(() => {
    fetchAllNotices();
  }, [noticeListFilter]);

  if (!allNotices) return;

  return (
    <div className="flex w-full flex-col gap-20">
      <section className="flex flex-col gap-4 md:gap-8">
        <h1 className="text-3xl-bold">맞춤 공고</h1>
        <RecommendedNotices />
      </section>
      <section className="flex flex-col gap-4 md:gap-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <h1 className="text-3xl-bold">전체 공고</h1>
          <NoticesFilters
            onSelectSort={(sortOption: string) => {
              changeNoticeListFilter('sortOption', sortOption);
            }}
            onSelectFilter={(filters) => {
              changeNoticeListFilter('filters', filters);
            }}
          />
        </div>
        <AllNotices notices={allNotices} />
      </section>
    </div>
  );
}
