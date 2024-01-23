<script setup lang="ts">
import { parse as parseToml } from 'iarna-toml-esm';
import { stringify as stringifyToYaml } from 'yaml';
import { withDefaultOnError } from '../../utils/defaults';
import { isValidToml } from '../toml-to-json/toml.services';
import type { UseValidationRule } from '@/composable/validation';

const transformer = (value: string) => value.trim() === '' ? '' : withDefaultOnError(() => stringifyToYaml(parseToml(value)), '');

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
    output-label="YAML từ TOML của bạn"
    output-language="yaml"
    :input-validation-rules="rules"
    :transformer="transformer"
  />
</template>
