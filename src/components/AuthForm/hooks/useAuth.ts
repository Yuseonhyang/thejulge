import { useState } from 'react';
import { LoginFormData, SignupFormData } from '../types/auth';
import { INITIAL_LOGIN_VALUE, INITIAL_SIGNUP_VALUE } from '../initial-value';
import axiosClient from '../../../lib/instance';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../constants/path';

type useAuthType = 'login' | 'signup';

export default function useAuth(type: useAuthType) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData | SignupFormData>(
    type === 'login' ? INITIAL_LOGIN_VALUE : INITIAL_SIGNUP_VALUE
  );

  const handleChangeAuthForm = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const loginUser = async () => {
    try {
      const { data } = await axiosClient.post(`/token`, {
        email: formData.email,
        password: formData.password,
      });
      localStorage.setItem('accessToken', data.item.token);

      if (data.item.user.item.type === 'employee') return navigate(PATHS.MYPROFILE);
      if (data.item.user.item.type === 'employer') return navigate(PATHS.MYSTORE);
    } catch (err) {
      console.error(err);
      //todo에러 핸들링
    }
  };

  const signupUser = async () => {
    try {
      if ('type' in formData) {
        const res = await axiosClient.post(`/users`, {
          email: formData.email,
          password: formData.password,
          type: formData.type,
        });

        if (res.status === 201) {
          loginUser();
        }
        if (res.status === 409) {
          //이미 사용중인 이메일
        }
      }
    } catch (err) {
      console.error(err);
      //todo에러 핸들링
    }
  };

  return { handleChangeAuthForm, loginUser, signupUser };
}
