import { RouterOutlined } from '@vicons/material';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'IPv4 subnet calculator',
  path: '/ipv4-subnet-calculator',
  description: 'Phân tích các khối CIDR IPv4 của bạn và nhận tất cả thông tin bạn cần về mạng phụ của mình.',
  keywords: ['ipv4', 'subnet', 'calculator', 'mask', 'network', 'cidr', 'netmask', 'bitmask', 'broadcast', 'address'],
  component: () => import('./ipv4-subnet-calculator.vue'),
  icon: RouterOutlined,
});
