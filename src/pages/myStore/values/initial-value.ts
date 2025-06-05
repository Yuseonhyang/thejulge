import { Notices } from '../types/notice';
import { UpsertStoreType } from '../types/store';

export const INITIAL_UPSERT_STORE: UpsertStoreType = {
  id: '',
  name: '',
  category: '',
  address1: '',
  address2: '',
  originalHourlyPay: 0,
  imageUrl: '',
  description: '',
};

export const INITIAL_NOTICES: Notices = {
  offset: 0,
  limit: 0,
  count: 2,
  hasNext: false,
  items: [],
};
