import { SelectedFilterType } from '../../components/common/Dropdown/FilterDropdown/types';
import axiosInstance from '../../lib/instance';

interface Props {
  noticeListFilter: {
    sortOption: string;
    filters: SelectedFilterType;
  };
  keyword?: string;
}

export async function getNoticeList(
  noticeListFilter: Props['noticeListFilter'],
  keyword?: Props['keyword']
) {
  const { sortOption, filters } = noticeListFilter;
  const { districts, startsAtGte, hourlyPayGte } = filters;

  const { data } = await axiosInstance(
    `/notices?sort=${sortOption}&district=${districts}&startsAt=${startsAtGte}&hourlyPay=${hourlyPayGte}&search=${keyword || ''}`
  );
  return data;
  /**@todo 추가 쿼리, 에러핸들링 필요 */
}
