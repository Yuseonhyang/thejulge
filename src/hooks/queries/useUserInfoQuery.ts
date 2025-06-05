import { useQuery } from '@tanstack/react-query';
import decodeJWT from '../../utils/decode-jwt';
import { UserInfoResponseType } from '../../pages/myStore/types/store';
import getUserInfo from '../../api/auth';

const { userId } = decodeJWT();

export default async function useUserInfoQuery() {
  return useQuery<UserInfoResponseType>({
    queryKey: ['userInfo'],
    queryFn: () => getUserInfo(userId),
  });
}
