import Button from '../../../../components/common/Button';
import SelectDropdown from '../../../../components/common/Dropdown/SelectDropdown';
import InputField from '../../../../components/common/InputField';
import { STORE_BUTTON } from '../../../../constants/button';
import useStoreUpsertForm from '../hooks/useStoreUpsertForm';
import { STORE_FORM_DROPDOWN, STORE_FORM_INPUT } from './StoreFormAttribute';

interface Props {
  mode: 'register' | 'edit';
}
export default function StoreUpsertForm({ mode }: Props) {
  const buttonText = mode === 'register' ? STORE_BUTTON.registerStore : STORE_BUTTON.editStore;

  const { changeUpsertForm, submitUpsertForm } = useStoreUpsertForm();

  return (
    <form
      className="flex w-full flex-col items-center gap-5 md:grid md:grid-cols-2"
      action={submitUpsertForm}
    >
      <InputField
        {...STORE_FORM_INPUT.name}
        inputType="input"
        onChange={(e) => {
          changeUpsertForm({ ...STORE_FORM_INPUT.name }.name, e.target.value);
        }}
      />
      <div className="flex w-full flex-col gap-2">
        <label>{STORE_FORM_DROPDOWN.category.label}</label>
        <SelectDropdown
          options={STORE_FORM_DROPDOWN.category.options}
          onSelect={(option: string) => {
            changeUpsertForm(STORE_FORM_DROPDOWN.category.name, option);
          }}
        />
      </div>
      <div className="flex w-full flex-col gap-2">
        <label>{STORE_FORM_DROPDOWN.address1.label}</label>
        <SelectDropdown
          options={STORE_FORM_DROPDOWN.address1.options}
          onSelect={(option: string) => {
            changeUpsertForm(STORE_FORM_DROPDOWN.address1.name, option);
          }}
        />
      </div>
      <InputField
        {...STORE_FORM_INPUT.address2}
        inputType="input"
        onChange={(e) => {
          changeUpsertForm({ ...STORE_FORM_INPUT.address2 }.name, e.target.value);
        }}
      />
      <InputField
        {...STORE_FORM_INPUT.originalHourlyPay}
        inputType="input"
        rightSlot="원"
        onChange={(e) => {
          changeUpsertForm({ ...STORE_FORM_INPUT.originalHourlyPay }.name, e.target.value);
        }}
      />
      <InputField
        {...STORE_FORM_INPUT.imageUrl}
        inputType="image"
        image={undefined}
        className="w-full"
        selectImage={async (value) => {
          changeUpsertForm({ ...STORE_FORM_INPUT.imageUrl }.name, value);
        }}
      />
      <InputField
        {...STORE_FORM_INPUT.description}
        inputType="input"
        onChange={(e) => {
          changeUpsertForm({ ...STORE_FORM_INPUT.description }.name, e.target.value);
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
