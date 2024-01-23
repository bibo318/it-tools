import { Binary } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Text to ASCII binary',
  path: '/text-to-binary',
  description: 'Chuyển đổi văn bản sang biểu diễn nhị phân ASCII và ngược lại.',
  keywords: ['text', 'to', 'binary', 'converter', 'encode', 'decode', 'ascii'],
  component: () => import('./text-to-binary.vue'),
  icon: Binary,
  createdAt: new Date('2023-10-15'),
});
