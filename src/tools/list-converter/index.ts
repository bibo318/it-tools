import { List } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'List converter',
  path: '/list-converter',
  description:
    'Công cụ này có thể xử lý dữ liệu dựa trên cột và áp dụng nhiều thay đổi khác nhau (hoán vị, thêm tiền tố và hậu tố, danh sách đảo ngược, danh sách sắp xếp, giá trị chữ thường, giá trị cắt bớt) cho mỗi hàng.',
  keywords: ['list', 'converter', 'sort', 'reverse', 'prefix', 'suffix', 'lowercase', 'truncate'],
  component: () => import('./list-converter.vue'),
  icon: List,
  createdAt: new Date('2023-05-07'),
});
