import { LetterX } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Roman numeral converter',
  path: '/roman-numeral-converter',
  description: 'Chuyển đổi chữ số La Mã thành số và chuyển đổi số sang chữ số La Mã.',
  keywords: ['roman', 'arabic', 'converter', 'X', 'I', 'V', 'L', 'C', 'D', 'M'],
  component: () => import('./roman-numeral-converter.vue'),
  icon: LetterX,
});
