import axiosInstance from '../../lib/instance';

export async function getApplications(shopId: string, noticeId: string) {
  const { data } = await axiosInstance(`/shops/${shopId}/notices/${noticeId}/applications`);
  if (data) {
    return data;
  }
  /**@todo 추가 쿼리, 에러핸들링 필요 */
}
