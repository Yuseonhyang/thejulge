type UserType = 'employer' | 'employee';

export interface Store {
  //임시 타입
  store: {
    image: string;
    storeName: string;
    type: string;
    address: string;
    description: string;
  };
}

export interface Shop {
  item: {
    id: string;
    name: string;
    category: string;
    address1: string;
    address2: string;
    description: string;
    imageUrl: string;
    originalHourlyPay: number;
  };
}

export type UserInfoResponseType = {
  data: {
    item: {
      id: string;
      email: string;
      type: UserType;
      name?: string;
      phone?: string;
      address?: string;
      bio?: string;
      shop: Shop | null;
    };
  };
};

export interface UpsertStoreType {
  name: Shop['item']['name'];
  category: Shop['item']['category'];
  address1: Shop['item']['address1'];
  address2: Shop['item']['address2'];
  originalHourlyPay: Shop['item']['originalHourlyPay'];
  imageUrl: Shop['item']['imageUrl'];
  description: Shop['item']['description'];
}
