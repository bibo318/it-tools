import { DeviceDesktop } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Thông tin thiết bị',
  path: '/device-information',
  description: 'Nhận thông tin về thiết bị hiện tại của bạn (kích thước màn hình, tỷ lệ pixel, user agent, ...)',
  keywords: [
    'device',
    'information',
    'screen',
    'pixel',
    'ratio',
    'status',
    'data',
    'computer',
    'size',
    'user',
    'agent',
  ],
  component: () => import('./device-information.vue'),
  icon: DeviceDesktop,
});
