<script setup lang="ts">
import { stringify as stringifyToml } from 'iarna-toml-esm';
import JSON5 from 'json5';
import { withDefaultOnError } from '../../utils/defaults';
import type { UseValidationRule } from '@/composable/validation';

const convertJsonToToml = (value: string) => [stringifyToml(JSON5.parse(value))].flat().join('\n').trim();

const transformer = (value: string) => value.trim() === '' ? '' : withDefaultOnError(() => convertJsonToToml(value), '');

const rules: UseValidationRule<string>[] = [
  {
    validator: (v: string) => v === '' || JSON5.parse(v),
    message: 'JSON được cung cấp không hợp lệ.',
  },
];
</script>

<template>
  <format-transformer
    input-label="JSON của bạn"
    input-placeholder="Dán JSON của bạn vào đây..."
    output-label="TOML từ JSON của bạn"
    output-language="toml"
    :input-validation-rules="rules"
    :transformer="transformer"
  />
</template>
