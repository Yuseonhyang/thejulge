import { UpsertMode } from '../../../../types/upsertMode';
import { UPSERT_BUTTON } from '../../../../constants/button';
import InputField from '../../../../components/common/InputField';
import SelectDropdown from '../../../../components/common/Dropdown/SelectDropdown';
import { PROFILE_FORM } from './ProfileFormAttribute';
import Button from '../../../../components/common/Button';
import useProfileUpsertForm from '../hooks/useProfileUpsertForm';
import { INITIAL_PROFILE } from '../../values/initial-profile-value';
import { useEffect, useState } from 'react';
import { ProfileType } from '../../types/profile';
import axiosInstance from '../../../../lib/instance';
import decodeJWT from '../../../../utils/decode-jwt';

interface Props {
  mode: UpsertMode;
}
export default function ProfileUpsertForm({ mode }: Props) {
  const [profile, setProfile] = useState<ProfileType>(INITIAL_PROFILE);
  const { userId } = decodeJWT();

  const fetchProfile = async () => {
    if (!userId) return;
    const { data } = await axiosInstance(`users/${userId}`);
    setProfile(data.item);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const buttonText = mode === 'register' ? UPSERT_BUTTON.REGISTER : UPSERT_BUTTON.EDIT;

  const { changeUpsertForm, submitUpsertForm, formData } = useProfileUpsertForm(profile, mode);
  return (
    <form className="flex w-full flex-col items-center gap-5" action={submitUpsertForm}>
      <div className="flex w-full flex-col items-center gap-5 md:grid md:grid-cols-2">
        <InputField
          {...PROFILE_FORM.input.name}
          inputType="input"
          value={formData.name}
          onChange={(e) => {
            changeUpsertForm({ ...PROFILE_FORM.input.name }.name, e.target.value);
          }}
        />
        <InputField
          {...PROFILE_FORM.input.phone}
          inputType="input"
          value={formData.phone}
          onChange={(e) => {
            changeUpsertForm({ ...PROFILE_FORM.input.phone }.name, e.target.value);
          }}
        />
        <SelectDropdown
          options={PROFILE_FORM.dropdown.address1.options}
          currentOption={formData.address}
          onSelect={(option: string) => {
            changeUpsertForm(PROFILE_FORM.dropdown.address1.name, option);
          }}
          label={PROFILE_FORM.dropdown.address1.label}
        />
      </div>

      <InputField
        {...PROFILE_FORM.input.introduction}
        inputType="input"
        value={formData.description}
        onChange={(e) => {
          changeUpsertForm({ ...PROFILE_FORM.input.introduction }.name, e.target.value);
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
