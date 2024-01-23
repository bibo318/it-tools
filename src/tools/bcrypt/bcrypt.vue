<script setup lang="ts">
import { compareSync, hashSync } from 'bcryptjs';
import { useThemeVars } from 'naive-ui';
import { useCopy } from '@/composable/copy';

const themeVars = useThemeVars();

const input = ref('');
const saltCount = ref(10);
const hashed = computed(() => hashSync(input.value, saltCount.value));
const { copy } = useCopy({ source: hashed, text: 'Đã sao chép chuỗi hash vào bảng nhớ tạm' });

const compareString = ref('');
const compareHash = ref('');
const compareMatch = computed(() => compareSync(compareString.value, compareHash.value));
</script>

<template>
  <c-card title="Hash">
    <c-input-text
      v-model:value="input"
      placeholder="String của bạn tới bcrypt..."
      raw-text
      label="String của bạn: "
      label-position="left"
      label-align="right"
      label-width="120px"
      mb-2
    />
    <n-form-item label="Đếm Salt : " label-placement="left" label-width="120">
      <n-input-number v-model:value="saltCount" placeholder="Salt rounds..." :max="10" :min="0" w-full />
    </n-form-item>

    <c-input-text :value="hashed" readonly text-center />

    <div mt-5 flex justify-center>
      <c-button @click="copy()">
        Copy hash
      </c-button>
    </div>
  </c-card>

  <c-card title="So sánh String với hàm băm">
    <n-form label-width="120">
      <n-form-item label="String của bạn: " label-placement="left">
        <c-input-text v-model:value="compareString" placeholder="String của bạn để so sánh..." raw-text />
      </n-form-item>
      <n-form-item label="Hash của bạn: " label-placement="left">
        <c-input-text v-model:value="compareHash" placeholder="Hash của bạn để so sánh..." raw-text />
      </n-form-item>
      <n-form-item label="Chúng có khớp không ? " label-placement="left" :show-feedback="false">
        <div class="compare-result" :class="{ positive: compareMatch }">
          {{ compareMatch ? 'Đúng' : 'KHÔNG' }}
        </div>
      </n-form-item>
    </n-form>
  </c-card>
</template>

<style lang="less" scoped>
.compare-result {
  color: v-bind('themeVars.errorColor');

  &.positive {
    color: v-bind('themeVars.successColor');
  }
}
</style>
