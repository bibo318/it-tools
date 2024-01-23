import { Certificate } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Trình tạo cặp khóa RSA',
  path: '/rsa-key-pair-generator',
  description: 'Tạo chứng chỉ pem key private và key public RSA ngẫu nhiên mới.',
  keywords: ['rsa', 'key', 'pair', 'generator', 'public', 'private', 'secret', 'ssh', 'pem'],
  component: () => import('./rsa-key-pair-generator.vue'),
  icon: Certificate,
});
