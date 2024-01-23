import { DeviceMobile } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Trình tạo mã OTP',
  path: '/otp-generator',
  description: 'Tạo và xác thực OTP dựa trên thời gian (mật khẩu một lần) để xác thực đa yếu tố.',
  keywords: [
    'otp',
    'code',
    'generator',
    'validator',
    'one',
    'time',
    'password',
    'authentication',
    'MFA',
    'mobile',
    'device',
    'security',
    'TOTP',
    'Time',
    'HMAC',
  ],
  component: () => import('./otp-code-generator-and-validator.vue'),
  icon: DeviceMobile,
});
