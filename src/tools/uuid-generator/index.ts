import { Fingerprint } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Trình tạo UUID',
  path: '/uuid-generator',
  description:
    'Mã định danh duy nhất toàn cầu (UUID) là số 128 bit được sử dụng để nhận dạng thông tin trong hệ thống máy tính. Số lượng UUID có thể có là 16^32, tức là 2^128 hoặc khoảng 3,4x10^38 (rất nhiều!).',
  keywords: ['uuid', 'v4', 'random', 'id', 'alphanumeric', 'identity', 'token', 'string', 'identifier', 'unique', 'v1', 'v3', 'v5', 'nil'],
  component: () => import('./uuid-generator.vue'),
  icon: Fingerprint,
});
