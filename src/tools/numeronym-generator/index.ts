import { defineTool } from '../tool';
import n7mIcon from './n7m-icon.svg?component';

export const tool = defineTool({
  name: 'Numeronym generator',
  path: '/numeronym-generator',
  description: 'Chữ số(numeronym) là một từ trong đó một số được sử dụng để tạo thành từ viết tắt. Ví dụ: "i18n" là một chữ số của "quốc tế hóa" trong đó 18 là số chữ cái nằm giữa chữ i đầu tiên và chữ n cuối cùng trong từ.',
  keywords: ['numeronym', 'generator', 'abbreviation', 'i18n', 'a11y', 'l10n'],
  component: () => import('./numeronym-generator.vue'),
  icon: n7mIcon,
  createdAt: new Date('2023-11-05'),
});
