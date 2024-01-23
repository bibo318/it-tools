import { Devices } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'MAC address generator',
  path: '/mac-address-generator',
  description: 'Nhập số lượng và tiền tố. Địa chỉ MAC sẽ được tạo theo kiểu bạn đã chọn (chữ hoa hoặc chữ thường)',
  keywords: ['mac', 'address', 'generator', 'random', 'prefix'],
  component: () => import('./mac-address-generator.vue'),
  icon: Devices,
  createdAt: new Date('2023-11-31'),
});
