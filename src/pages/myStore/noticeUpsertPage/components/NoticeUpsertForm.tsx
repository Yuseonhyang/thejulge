import Button from '../../../../components/common/Button';
import InputField from '../../../../components/common/InputField';
import { NOTICE_BUTTON } from '../../../../constants/button';
import { UpsertMode } from '../../../../types/upsertMode';
import { INITIAL_UPSERT_NOTICE } from '../../values/initial-value';
import useNoticeUpsertForm from '../hooks/useNoticeUpsertForm';
import { NOTICE_FORM_INPUT } from './NoticeFormAttribute';

interface Props {
  mode: UpsertMode;
  shopId: string;
}
export default function NoticeUpsertForm({ mode, shopId }: Props) {
  const buttonText = mode === 'register' ? NOTICE_BUTTON.registerNotice : NOTICE_BUTTON.editNotice;

  const { formData, changeUpsertForm, submitUpsertForm } =
    useNoticeUpsertForm(INITIAL_UPSERT_NOTICE);

  return (
    <form
      className="flex w-full flex-col items-center gap-5"
      action={() => submitUpsertForm(shopId)}
    >
      <div className="flex w-full flex-col items-center gap-5 md:grid md:grid-cols-2 lg:flex-row">
        <InputField
          {...NOTICE_FORM_INPUT.hourlyPay}
          inputType="input"
          value={formData.hourlyPay}
          rightSlot="원"
          onChange={(e) => {
            changeUpsertForm({ ...NOTICE_FORM_INPUT.hourlyPay }.name, e.target.value);
          }}
        />

        <InputField
          {...NOTICE_FORM_INPUT.startsAt}
          inputType="input"
          type="date"
          value={formData.startsAt}
          onChange={(e) => {
            changeUpsertForm({ ...NOTICE_FORM_INPUT.startsAt }.name, e.target.value);
          }}
        />
        <InputField
          {...NOTICE_FORM_INPUT.workhour}
          inputType="input"
          value={formData.workhour}
          rightSlot="시간"
          onChange={(e) => {
            changeUpsertForm({ ...NOTICE_FORM_INPUT.workhour }.name, e.target.value);
          }}
        />
      </div>

      <InputField
        {...NOTICE_FORM_INPUT.description}
        inputType="input"
        value={formData.description}
        onChange={(e) => {
          changeUpsertForm({ ...NOTICE_FORM_INPUT.description }.name, e.target.value);
        }}
        className="min-h-[153px]"
      />

      <div className="h-12 w-full md:w-78">
        <Button type="submit" variant="primary" size="parent-dependent">
          {buttonText}
        </Button>
      </div>
    </form>
  );
}
