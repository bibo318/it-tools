import { TimerOutlined } from '@vicons/material';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Chronometer',
  path: '/chronometer',
  description: 'Theo dõi thời gian của một điều. Về cơ bản là một chiếc đồng hồ bấm giờ với các tính năng bấm giờ đơn giản.',
  keywords: ['chronometer', 'time', 'lap', 'duration', 'measure', 'pause', 'resume', 'stopwatch'],
  component: () => import('./chronometer.vue'),
  icon: TimerOutlined,
});
