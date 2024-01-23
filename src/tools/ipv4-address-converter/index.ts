import { Binary } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Ipv4 address converter',
  path: '/ipv4-address-converter',
  description: 'Chuyển đổi địa chỉ IP thành số thập phân, nhị phân, thập lục phân hoặc sự kiện trong ipv6',
  keywords: ['ipv4', 'address', 'converter', 'decimal', 'hexadecimal', 'binary', 'ipv6'],
  component: () => import('./ipv4-address-converter.vue'),
  icon: Binary,
  createdAt: new Date('2023-04-08'),
});
