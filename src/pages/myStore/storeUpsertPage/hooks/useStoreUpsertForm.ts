import { useEffect, useState } from 'react';
import { UpsertStoreType } from '../../types/store';
import axiosClient from '../../../../lib/instance';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../../constants/path';
import { INITIAL_UPSERT_STORE } from '../../values/initial-value';

export default function useStoreUpsertForm(initialStoreData: UpsertStoreType) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<UpsertStoreType>(
    initialStoreData || INITIAL_UPSERT_STORE
  );

  useEffect(() => {
    setFormData(initialStoreData);
  }, [initialStoreData]);

  const changeUpsertForm = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
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

  return { changeUpsertForm, submitUpsertForm, formData };
}
