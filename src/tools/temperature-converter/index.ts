import { Temperature } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Bộ chuyển đổi nhiệt độ',
  path: '/temperature-converter',
  description:
    'Chuyển đổi độ nhiệt độ cho Kelvin, C, F, Rankine, Delisle, Newton, Réaumur và Rømer.',
  keywords: [
    'temperature',
    'converter',
    'degree',
    'Kelvin',
    'Celsius',
    'Fahrenheit',
    'Rankine',
    'Delisle',
    'Newton',
    'Réaumur',
    'Rømer',
  ],
  component: () => import('./temperature-converter.vue'),
  icon: Temperature,
});
