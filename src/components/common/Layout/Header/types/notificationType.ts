type Result = 'accepted' | 'rejected,';
type Status = 'pending' | 'accepted' | 'rejected';

export interface NotificationsType {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  items: NotificationType[];
}

export interface NotificationType {
  item: {
    id: string;
    createdAt: string;
    result: Result;
    read: boolean;
    application: {
      item: {
        id: string;
        status: Status;
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
    links: [];
  };
  links: [];
}
