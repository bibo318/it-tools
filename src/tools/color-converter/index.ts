import { Palette } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Color converter',
  path: '/color-converter',
  description: 'Chuyển đổi màu giữa các định dạng khác nhau (name, hex, rgb, hsl và css)',
  keywords: ['color', 'converter'],
  component: () => import('./color-converter.vue'),
  icon: Palette,
  redirectFrom: ['/color-picker-converter'],
});
