import { PasswordRound } from '@vicons/material';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Trình tạo xác thực cơ bản',
  path: '/basic-auth-generator',
  description: 'Tạo tiêu đề xác thực cơ bản base64 từ tên người dùng và mật khẩu.',
  keywords: [
    'basic',
    'auth',
    'generator',
    'username',
    'password',
    'base64',
    'authentication',
    'header',
    'authorization',
  ],
  component: () => import('./basic-auth-generator.vue'),
  icon: PasswordRound,
});
