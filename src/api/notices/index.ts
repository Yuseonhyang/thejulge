import { SelectedFilterType } from '../../components/common/Dropdown/FilterDropdown/types';
import axiosInstance from '../../lib/instance';

interface Props {
  noticeListFilter: {
    sortOption: string;
    filters: SelectedFilterType;
  };
}
export async function getNoticeList(noticeListFilter: Props['noticeListFilter']) {
  const { sortOption, filters } = noticeListFilter;
  const { districts, startsAtGte, hourlyPayGte } = filters;

  const { data } = await axiosInstance(
    `/notices?sort=${sortOption}&district=${districts}&startsAt=${startsAtGte}&hourlyPay=${hourlyPayGte}`
  );
  return data;
  /**@todo 추가 쿼리, 에러핸들링 필요 */
}
