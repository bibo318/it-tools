import { Fingerprint } from '@vicons/tabler';
import { defineTool } from '../tool';

import { translate } from '@/plugins/i18n.plugin'; // Giả sử rằng bạn có plugin i18n

export const tool = defineTool({
  name: translate('uuid.title'),
  path: '/uuid-generator',
  description: translate('uuid.description'),
  keywords: ['uuid', 'v4', 'random', 'id', 'alphanumeric', 'identity', 'token', 'string', 'identifier', 'unique', 'v1', 'v3', 'v5', 'nil'],
  component: () => import('./uuid-generator.vue'),
  icon: Fingerprint,
});
