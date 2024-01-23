<script setup lang="ts">
import { SHA1 } from 'crypto-js';
import InputCopyable from '@/components/InputCopyable.vue';
import { macAddressValidation } from '@/utils/macAddress';

const macAddress = ref('20:37:06:12:34:56');
const calculatedSections = computed(() => {
  const timestamp = new Date().getTime();
  const hex40bit = SHA1(timestamp + macAddress.value)
    .toString()
    .substring(30);

  const ula = `fd${hex40bit.substring(0, 2)}:${hex40bit.substring(2, 6)}:${hex40bit.substring(6)}`;

  return [
    {
      label: 'IPv6 ULA:',
      value: `${ula}::/48`,
    },
    {
      label: 'First routable block:',
      value: `${ula}:0::/64`,
    },
    {
      label: 'Last routable block:',
      value: `${ula}:ffff::/64`,
    },
  ];
});

const addressValidation = macAddressValidation(macAddress);
</script>

<template>
  <div>
    <n-alert title="Info" type="info">
      Công cụ này sử dụng phương pháp đầu tiên được IETF đề xuất bằng cách sử dụng dấu thời gian hiện tại cộng với địa chỉ mac, băm sha1,
      và 40 bit thấp hơn để tạo ULA ngẫu nhiên của bạn.
    </n-alert>

    <c-input-text
      v-model:value="macAddress"
      placeholder="Nhập địa chỉ MAC"
      clearable
      label="Địa chỉ MAC:"
      raw-text
      my-8
      :validation="addressValidation"
    />

    <div v-if="addressValidation.isValid">
      <InputCopyable
        v-for="{ label, value } in calculatedSections"
        :key="label"
        :value="value"
        :label="label"
        label-width="160px"
        label-align="right"
        label-position="left"
        readonly
        mb-2
      />
    </div>
  </div>
</template>
