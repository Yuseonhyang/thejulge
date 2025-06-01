import { useQuery } from '@tanstack/react-query';
import decodeJWT from '../utils/decode-jwt';
import { UserInfoResponseType } from '../pages/myStore/types/store';
import axiosClient from '../lib/instance';

export function getUserInfo() {
  const { userId } = decodeJWT();

  const { data } = useQuery<UserInfoResponseType>({
    queryKey: ['userInfo'],
    queryFn: async () => await axiosClient(`/users/${userId}`),
    staleTime: 1000 * 10,
  });
  if (!data) return;
  return data.data;
}
