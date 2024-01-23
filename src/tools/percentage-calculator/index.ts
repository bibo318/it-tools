import { Percentage } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Máy tính tỷ lệ phần trăm',
  path: '/percentage-calculator',
  description: 'Dễ dàng tính tỷ lệ phần trăm từ một giá trị này sang giá trị khác hoặc từ tỷ lệ phần trăm sang một giá trị.',
  keywords: ['percentage', 'calculator', 'calculate', 'value', 'number', '%'],
  component: () => import('./percentage-calculator.vue'),
  icon: Percentage,
  createdAt: new Date('2023-06-18'),
});
