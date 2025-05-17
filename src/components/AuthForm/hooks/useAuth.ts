import { useState } from 'react';
import { LoginFormData } from '../types/auth';
import { INITIAL_LOGIN_VALUE } from '../initial-value';
import axiosClient from '../../../lib/instance';

export default function useAuth() {
  const [formData, setFormData] = useState<LoginFormData>(INITIAL_LOGIN_VALUE);

  const handleChangeAuthForm = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.currentTarget.value;
    setFormData((prev) => ({ ...prev, [key]: value }));
    console.log(formData);
  };

  const loginUser = async () => {
    const { data } = await axiosClient.post(`/token`, { ...formData });
  };
  return { handleChangeAuthForm, loginUser };
}
