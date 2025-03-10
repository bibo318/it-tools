import { BuildingFactory } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'IPv6 ULA generator',
  path: '/ipv6-ula-generator',
  description: 'Tạo địa chỉ IP cục bộ, không thể định tuyến trên mạng của bạn theo RFC4193.',
  keywords: ['ipv6', 'ula', 'generator', 'rfc4193', 'network', 'private'],
  component: () => import('./ipv6-ula-generator.vue'),
  icon: BuildingFactory,
  createdAt: new Date('2023-04-09'),
});
