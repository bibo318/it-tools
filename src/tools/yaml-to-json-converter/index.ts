import { AlignJustified } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'YAML to JSON converter',
  path: '/yaml-to-json-converter',
  description: 'Chỉ cần chuyển đổi YAML sang JSON bằng trình chuyển đổi trực tuyến trực tiếp này.',
  keywords: ['yaml', 'to', 'json'],
  component: () => import('./yaml-to-json.vue'),
  icon: AlignJustified,
  createdAt: new Date('2023-04-10'),
});
