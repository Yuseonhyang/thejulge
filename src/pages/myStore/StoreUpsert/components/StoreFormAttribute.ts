export const STORE_FORM_DROPDOWN = {
  category: { label: '분류', options: ['한식', '양식', '중식', '분식'] },
  address1: { label: '주소', options: [] },
};

export const STORE_FORM_INPUT = {
  name: { label: '가게 이름', name: 'name', required: true, gapSize: 'gap-2' },

  address2: { label: '상세 주소', name: 'address2', required: true, gapSize: 'gap-2' },
  originalHourlyPay: {
    label: '기본 시급',

    name: 'originalHourlyPay',
    required: true,
    gapSize: 'gap-2',
  },
  description: { label: '가게 설명', name: 'description', required: false, gapSize: 'gap-2' },
};
