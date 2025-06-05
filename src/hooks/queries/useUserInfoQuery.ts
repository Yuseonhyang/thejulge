import { useQuery } from '@tanstack/react-query';
import decodeJWT from '../../utils/decode-jwt';
import axiosClient from '../../lib/instance';

const { userId } = decodeJWT();

export function useUserInfoQuery() {
  const res = useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => await axiosClient(`/users/${userId}`),
    staleTime: 1000 * 1000,
  });
  return res;
}
