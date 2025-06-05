export interface Notice {
  id: string;
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
  closed: boolean;
}

export interface Notices {
  offset: number;
  limit: number;
  count: number; // 전체 개수
  hasNext: boolean; // 다음 내용 존재 여부
  items: Notice[];
}

export interface NoticeUpsertType {
  hourlyPay: Notice['hourlyPay'];
  startsAt: Notice['startsAt'];
  workhour: Notice['workhour'];
  description: Notice['description'];
}
