import { useCopy } from '@/composable/copy';
import { hashed } from './bcrypt.vue';

export const { copy } = useCopy({ source: hashed, text: $t('tools.bcrypt.copyButton') });
