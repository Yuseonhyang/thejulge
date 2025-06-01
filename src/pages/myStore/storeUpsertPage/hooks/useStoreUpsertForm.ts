import { useState } from 'react';
import { UpsertStoreType } from '../../types/store';
import { INITIAL_UPSERT_STORE } from '../../values/initiail-value';
import axiosClient from '../../../../lib/instance';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../../constants/path';

export default function useStoreUpsertForm() {
  const [formData, setFormData] = useState<UpsertStoreType>(INITIAL_UPSERT_STORE);
  const navigate = useNavigate();
  const changeUpsertForm = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    console.log(formData);
  };

  const submitUpsertForm = async () => {
    try {
      await axiosClient.post(`/shops`, { ...formData });
      navigate(PATHS.MYSTORE);
    } catch (error) {
      if (error instanceof AxiosError && error.status === 409) {
        console.error('이미 등록된 가게가 존재합니다.');
      }
      /**@todo 에러 핸들링 업데이트 */
    }
  };

  return { changeUpsertForm, submitUpsertForm };
}
