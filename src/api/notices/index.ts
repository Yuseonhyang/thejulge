import axiosInstance from '../../lib/instance';

export async function getNoticeList() {
  const { data } = await axiosInstance(`/notices`);
  return data;
  /**@todo 추가 쿼리, 에러핸들링 필요 */
}
