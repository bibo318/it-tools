import { AlignJustified } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Tạo Lorem ipsum',
  path: '/lorem-ipsum-generator',
  description:
    'Lorem ipsum là một văn bản placeholder thường được sử dụng để thể hiện hình thức trực quan của một tài liệu hoặc một kiểu chữ mà không cần dựa vào nội dung có ý nghĩa',
  keywords: ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'placeholder', 'text', 'filler', 'random', 'generator'],
  component: () => import('./lorem-ipsum-generator.vue'),
  icon: AlignJustified,
});
