<script setup lang="ts">
import { stringify as stringifyToml } from 'iarna-toml-esm';
import { parse as parseYaml } from 'yaml';
import { withDefaultOnError } from '../../utils/defaults';
import type { UseValidationRule } from '@/composable/validation';

const convertYamlToToml = (value: string) => [stringifyToml(parseYaml(value))].flat().join('\n').trim();

const transformer = (value: string) => value.trim() === '' ? '' : withDefaultOnError(() => convertYamlToToml(value), '');

const rules: UseValidationRule<string>[] = [
  {
    validator: (v: string) => v === '' || parseYaml(v),
    message: 'JSON được cung cấp không hợp lệ.',
  },
];
</script>

<template>
  <format-transformer
    input-label="YAML của bạn"
    input-placeholder="Dán YAML của bạn vào đây..."
    output-label="TOML từ YAML của bạn"
    output-language="toml"
    :input-validation-rules="rules"
    :transformer="transformer"
  />
</template>
