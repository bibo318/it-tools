import { CompareArrowsRound } from '@vicons/material';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'JSON diff',
  path: '/json-diff',
  description: 'So sánh hai đối tượng JSON và nhận ra sự khác biệt giữa chúng.',
  keywords: ['json', 'diff', 'compare', 'difference', 'object', 'data'],
  component: () => import('./json-diff.vue'),
  icon: CompareArrowsRound,
  createdAt: new Date('2023-04-20'),
});
