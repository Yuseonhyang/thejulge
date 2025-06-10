import { UserType } from '../../../types/userType';

export type ApplicationStatus = 'pending' | 'accepted' | 'rejected' | 'canceled';

export interface ApplicationsData {
  count: number;
  hasNext: boolean;
  items: Application[];
  limit: number;
  links: string[];
  offset: number;
}

export interface Application {
  item: {
    id: string;
    status: ApplicationStatus;
    createdAt: string;
    user: {
      item: {
        id: string;
        email: string;
        type: UserType;
        name: string; // optional
        phone: string; // optional
        address: string; // optional
        bio: string; // optional
      };
      href: string;
    };
    shop: {
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
      href: string;
    };
    notice: {
      item: {
        id: string;
        hourlyPay: number;
        description: string;
        startsAt: string;
        workhour: number;
        closed: boolean;
      };
      href: string;
    };
  };
  links: string[];
}
