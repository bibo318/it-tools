<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { compareSync, hashSync } from 'bcryptjs';
import { useThemeVars } from 'naive-ui';
import { useCopy } from '@/composable/copy';

const { t } = useI18n();

const themeVars = useThemeVars();
const input = ref('');
const saltCount = ref(10);
const hashed = computed(() => hashSync(input.value, saltCount.value));
const { copy } = useCopy({ source: hashed, text: t('hash.copied') });

const compareString = ref('');
const compareHash = ref('');
const compareMatch = computed(() => compareSync(compareString.value, compareHash.value));
</script>

<template>
  <c-card :title="t('hash.title')">
    <c-input-text
      v-model:value="input"
      :placeholder="t('hash.your_string_placeholder')"
      raw-text
      :label="t('hash.your_string')"
      label-position="left"
      label-align="right"
      label-width="120px"
      mb-2
    />
    <n-form-item :label="t('hash.salt_count')" label-placement="left" label-width="120">
      <n-input-number v-model:value="saltCount" :placeholder="t('hash.salt_placeholder')" :max="10" :min="0" w-full />
    </n-form-item>

    <c-input-text :value="hashed" readonly text-center />

    <div mt-5 flex justify-center>
      <c-button @click="copy()">
        {{ t('hash.copy_hash') }}
      </c-button>
    </div>
  </c-card>

  <c-card :title="t('compare.title')">
    <n-form label-width="120">
      <n-form-item :label="t('compare.your_string')" label-placement="left">
        <c-input-text v-model:value="compareString" :placeholder="t('compare.your_string_placeholder')" raw-text />
      </n-form-item>
      <n-form-item :label="t('compare.your_hash')" label-placement="left">
        <c-input-text v-model:value="compareHash" :placeholder="t('compare.your_hash_placeholder')" raw-text />
      </n-form-item>
      <n-form-item :label="t('compare.match_result')" label-placement="left" :show-feedback="false">
        <div class="compare-result" :class="{ positive: compareMatch }">
          {{ compareMatch ? t('compare.yes') : t('compare.no') }}
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
