import { Code } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'XML formatter',
  path: '/xml-formatter',
  description: 'Chỉnh sửa chuỗi XML của bạn thành định dạng dễ đọc.',
  keywords: ['xml', 'prettify', 'format'],
  component: () => import('./xml-formatter.vue'),
  icon: Code,
  createdAt: new Date('2023-06-17'),
});
