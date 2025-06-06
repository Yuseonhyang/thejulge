import { useQuery } from '@tanstack/react-query';
import decodeJWT from '../../utils/decode-jwt';
import axiosClient from '../../lib/instance';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { PATHS } from '../../constants/path';

export function useUserInfoQuery() {
  const navigate = useNavigate();
  const { userId } = decodeJWT();

  useEffect(() => {
    if (!userId) {
      navigate(PATHS.LOGIN);
    }
  }, [userId, navigate]);

  const res = useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => {
      const response = await axiosClient(`/users/${userId}`);
      return response.data;
    },
    enabled: !!userId, // userId가 있을 때만 실행
    staleTime: 1000 * 1000,
  });

  return res;
}
