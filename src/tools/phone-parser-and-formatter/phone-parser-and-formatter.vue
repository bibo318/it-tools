<script setup lang="ts">
import { getCountries, getCountryCallingCode, parsePhoneNumber } from 'libphonenumber-js/max';
import lookup from 'country-code-lookup';
import {
  formatTypeToHumanReadable,
  getDefaultCountryCode,
  getFullCountryName,
} from './phone-parser-and-formatter.models';
import { withDefaultOnError } from '@/utils/defaults';
import { booleanToHumanReadable } from '@/utils/boolean';
import { useValidation } from '@/composable/validation';

const rawPhone = ref('');
const defaultCountryCode = ref(getDefaultCountryCode());
const validation = useValidation({
  source: rawPhone,
  rules: [
    {
      validator: value => value === '' || /^[0-9 +\-()]+$/.test(value),
      message: 'Số điện thoại không hợp lệ',
    },
  ],
});

const parsedDetails = computed(() => {
  if (!validation.isValid) {
    return undefined;
  }

  const parsed = withDefaultOnError(() => parsePhoneNumber(rawPhone.value, defaultCountryCode.value), undefined);

  if (!parsed) {
    return undefined;
  }

  return [
    {
      label: 'Quốc gia',
      value: parsed.country,
    },
    {
      label: 'Quốc gia',
      value: getFullCountryName(parsed.country),
    },
    {
      label: 'Mã gọi quốc gia',
      value: parsed.countryCallingCode,
    },
    {
      label: 'Hợp lệ?',
      value: booleanToHumanReadable(parsed.isValid()),
    },
    {
      label: 'Có khả năng?',
      value: booleanToHumanReadable(parsed.isPossible()),
    },
    {
      label: 'Kiểu',
      value: formatTypeToHumanReadable(parsed.getType()),
    },
    {
      label: 'Khuôn mẫu quốc tế',
      value: parsed.formatInternational(),
    },
    {
      label: 'Định dạng quốc gia',
      value: parsed.formatNational(),
    },
    {
      label: 'Định dạng E.164',
      value: parsed.format('E.164'),
    },
    {
      label: 'Định dạng RFC3966',
      value: parsed.format('RFC3966'),
    },
  ];
});

const countriesOptions = getCountries().map(code => ({
  label: `${lookup.byIso(code)?.country || code} (+${getCountryCallingCode(code)})`,
  value: code,
}));
</script>

<template>
  <div>
    <c-select v-model:value="defaultCountryCode" label="Mã quốc gia mặc định:" :options="countriesOptions" searchable mb-5 />

    <c-input-text
      v-model:value="rawPhone"
      placeholder="Nhập số điện thoại"
      label="Số điện thoại:"
      :validation="validation"
      mb-5
    />

    <n-table v-if="parsedDetails">
      <tbody>
        <tr v-for="{ label, value } in parsedDetails" :key="label">
          <td font-bold>
            {{ label }}
          </td>
          <td>
            <span-copyable v-if="value" :value="value" />
            <span v-else op-70>
              không xác định
            </span>
          </td>
        </tr>
      </tbody>
    </n-table>
  </div>
</template>
