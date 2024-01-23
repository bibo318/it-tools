import { Braces } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'JSON prettify and format',
  path: '/json-prettify',
  description: 'Chỉnh sửa chuỗi JSON của bạn thành định dạng dễ đọc thân thiện với con người.',
  keywords: ['json', 'viewer', 'prettify', 'format'],
  component: () => import('./json-viewer.vue'),
  icon: Braces,
  redirectFrom: ['/json-viewer'],
});
