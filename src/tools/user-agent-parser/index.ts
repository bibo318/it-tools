import { Browser } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'User-agent parser',
  path: '/user-agent-parser',
  description: 'Phát hiện và phân tích cú pháp Trình duyệt, Công cụ, Hệ điều hành, CPU và loại/kiểu thiết bị từ chuỗi tác nhân người dùng.',
  keywords: ['user', 'agent', 'parser', 'browser', 'engine', 'os', 'cpu', 'device', 'user-agent', 'client'],
  component: () => import('./user-agent-parser.vue'),
  icon: Browser,
  createdAt: new Date('2023-04-06'),
});
