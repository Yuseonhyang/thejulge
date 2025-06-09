import axiosInstance from '../../lib/instance';

export async function getNotification(userId: string) {
  const { data } = await axiosInstance(`/users/${userId}/alerts`);
  return data;
  /**@todo 추가 쿼리, 에러핸들링 필요 */
}

export async function markAsReadNotification(userId: string, alertId: string) {
  const { data } = await axiosInstance.put(`/users/${userId}/alerts/${alertId}`);
  /**@todo 추가 쿼리, 에러핸들링 필요 */
  return data;
}
