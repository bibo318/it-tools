<script setup lang="ts">
import { extractIBAN, friendlyFormatIBAN, isQRIBAN, validateIBAN } from 'ibantools';
import { getFriendlyErrors } from './iban-validator-and-parser.service';
import type { CKeyValueListItems } from '@/ui/c-key-value-list/c-key-value-list.types';

const rawIban = ref('');

const ibanInfo = computed<CKeyValueListItems>(() => {
  const iban = rawIban.value.toUpperCase().replace(/\s/g, '').replace(/-/g, '');

  if (iban === '') {
    return [];
  }

  const { valid: isIbanValid, errorCodes } = validateIBAN(iban);
  const { countryCode, bban } = extractIBAN(iban);
  const errors = getFriendlyErrors(errorCodes);

  return [

    {
      label: 'IBAN có hợp lệ không ?',
      value: isIbanValid,
      showCopyButton: false,
    },
    {
      label: 'Lỗi IBAN',
      value: errors.length === 0 ? undefined : errors,
      hideOnNil: true,
      showCopyButton: false,
    },
    {
      label: 'QR-IBAN cũng là IBAN?',
      value: isQRIBAN(iban),
      showCopyButton: false,
    },
    {
      label: 'Mã quốc gia',
      value: countryCode,
    },
    {
      label: 'BBAN',
      value: bban,
    },
    {
      label: 'Định dạng thân thiện với IBAN',
      value: friendlyFormatIBAN(iban),
    },
  ];
});

const ibanExamples = [
  'FR7630006000011234567890189',
  'DE89370400440532013000',
  'GB29NWBK60161331926819',
];
</script>

<template>
  <div>
    <c-input-text v-model:value="rawIban" placeholder="Nhập IBAN để kiểm tra tính hợp lệ..." test-id="iban-input" />

    <c-card v-if="ibanInfo.length > 0" mt-5>
      <c-key-value-list :items="ibanInfo" data-test-id="iban-info" />
    </c-card>

    <c-card title="Valid IBAN examples" mt-5>
      <div v-for="iban in ibanExamples" :key="iban">
        <c-text-copyable :value="iban" font-mono :displayed-value="friendlyFormatIBAN(iban)" />
      </div>
    </c-card>
  </div>
</template>
