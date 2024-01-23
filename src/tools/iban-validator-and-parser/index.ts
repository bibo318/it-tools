import { defineTool } from '../tool';
import Bank from '~icons/mdi/bank';

export const tool = defineTool({
  name: 'IBAN validator and parser',
  path: '/iban-validator-and-parser',
  description: 'Xác thực và phân tích số IBAN. Kiểm tra xem IBAN có hợp lệ hay không và lấy quốc gia, BBAN, nếu đó là QR-IBAN và định dạng thân thiện với IBAN.',
  keywords: ['iban', 'validator', 'and', 'parser', 'bic', 'bank'],
  component: () => import('./iban-validator-and-parser.vue'),
  icon: Bank,
  createdAt: new Date('2023-08-26'),
});
