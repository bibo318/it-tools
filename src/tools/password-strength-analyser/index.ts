import { defineTool } from '../tool';
import PasswordIcon from '~icons/mdi/form-textbox-password';

export const tool = defineTool({
  name: 'Độ mạnh mật khẩu',
  path: '/password-strength-analyser',
  description: 'Khám phá độ mạnh mật khẩu của bạn bằng công cụ phân tích độ mạnh mật khẩu và công cụ ước tính thời gian bẻ khóa chỉ dành cho phía khách hàng này.',
  keywords: ['password', 'strength', 'analyser', 'and', 'crack', 'time', 'estimation', 'brute', 'force', 'attack', 'entropy', 'cracking', 'hash', 'hashing', 'algorithm', 'algorithms', 'md5', 'sha1', 'sha256', 'sha512', 'bcrypt', 'scrypt', 'argon2', 'argon2id', 'argon2i', 'argon2d'],
  component: () => import('./password-strength-analyser.vue'),
  icon: PasswordIcon,
  createdAt: new Date('2023-06-24'),
});
