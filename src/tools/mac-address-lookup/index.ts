import { Devices } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'MAC address lookup',
  path: '/mac-address-lookup',
  description: 'Tìm nhà cung cấp và nhà sản xuất thiết bị theo địa chỉ MAC của nó.',
  keywords: ['mac', 'address', 'lookup', 'vendor', 'parser', 'manufacturer'],
  component: () => import('./mac-address-lookup.vue'),
  icon: Devices,
  createdAt: new Date('2023-04-06'),
});
