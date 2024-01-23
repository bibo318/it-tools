import { Tags } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Trình tạo biểu đồ meta',
  path: '/og-meta-generator',
  description: 'Tạo thẻ meta html dạng biểu đồ và xã hội cho trang web của bạn.',
  keywords: [
    'meta',
    'tag',
    'generator',
    'social',
    'title',
    'description',
    'image',
    'share',
    'online',
    'website',
    'open',
    'graph',
    'og',
  ],
  component: () => import('./meta-tag-generator.vue'),
  icon: Tags,
});
