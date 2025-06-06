import { useState } from 'react';
import axiosClient from '../../../../lib/instance';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../../constants/path';
import { UpsertMode } from '../../../../types/upsertMode';
import { NoticeUpsertType } from '../../types/notice';

export default function useNoticeUpsertForm(initialNotice: NoticeUpsertType, mode: UpsertMode) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialNotice);

  const changeUpsertForm = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const submitUpsertForm = async (shopId: string) => {
    const { startsAt, ...rest } = formData;
    const formattedStartsAt = `${startsAt}T00:00:00Z`;

    try {
      await axiosClient.post(`/shops/${shopId}/notices`, {
        ...rest,
        startsAt: formattedStartsAt,
      });
      navigate(PATHS.MYSTORE);
    } catch (error) {
      console.error('공고 등록 실패');
      /**@todo 에러 핸들링 업데이트 */
    }
  };

  return { changeUpsertForm, submitUpsertForm, formData };
}
