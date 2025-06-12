import { useEffect, useState } from 'react';
import Pagination from '../../components/Table/Pagination';
import { useSearchParams } from 'react-router-dom';
import { Notices } from '../myStore/types/notice';
import { getNoticeList } from '../../api/notices';
import { INITIAL_FILTER } from '../../components/common/Dropdown/FilterDropdown/value/initial-value';
import NoticesFilters from '../../components/NoticesFilters';
import { SelectedFilterType } from '../../components/common/Dropdown/FilterDropdown/types';
import NoticesCard from '../myStore/components/NoticesCard';

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
  }, [noticeListFilter, keyword]);

  const changeNoticeListFilter = (key: string, value: string | SelectedFilterType) => {
    setNoticeListFilter((prev) => ({ ...prev, [key]: value }));
  };

  if (!searchNotices) return;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between gap-2 md:flex-row">
        <h1 className="text-3xl-bold">
          <span className="text-primary">{keyword}</span>에 대한 공고 목록
        </h1>
        <NoticesFilters
          onSelectSort={(sortOption: string) => {
            changeNoticeListFilter('sortOption', sortOption);
          }}
          onSelectFilter={(filters: SelectedFilterType) => {
            changeNoticeListFilter('filters', filters);
          }}
        />
      </div>
      <section className="flex flex-col items-center gap-4 md:gap-8">
        <div className="grid grid-cols-2 lg:grid-cols-3">
          {searchNotices.items.length > 0 &&
            searchNotices.items.map((item) => {
              return (
                <NoticesCard
                  key={item.item.id}
                  name={item.item.shop.name}
                  notice={item.item}
                  address1={item.item.shop.address1}
                  image={item.item.shop.imageUrl || '/src/public/images/defaultShopImage.svg'}
                />
              );
            })}
        </div>
        <Pagination count={1} hasNext={true} />
      </section>
    </div>
  );
}
