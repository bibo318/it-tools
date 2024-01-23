<script setup lang="ts">
import { textToNatoAlphabet } from './text-to-nato-alphabet.service';
import { useCopy } from '@/composable/copy';

const input = ref('');
const natoText = computed(() => textToNatoAlphabet({ text: input.value }));
const { copy } = useCopy({ source: natoText, text: 'Chuỗi bảng chữ cái NATO đã sao chép.' });
</script>

<template>
  <div>
    <c-input-text
      v-model:value="input"
      label="Văn bản của bạn để chuyển đổi sang bảng chữ cái phiên âm NATO"
      placeholder="Đặt văn bản của bạn ở đây..."
      clearable
      mb-5
    />

    <div v-if="natoText">
      <div mb-2>
        Văn bản của bạn trong bảng chữ cái phiên âm NATO
      </div>
      <c-card>
        {{ natoText }}
      </c-card>

      <div mt-3 flex justify-center>
        <c-button autofocus @click="copy()">
          Sao chép chuỗi NATO
        </c-button>
      </div>
    </div>
  </div>
</template>
