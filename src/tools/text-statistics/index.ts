import { FileText } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Thống kê văn bản',
  path: '/text-statistics',
  description: 'Nhận thông tin về văn bản, số lượng ký tự, số lượng từ, kích thước của nó, ...',
  keywords: ['text', 'statistics', 'length', 'characters', 'count', 'size', 'bytes'],
  component: () => import('./text-statistics.vue'),
  icon: FileText,
  redirectFrom: ['/text-stats'],
});
