type UserType = 'employer' | 'employee';

export interface Shop {
  id: string;
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
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
  name: Shop['name'];
  category: Shop['category'];
  address1: Shop['address1'];
  address2: Shop['address2'];
  originalHourlyPay: Shop['originalHourlyPay'];
  imageUrl: Shop['imageUrl'];
  description: Shop['description'];
}
