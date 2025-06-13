import { useEffect, useState } from 'react';
import axiosInstance from '../../../../lib/instance';
import { PATHS } from '../../../../constants/path';
import { useNavigate } from 'react-router-dom';
import { ProfileType } from '../../types/profile';
import decodeJWT from '../../../../utils/decode-jwt';

export default function useProfileUpsertForm(initialProfile: ProfileType) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ProfileType>(initialProfile);
  const { userId } = decodeJWT();

  useEffect(() => {
    setFormData(initialProfile);
  }, [initialProfile]);

  const changeUpsertForm = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    console.log('Updated form data:', { ...formData, [key]: value });
  };

  const submitUpsertForm = async () => {
    try {
      await axiosInstance.put(`users/${userId}`, { ...formData });
      navigate(PATHS.MYPROFILE);
    } catch {
      /**@todo 에러 핸들링 업데이트 */
    }
  };

  return { changeUpsertForm, submitUpsertForm, formData };
}
