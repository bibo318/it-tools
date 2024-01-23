import { Speakerphone } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Text to NATO alphabet',
  path: '/text-to-nato-alphabet',
  description: 'Chuyển đổi văn bản thành bảng chữ cái phiên âm NATO.',
  keywords: ['string', 'nato', 'alphabet', 'phonetic', 'oral', 'transmission'],
  component: () => import('./text-to-nato-alphabet.vue'),
  icon: Speakerphone,
});
