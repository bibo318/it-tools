import { Braces } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'JSON to YAML converter',
  path: '/json-to-yaml-converter',
  description: 'Chỉ cần chuyển đổi JSON sang YAML bằng trình chuyển đổi trực tuyến trực tiếp này.',
  keywords: ['yaml', 'to', 'json'],
  component: () => import('./json-to-yaml.vue'),
  icon: Braces,
  createdAt: new Date('2023-04-10'),
});
