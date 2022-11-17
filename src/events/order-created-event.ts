import { Subjects } from './subjects';
import { ServiceStatus } from './types/service-status';

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    version: number;
    userId: string;
    expiresAt: string;
    serviceStatus?: ServiceStatus;
    store?:[{
      id: string;
      title: string;
      price: number;
      quantity: number;
    }];
  };
}
