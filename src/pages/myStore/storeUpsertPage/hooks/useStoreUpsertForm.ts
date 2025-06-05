import { useEffect, useState } from 'react';
import { UpsertStoreType } from '../../types/store';
import axiosClient from '../../../../lib/instance';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../../constants/path';
import { INITIAL_UPSERT_STORE } from '../../values/initial-value';
import { UpsertMode } from '../../../../types/upsertMode';

export default function useStoreUpsertForm(initialStoreData: UpsertStoreType, mode: UpsertMode) {
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

  const registerShop = async () => {
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

  const editShop = async () => {
    try {
      await axiosClient.put(`/shops/${formData.id}`, { ...formData });
      navigate(PATHS.MYSTORE);
    } catch (error) {
      console.error('가게 수정 실패');
      /**@todo 에러 핸들링 업데이트 */
    }
  };

  const submitUpsertForm = mode === 'register' ? registerShop : editShop;
  return { changeUpsertForm, submitUpsertForm, formData };
}
