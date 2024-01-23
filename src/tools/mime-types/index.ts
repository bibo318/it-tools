import { World } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Mime types',
  path: '/mime-types',
  description: 'Chuyển đổi loại mime thành tiện ích mở rộng và ngược lại.',
  keywords: ['mime', 'types', 'extension', 'content', 'type'],
  component: () => import('./mime-types.vue'),
  icon: World,
});
