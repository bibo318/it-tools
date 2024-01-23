<script setup lang="ts">
import { parse as parseToml } from 'iarna-toml-esm';
import { withDefaultOnError } from '../../utils/defaults';
import { isValidToml } from './toml.services';
import type { UseValidationRule } from '@/composable/validation';

const transformer = (value: string) => value === '' ? '' : withDefaultOnError(() => JSON.stringify(parseToml(value), null, 3), '');

const rules: UseValidationRule<string>[] = [
  {
    validator: isValidToml,
    message: 'TOML được cung cấp không hợp lệ.',
  },
];
</script>

<template>
  <format-transformer
    input-label="TOML của bạn"
    input-placeholder="Dán TOML của bạn vào đây..."
    output-label="JSON từ TOML của bạn"
    output-language="json"
    :input-validation-rules="rules"
    :transformer="transformer"
  />
</template>
