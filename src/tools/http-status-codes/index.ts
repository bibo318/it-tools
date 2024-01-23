import { HttpRound } from '@vicons/material';
import { defineTool } from '../tool';

import { codesByCategories } from './http-status-codes.constants';

export const tool = defineTool({
  name: 'HTTP status codes',
  path: '/http-status-codes',
  description: 'Danh sách tất cả các mã trạng thái HTTP tên và ý nghĩa của chúng.',
  keywords: [
    'http',
    'status',
    'codes',
    ...codesByCategories.flatMap(({ codes }) => codes.flatMap(({ code, name }) => [String(code), name])),
  ],
  component: () => import('./http-status-codes.vue'),
  icon: HttpRound,
  createdAt: new Date('2023-04-13'),
});
