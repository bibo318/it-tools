<script setup lang="ts">
import { getPasswordCrackTimeEstimation } from './password-strength-analyser.service';

const password = ref('');
const crackTimeEstimation = computed(() => getPasswordCrackTimeEstimation({ password: password.value }));

const details = computed(() => [
  {
    label: 'Độ dài mật khẩu:',
    value: crackTimeEstimation.value.passwordLength,
  },
  {
    label: 'Sự hỗn loạn(Entropy):',
    value: Math.round(crackTimeEstimation.value.entropy * 100) / 100,
  },
  {
    label: 'Kích thước bộ ký tự:',
    value: crackTimeEstimation.value.charsetLength,
  },
  {
    label: 'Điểm:',
    value: `${Math.round(crackTimeEstimation.value.score * 100)} / 100`,
  },
]);
</script>

<template>
  <div flex flex-col gap-3>
    <c-input-text
      v-model:value="password"
      type="password"
      placeholder="Gõ mật khẩu..."
      clearable
      autofocus
      raw-text
      test-id="password-input"
    />

    <c-card text-center>
      <div op-60>
        Thời gian để bẻ khóa mật khẩu này bằng brute force
      </div>
      <div text-2xl data-test-id="crack-duration">
        {{ crackTimeEstimation.crackDurationFormatted }}
      </div>
    </c-card>
    <c-card>
      <div v-for="({ label, value }) of details" :key="label" flex gap-3>
        <div flex-1 text-right op-60>
          {{ label }}
        </div>
        <div flex-1 text-left>
          {{ value }}
        </div>
      </div>
    </c-card>
    <div op-70>
      <span font-bold>Note: </span>
      Độ mạnh tính toán dựa trên thời gian cần thiết để bẻ khóa mật khẩu bằng cách sử dụng phương pháp brute force, nó không tính đến khả năng xảy ra một cuộc tấn công từ điển.
    </div>
  </div>
</template>
