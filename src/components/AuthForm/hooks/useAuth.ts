import { useState } from 'react';
import { LoginFormData, SignupFormData } from '../types/auth';
import { INITIAL_LOGIN_VALUE, INITIAL_SIGNUP_VALUE } from '../initial-value';
import axiosClient from '../../../lib/instance';
import { useNavigate } from 'react-router-dom';

type useAuthType = 'login' | 'signup';

export default function useAuth(type: useAuthType) {
  const [formData, setFormData] = useState<LoginFormData | SignupFormData>(
    type === 'login' ? INITIAL_LOGIN_VALUE : INITIAL_SIGNUP_VALUE
  );

  const navigate = useNavigate();

  const handleChangeAuthForm = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.currentTarget.value;
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const loginUser = async () => {
    try {
      const { data } = await axiosClient.post(`/token`, { ...formData });
      localStorage.setItem('accessToken', data.item.token);

      if (data.item.user.item.type === 'employee') return navigate(`/mypage`);
      if (data.item.user.item.type === 'employer') return navigate(`/mystore`);
    } catch (err) {
      console.error(err);
      //todo에러 핸들링
    }
  };

  return { handleChangeAuthForm, loginUser };
}
