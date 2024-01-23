import { ArrowsLeftRight } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Integer base converter',
  path: '/base-converter',
  description: 'Chuyển đổi số giữa các mã hóa khác nhau (decimal, hexadecimal, binary, octal, base64, ...)',
  keywords: ['integer', 'number', 'base', 'conversion', 'decimal', 'hexadecimal', 'binary', 'octal', 'base64'],
  component: () => import('./integer-base-converter.vue'),
  icon: ArrowsLeftRight,
});
