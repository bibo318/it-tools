import { SpeedFilled } from '@vicons/material';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Benchmark builder',
  path: '/benchmark-builder',
  description: 'Dễ dàng so sánh thời gian thực hiện các tác vụ với công cụ trực tuyến rất đơn giản này.',
  keywords: ['benchmark', 'builder', 'execution', 'duration', 'mean', 'variance'],
  component: () => import('./benchmark-builder.vue'),
  icon: SpeedFilled,
  createdAt: new Date('2023-04-05'),
});
