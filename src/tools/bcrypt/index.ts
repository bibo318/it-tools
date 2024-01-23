import { LockSquare } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Bcrypt',
  path: '/bcrypt',
  description:
    'Hash và so sánh chuỗi văn bản bằng bcrypt. Bcrypt là chức năng password-hashing dựa trên mật mã Blowfish.',
  keywords: ['bcrypt', 'hash', 'compare', 'password', 'salt', 'round', 'storage', 'crypto'],
  component: () => import('./bcrypt.vue'),
  icon: LockSquare,
});
