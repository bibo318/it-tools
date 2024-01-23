import { Camera } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Camera recorder',
  path: '/camera-recorder',
  description: 'Chụp ảnh hoặc quay video từ webcam hoặc máy ảnh của bạn.',
  keywords: ['camera', 'recoder'],
  component: () => import('./camera-recorder.vue'),
  icon: Camera,
  createdAt: new Date('2023-05-15'),
});
