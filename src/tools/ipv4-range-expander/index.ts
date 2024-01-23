import { UnfoldMoreOutlined } from '@vicons/material';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'IPv4 range expander',
  path: '/ipv4-range-expander',
  description:
    'Với địa chỉ IPv4 bắt đầu và kết thúc, công cụ này sẽ tính toán mạng IPv4 hợp lệ với ký hiệu CIDR của nó.',
  keywords: ['ipv4', 'range', 'expander', 'subnet', 'creator', 'cidr'],
  component: () => import('./ipv4-range-expander.vue'),
  icon: UnfoldMoreOutlined,
  createdAt: new Date('2023-04-19'),
});
