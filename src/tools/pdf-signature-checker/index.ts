import { defineTool } from '../tool';
import FileCertIcon from '~icons/mdi/file-certificate-outline';

export const tool = defineTool({
  name: 'Kiểm tra chữ ký PDF',
  path: '/pdf-signature-checker',
  description: 'Xác minh chữ ký của tệp PDF. Tệp PDF đã ký chứa một hoặc nhiều chữ ký có thể được sử dụng để xác định xem nội dung của tệp có bị thay đổi kể từ khi tệp được ký hay không.',
  keywords: ['pdf', 'signature', 'checker', 'verify', 'validate', 'sign'],
  component: () => import('./pdf-signature-checker.vue'),
  icon: FileCertIcon,
  createdAt: new Date('2023-12-09'),
});
