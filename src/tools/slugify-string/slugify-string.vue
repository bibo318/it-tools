<script setup lang="ts">
import slugify from '@sindresorhus/slugify';
import { withDefaultOnError } from '@/utils/defaults';
import { useCopy } from '@/composable/copy';

const input = ref('');
const slug = computed(() => withDefaultOnError(() => slugify(input.value), ''));
const { copy } = useCopy({ source: slug, text: 'Đã sao chép Slug vào bảng nhớ tạm' });
</script>

<template>
  <div>
    <c-input-text v-model:value="input" multiline placeholder="Đặt chuỗi của bạn ở đây (ví dụ: my-file-path)" label="Chuỗi của bạn để slugify" autofocus raw-text mb-5 />

    <c-input-text :value="slug" multiline readonly placeholder="Slug của bạn sẽ được tạo ở đây (ví dụ: my-file-path)" label="Slug của bạn" mb-5 />

    <div flex justify-center>
      <c-button :disabled="slug.length === 0" @click="copy()">
        Copy slug
      </c-button>
    </div>
  </div>
</template>
