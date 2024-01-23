<script setup lang="ts">
import { generateNumeronym } from './numeronym-generator.service';

const word = ref('');

const numeronym = computed(() => generateNumeronym(word.value));
</script>

<template>
  <div flex flex-col items-center gap-4>
    <c-input-text v-model:value="word" placeholder="Nhập một từ, Ví dụ. 'internationalization'" size="large" clearable test-id="word-input" />

    <icon-mdi-arrow-down text-30px />

    <input-copyable :value="numeronym" size="large" readonly placeholder="Chữ số của bạn sẽ ở đây, ví dụ. 'i18n'" test-id="numeronym" />
  </div>
</template>
