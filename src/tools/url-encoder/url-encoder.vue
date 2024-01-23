<script setup lang="ts">
import { useCopy } from '@/composable/copy';
import { useValidation } from '@/composable/validation';
import { isNotThrowing } from '@/utils/boolean';
import { withDefaultOnError } from '@/utils/defaults';

const encodeInput = ref('Hello world :)');
const encodeOutput = computed(() => withDefaultOnError(() => encodeURIComponent(encodeInput.value), ''));

const encodedValidation = useValidation({
  source: encodeInput,
  rules: [
    {
      validator: value => isNotThrowing(() => encodeURIComponent(value)),
      message: 'Impossible to parse this string',
    },
  ],
});

const { copy: copyEncoded } = useCopy({ source: encodeOutput, text: 'Encoded string copied to the clipboard' });

const decodeInput = ref('Hello%20world%20%3A)');
const decodeOutput = computed(() => withDefaultOnError(() => decodeURIComponent(decodeInput.value), ''));

const decodeValidation = useValidation({
  source: encodeInput,
  rules: [
    {
      validator: value => isNotThrowing(() => decodeURIComponent(value)),
      message: 'Impossible to parse this string',
    },
  ],
});

const { copy: copyDecoded } = useCopy({ source: decodeOutput, text: 'Decoded string copied to the clipboard' });
</script>

<template>
  <c-card :title="$t('encodeTitle')">
    <c-input-text
      v-model:value="encodeInput"
      :label="$t('yourStringLabel')"
      :validation="encodedValidation"
      multiline
      autosize
      :placeholder="$t('stringToEncodePlaceholder')"
      rows="2"
      mb-3
    />

    <c-input-text
      :label="$t('yourStringEncodedLabel')"
      :value="encodeOutput"
      multiline
      autosize
      readonly
      :placeholder="$t('yourStringEncodedPlaceholder')"
      rows="2"
      mb-3
    />

    <div flex justify-center>
      <c-button @click="copyEncoded()">
        {{ $t('copyButton') }}
      </c-button>
    </div>
  </c-card>
  <c-card :title="$t('decodeTitle')">
    <c-input-text
      v-model:value="decodeInput"
      :label="$t('yourEncodedStringLabel')"
      :validation="decodeValidation"
      multiline
      autosize
      :placeholder="$t('stringToDecodePlaceholder')"
      rows="2"
      mb-3
    />

    <c-input-text
      :label="$t('yourStringDecodedPlaceholder')"
      :value="decodeOutput"
      multiline
      autosize
      readonly
      :placeholder="$t('yourStringDecodedPlaceholder')"
      rows="2"
      mb-3
    />

    <div flex justify-center>
      <c-button @click="copyDecoded()">
        {{ $t('copyButton') }}
      </c-button>
    </div>
  </c-card>
</template>
