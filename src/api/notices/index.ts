import axiosInstance from '../../lib/instance';

export async function getNoticeList(sortOption?: string) {
  const { data } = await axiosInstance(`/notices?sort=${sortOption || ''}`);
  return data;
  /**@todo 추가 쿼리, 에러핸들링 필요 */
}
