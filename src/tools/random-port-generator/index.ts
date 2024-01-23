import { Server } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Trình tạo Port ngẫu nhiên',
  path: '/random-port-generator',
  description: 'Tạo số Port ngẫu nhiên ngoài phạm vi Port "đã biết" (0-1023).',
  keywords: ['system', 'port', 'lan', 'generator', 'random', 'development', 'computer'],
  component: () => import('./random-port-generator.vue'),
  icon: Server,
});
