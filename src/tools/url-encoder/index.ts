import { Link } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Encode/decode chuỗi url',
  path: '/url-encoder',
  description: 'Mã hóa sang định dạng được mã hóa url (còn được gọi là "mã hóa phần trăm") hoặc giải mã từ định dạng đó.',
  keywords: ['url', 'encode', 'decode', 'percent', '%20', 'format'],
  component: () => import('./url-encoder.vue'),
  icon: Link,
});
