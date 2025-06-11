import { SEOUL_DISTRICTS } from '../../../../components/common/Dropdown/FilterDropdown/value/seoul-districts-data';

export const STORE_FORM_DROPDOWN = {
  category: { label: '분류', name: 'category', options: ['한식', '양식', '중식', '분식'] },
  address1: { label: '주소', name: 'address1', options: SEOUL_DISTRICTS },
};

export const STORE_FORM_INPUT = {
  name: { label: '가게 이름', name: 'name', required: true, gapsize: '8' },

  address2: { label: '상세 주소', name: 'address2', required: true, gapsize: '8' },
  originalHourlyPay: {
    label: '기본 시급',

    name: 'originalHourlyPay',
    required: true,
    gapSize: '8',
  },
  description: { label: '가게 설명', name: 'description', required: false, gapsize: '8' },
  imageUrl: { label: '가게 이미지', name: 'imageUrl', required: false, gapsize: '8' },
};
