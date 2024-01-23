import { EyeOff } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Trình làm xáo trộn string',
  path: '/string-obfuscator',
  description: 'Làm xáo trộn một string (như secret, an IBAN, hoặc a token)để làm cho nó có thể chia sẻ và nhận dạng được mà không tiết lộ nội dung của nó.',
  keywords: ['string', 'obfuscator', 'secret', 'token', 'hide', 'obscure', 'mask', 'masking'],
  component: () => import('./string-obfuscator.vue'),
  icon: EyeOff,
  createdAt: new Date('2023-08-16'),
});
