import { AlignJustified } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Tạo cụm mật khẩu BIP39',
  path: '/bip39-generator',
  description: 'Tạo cụm mật khẩu BIP39 từ từ gợi nhớ hiện có hoặc ngẫu nhiên hoặc lấy từ gợi nhớ từ cụm mật khẩu.',
  keywords: ['BIP39', 'passphrase', 'generator', 'mnemonic', 'entropy'],
  component: () => import('./bip39-generator.vue'),
  icon: AlignJustified,
});
