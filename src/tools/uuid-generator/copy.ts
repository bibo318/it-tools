import { useCopy } from '@/composable/copy';

export const { copy } = useCopy({ source: uuids, text: $t('uuid.copied_notification') });
