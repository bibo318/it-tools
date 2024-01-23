import { defineTool } from '../tool';
import BracketIcon from '~icons/mdi/code-brackets';

export const tool = defineTool({
  name: 'TOML to YAML',
  path: '/toml-to-yaml',
  description: 'Phân tích và chuyển đổi TOML sang YAML.',
  keywords: ['toml', 'yaml', 'convert', 'online', 'transform', 'parse'],
  component: () => import('./toml-to-yaml.vue'),
  icon: BracketIcon,
  createdAt: new Date('2023-06-23'),
});
