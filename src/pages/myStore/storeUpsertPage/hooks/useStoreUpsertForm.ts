import { useState } from 'react';
import { UpsertStoreType } from '../../types/store';
import { INITIAL_UPSERT_STORE } from '../../values/initiail-value';
import axiosClient from '../../../../lib/instance';

export default function useStoreUpsertForm() {
  const [formData, setFormData] = useState<UpsertStoreType>(INITIAL_UPSERT_STORE);

  const changeUpsertForm = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    console.log(formData);
  };

  const submitUpsertForm = async () => {
    await axiosClient.post(`/shops`, { ...formData });
    /**@todo 에러 핸들링 */
  };

  return { changeUpsertForm, submitUpsertForm };
}
