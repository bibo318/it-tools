import { MoodSmile } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'List biểu tượng cảm xúc',
  path: '/emoji-picker',
  description: 'Sao chép và dán biểu tượng cảm xúc một cách dễ dàng và nhận giá trị unicode và điểm mã của mỗi biểu tượng cảm xúc.',
  keywords: ['emoji', 'picker', 'unicode', 'copy', 'paste'],
  component: () => import('./emoji-picker.vue'),
  icon: MoodSmile,
  createdAt: new Date('2023-08-07'),
});
