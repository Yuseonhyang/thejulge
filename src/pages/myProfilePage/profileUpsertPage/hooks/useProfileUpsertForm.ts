import { useEffect, useState } from 'react';
import { UpsertMode } from '../../../../types/upsertMode';
import axiosInstance from '../../../../lib/instance';
import { PATHS } from '../../../../constants/path';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { ProfileType } from '../../types/profile';

export default function useProfileUpsertForm(initialProfile: ProfileType, mode: UpsertMode) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ProfileType>(initialProfile);

  useEffect(() => {
    setFormData(initialProfile);
  }, [initialProfile]);

  const changeUpsertForm = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const registerProfile = async () => {
    try {
      await axiosInstance.post(`/shops`, { ...formData });
      navigate(PATHS.MYPROFILE);
    } catch (error) {
      if (error instanceof AxiosError && error.status === 409) {
        console.error('이미 등록된 프로필이 존재합니다.');
      }
      /**@todo 에러 핸들링 업데이트 */
    }
  };

  const submitUpsertForm = mode === 'register' ? registerProfile : registerProfile;
  return { changeUpsertForm, submitUpsertForm, formData };
}
