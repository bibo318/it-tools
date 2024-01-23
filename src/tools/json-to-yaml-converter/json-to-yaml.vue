<script setup lang="ts">
import { stringify } from 'yaml';
import JSON5 from 'json5';
import type { UseValidationRule } from '@/composable/validation';
import { isNotThrowing } from '@/utils/boolean';
import { withDefaultOnError } from '@/utils/defaults';

const transformer = (value: string) => withDefaultOnError(() => stringify(JSON5.parse(value)), '');

const rules: UseValidationRule<string>[] = [
  {
    validator: (value: string) => value === '' || isNotThrowing(() => stringify(JSON5.parse(value))),
    message: 'JSON được cung cấp không hợp lệ.',
  },
];
</script>

<template>
  <format-transformer
    input-label="JSON của bạn"
    input-placeholder="Dán JSON của bạn vào đây..."
    output-label="YAML từ JSON của bạn"
    output-language="yaml"
    :input-validation-rules="rules"
    :transformer="transformer"
  />
</template>
