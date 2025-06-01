import Button from '../../../../components/common/Button';
import SelectDropdown from '../../../../components/common/Dropdown/SelectDropdown';
import InputField from '../../../../components/common/InputField';
import ImageUploader from '../../../../components/common/InputField/ImageUploader';
import { STORE_BUTTON } from '../../../../constants/button';
import { STORE_FORM_DROPDOWN, STORE_FORM_INPUT } from './StoreFormAttribute';

interface Props {
  mode: 'register' | 'edit';
}
export default function StoreUpsertForm({ mode }: Props) {
  const buttonText = mode === 'register' ? STORE_BUTTON.registerStore : STORE_BUTTON.editStore;

  return (
    <form className="flex w-full flex-col items-center gap-5 md:grid md:grid-cols-2">
      <InputField {...STORE_FORM_INPUT.name} inputType="input" onChange={() => {}} />
      <div className="w-full">
        <label>{STORE_FORM_DROPDOWN.category.label}</label>
        <SelectDropdown options={STORE_FORM_DROPDOWN.category.options} onSelect={() => {}} />
      </div>
      <div className="w-full">
        <label>{STORE_FORM_DROPDOWN.address1.label}</label>
        <SelectDropdown options={STORE_FORM_DROPDOWN.address1.options} onSelect={() => {}} />
      </div>
      <InputField {...STORE_FORM_INPUT.address2} inputType="input" onChange={() => {}} />
      <InputField
        {...STORE_FORM_INPUT.originalHourlyPay}
        inputType="input"
        rightSlot="원"
        onChange={() => {}}
      />
      <ImageUploader image={null} className="w-full" />
      <InputField {...STORE_FORM_INPUT.description} inputType="input" onChange={() => {}} />

      <div className="h-12 w-full md:w-78">
        <Button type="submit" variant="primary" size="parent-dependent">
          {buttonText}
        </Button>
      </div>
    </form>
  );
}
