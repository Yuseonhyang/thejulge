import axiosInstance from '../lib/instance';

export default async function getUserInfo(userId: string) {
  const { data } = await axiosInstance(`/users/${userId}`);

  if (data.item) {
    return data.item;
  }
}
