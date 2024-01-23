import { Edit } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'HTML WYSIWYG editor',
  path: '/html-wysiwyg-editor',
  description: 'Trình soạn thảo HTML trực tuyến với trình soạn thảo WYSIWYG giàu tính năng, lấy mã nguồn nội dung ngay lập tức.',
  keywords: ['html', 'wysiwyg', 'editor', 'p', 'ul', 'ol', 'converter', 'live'],
  component: () => import('./html-wysiwyg-editor.vue'),
  icon: Edit,
});
