import { useEffect, useState } from 'react';
import Button from '../../../../components/common/Button';
import SelectDropdown from '../../../../components/common/Dropdown/SelectDropdown';
import InputField from '../../../../components/common/InputField';
import { SHOP_BUTTON } from '../../../../constants/button';
import { useUserInfoQuery } from '../../../../hooks/queries/useUserInfoQuery';
import { UpsertMode } from '../../../../types/upsertMode';
import { INITIAL_UPSERT_STORE } from '../../values/initial-value';
import useStoreUpsertForm from '../hooks/useStoreUpsertForm';
import { STORE_FORM_DROPDOWN, STORE_FORM_INPUT } from './StoreFormAttribute';

interface Props {
  mode: UpsertMode;
}
export default function StoreUpsertForm({ mode }: Props) {
  const { data, isLoading } = useUserInfoQuery();
  const [storeData, setStoreData] = useState(INITIAL_UPSERT_STORE);
  const shop = data?.item.shop.item;

  const buttonText = mode === 'register' ? SHOP_BUTTON.registerStore : SHOP_BUTTON.editStore;

  const { formData, changeUpsertForm, submitUpsertForm } = useStoreUpsertForm(storeData, mode);

  useEffect(() => {
    if (mode === 'edit' && shop) {
      setStoreData(shop);
    }
  }, [data, mode]);

  if (isLoading) return <div>로딩중 ...</div>;
  return (
    <form className="flex w-full flex-col items-center gap-5" action={submitUpsertForm}>
      <div className="flex w-full flex-col items-center gap-5 md:grid md:grid-cols-2">
        <InputField
          {...STORE_FORM_INPUT.name}
          inputType="input"
          value={formData.name}
          onChange={(e) => {
            changeUpsertForm({ ...STORE_FORM_INPUT.name }.name, e.target.value);
          }}
        />
        <SelectDropdown
          options={STORE_FORM_DROPDOWN.category.options}
          currentOption={formData.category}
          onSelect={(option: string) => {
            changeUpsertForm(STORE_FORM_DROPDOWN.category.name, option);
          }}
          label={STORE_FORM_DROPDOWN.category.label}
        />
        <SelectDropdown
          options={STORE_FORM_DROPDOWN.address1.options}
          currentOption={formData.address1}
          onSelect={(option: string) => {
            changeUpsertForm(STORE_FORM_DROPDOWN.address1.name, option);
          }}
          label={STORE_FORM_DROPDOWN.address1.label}
        />
        <InputField
          {...STORE_FORM_INPUT.address2}
          inputType="input"
          value={formData.address2}
          onChange={(e) => {
            changeUpsertForm({ ...STORE_FORM_INPUT.address2 }.name, e.target.value);
          }}
        />
        <InputField
          {...STORE_FORM_INPUT.originalHourlyPay}
          inputType="input"
          value={formData.originalHourlyPay}
          rightSlot="원"
          onChange={(e) => {
            changeUpsertForm({ ...STORE_FORM_INPUT.originalHourlyPay }.name, e.target.value);
          }}
        />
      </div>
      <InputField
        {...STORE_FORM_INPUT.imageUrl}
        inputType="image"
        image={formData.imageUrl}
        className="w-full"
        selectImage={async (value) => {
          changeUpsertForm({ ...STORE_FORM_INPUT.imageUrl }.name, value);
        }}
      />
      <InputField
        {...STORE_FORM_INPUT.description}
        inputType="input"
        value={formData.description}
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
