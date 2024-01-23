import { Phone } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Phân tích SĐT',
  path: '/phone-parser-and-formatter',
  description:
    'Phân tích, xác thực và định dạng số điện thoại. Nhận thông tin về số điện thoại, như mã quốc gia, loại, v.v..',
  keywords: [
    'phone',
    'parser',
    'formatter',
    'validate',
    'format',
    'number',
    'telephone',
    'mobile',
    'cell',
    'international',
    'national',
  ],
  component: () => import('./phone-parser-and-formatter.vue'),
  icon: Phone,
  createdAt: new Date('2023-05-01'),
});
