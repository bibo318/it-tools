import { ShortTextRound } from '@vicons/material';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Hmac generator',
  path: '/hmac-generator',
  description:
    'Tính toán mã xác thực tin nhắn dựa trên hàm băm (HMAC) bằng khóa bí mật và hàm băm yêu thích của bạn.',
  keywords: ['hmac', 'generator', 'MD5', 'SHA1', 'SHA256', 'SHA224', 'SHA512', 'SHA384', 'SHA3', 'RIPEMD160'],
  component: () => import('./hmac-generator.vue'),
  icon: ShortTextRound,
});
