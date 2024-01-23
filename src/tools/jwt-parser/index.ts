import { Key } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Phân tích cú pháp JWT',
  path: '/jwt-parser',
  description: 'Phân tích và giải mã Mã thông báo Web JSON (jwt) của bạn và hiển thị nội dung của nó.',
  keywords: [
    'jwt',
    'parser',
    'decode',
    'typ',
    'alg',
    'iss',
    'sub',
    'aud',
    'exp',
    'nbf',
    'iat',
    'jti',
    'json',
    'web',
    'token',
  ],
  component: () => import('./jwt-parser.vue'),
  icon: Key,
});
