import { Lock } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Encrypt / decrypt text',
  path: '/encryption',
  description: 'Mã hóa và giải mã văn bản văn bản rõ ràng bằng thuật toán mật mã như AES, TripleDES, Rabbit hoặc RC4.',
  keywords: ['cypher', 'encipher', 'text', 'AES', 'TripleDES', 'Rabbit', 'RC4'],
  component: () => import('./encryption.vue'),
  icon: Lock,
  redirectFrom: ['/cypher'],
});
