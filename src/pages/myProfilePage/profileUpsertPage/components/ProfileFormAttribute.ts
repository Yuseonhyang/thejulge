import { SEOUL_DISTRICTS } from '../../../../components/common/Dropdown/FilterDropdown/value/seoul-districts-data';

export const PROFILE_FORM = {
  input: {
    name: { label: '이름', name: 'name', required: true, gapsize: '8' },
    phone: { label: '연락처', name: 'phone', required: true, gapsize: '8' },
    introduction: { label: '소개', name: 'introduction', required: false, gapsize: '8' },
  },
  dropdown: {
    address: { label: '선호 지역', name: 'address1', options: SEOUL_DISTRICTS },
  },
};
