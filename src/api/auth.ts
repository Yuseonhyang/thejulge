import axiosInstance from '../lib/instance';
import { UserInfoResponseType } from '../pages/myStore/types/store';

export default async function getUserInfo(userId: string): Promise<UserInfoResponseType> {
  const { data } = await axiosInstance(`/users/${userId}`);

  return data.data;
}
