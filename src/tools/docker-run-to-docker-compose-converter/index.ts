import { BrandDocker } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Docker run to Docker compose converter',
  path: '/docker-run-to-docker-compose-converter',
  description: 'Biến các lệnh chạy docker thành các tập tin docker-compose!',
  keywords: ['docker', 'run', 'compose', 'yaml', 'yml', 'convert', 'deamon'],
  component: () => import('./docker-run-to-docker-compose-converter.vue'),
  icon: BrandDocker,
});
