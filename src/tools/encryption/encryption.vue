<script setup lang="ts">
import { AES, RC4, Rabbit, TripleDES, enc } from 'crypto-js';
import { computedCatch } from '@/composable/computed/catchedComputed';

const algos = { AES, TripleDES, Rabbit, RC4 };

const cypherInput = ref('hello');
const cypherAlgo = ref<keyof typeof algos>('AES');
const cypherSecret = ref('my secret key');
const cypherOutput = computed(() => algos[cypherAlgo.value].encrypt(cypherInput.value, cypherSecret.value).toString());

const decryptInput = ref('U2FsdGVkX1/EC3+6P5dbbkZ3e1kQ5o2yzuU0NHTjmrKnLBEwreV489Kr0DIB+uBs');
const decryptAlgo = ref<keyof typeof algos>('AES');
const decryptSecret = ref('my secret key');
const [decryptOutput, decryptError] = computedCatch(() => algos[decryptAlgo.value].decrypt(decryptInput.value, decryptSecret.value).toString(enc.Utf8), {
  defaultValue: '',
  defaultErrorMessage: 'Không thể giải mã văn bản của bạn',
});
</script>

<template>
  <c-card title="Encrypt">
    <div flex gap-3>
      <c-input-text
        v-model:value="cypherInput"
        label="Văn bản của bạn:"
        placeholder="The string to cypher"
        rows="4"
        multiline raw-text monospace autosize flex-1
      />
      <div flex flex-1 flex-col gap-2>
        <c-input-text v-model:value="cypherSecret" label="Khóa bí mật của bạn:" clearable raw-text />

        <c-select
          v-model:value="cypherAlgo"
          label="Thuật toán mã hóa:"
          :options="Object.keys(algos).map((label) => ({ label, value: label }))"
        />
      </div>
    </div>
    <c-input-text
      label="Văn bản của bạn được mã hóa:"
      :value="cypherOutput"
      rows="3"
      placeholder="Your string hash"
      multiline monospace readonly autosize mt-5
    />
  </c-card>
  <c-card title="Decrypt">
    <div flex gap-3>
      <c-input-text
        v-model:value="decryptInput"
        label="Văn bản được mã hóa của bạn:"
        placeholder="The string to cypher"
        rows="4"
        multiline raw-text monospace autosize flex-1
      />
      <div flex flex-1 flex-col gap-2>
        <c-input-text v-model:value="decryptSecret" label="Chìa khóa bí mật của bạn:" clearable raw-text />

        <c-select
          v-model:value="decryptAlgo"
          label="Thuật toán mã hóa:"
          :options="Object.keys(algos).map((label) => ({ label, value: label }))"
        />
      </div>
    </div>
    <c-alert v-if="decryptError" type="error" mt-12 title="Lỗi khi giải mã">
      {{ decryptError }}
    </c-alert>
    <c-input-text
      v-else
      label="Văn bản được giải mã của bạn:"
      :value="decryptOutput"
      placeholder="Your string hash"
      rows="3"
      multiline monospace readonly autosize mt-5
    />
  </c-card>
</template>
