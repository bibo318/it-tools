import { Qrcode } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'QR Code generator',
  path: '/qrcode-generator',
  description:
    'Tạo và tải xuống mã QR cho một url hoặc chỉ một văn bản và tùy chỉnh màu nền và màu nền trước.',
  keywords: ['qr', 'code', 'generator', 'square', 'color', 'link', 'low', 'medium', 'quartile', 'high', 'transparent'],
  component: () => import('./qr-code-generator.vue'),
  icon: Qrcode,
});
