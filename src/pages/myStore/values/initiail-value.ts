import { UpsertStoreType } from '../types/store';

export const INITIAL_STORE = {
  //임시 초기 값
  image: '',
  type: '식당',
  storeName: '도토리 식당',
  address: '서울시 관악구',
  description: '설명입니다 설명입니다. 어쩌구 저쩌구',
};

export const INITIAL_UPSERT_STORE: UpsertStoreType = {
  name: '',
  category: '',
  address1: '',
  address2: '',
  originalHourlyPay: 0,
  imageUrl: '',
  description: '',
};
