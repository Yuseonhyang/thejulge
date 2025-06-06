export const NOTICE_FORM_INPUT = {
  hourlyPay: {
    label: '시급',

    name: 'hourlyPay',
    required: true,
    gapSize: '8',
  },
  startsAt: { label: '시작 일시', name: 'startsAt', required: true, gapSize: '8' },

  workhour: { label: '업무 시간', name: 'workhour', required: true, gapSize: '8' },

  description: { label: '가게 설명', name: 'description', required: false, gapSize: '8' },
};
