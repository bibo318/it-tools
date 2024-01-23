import { Hourglass } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Máy tính giờ ETA',
  path: '/eta-calculator',
  description:
    'Máy tính ETA (Thời gian đến ước tính) để biết thời gian kết thúc gần đúng của một tác vụ, ví dụ: thời điểm kết thúc quá trình tải xuống.',
  keywords: ['eta', 'calculator', 'estimated', 'time', 'arrival', 'average'],
  component: () => import('./eta-calculator.vue'),
  icon: Hourglass,
});
