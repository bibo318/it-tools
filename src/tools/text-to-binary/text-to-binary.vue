<script setup lang="ts">
import { convertAsciiBinaryToText, convertTextToAsciiBinary } from './text-to-binary.models';
import { withDefaultOnError } from '@/utils/defaults';
import { useCopy } from '@/composable/copy';
import { isNotThrowing } from '@/utils/boolean';

const inputText = ref('');
const binaryFromText = computed(() => convertTextToAsciiBinary(inputText.value));
const { copy: copyBinary } = useCopy({ source: binaryFromText });

const inputBinary = ref('');
const textFromBinary = computed(() => withDefaultOnError(() => convertAsciiBinaryToText(inputBinary.value), ''));
const inputBinaryValidationRules = [
  {
    validator: (value: string) => isNotThrowing(() => convertAsciiBinaryToText(value)),
    message: 'Nhị phân phải là chuỗi nhị phân ASCII hợp lệ với bội số của 8 bit',
  },
];
const { copy: copyText } = useCopy({ source: textFromBinary });
</script>

<template>
  <c-card title="Văn bản sang dạng nhị phân ASCII">
    <c-input-text v-model:value="inputText" multiline placeholder="e.g. 'Chào thế giới'" label="Nhập văn bản để chuyển đổi sang nhị phân(binary)" autosize autofocus raw-text test-id="text-to-binary-input" />
    <c-input-text v-model:value="binaryFromText" label="Nhị phân(binary) từ văn bản của bạn" multiline raw-text readonly mt-2 placeholder="Biểu diễn nhị phân(binary) của văn bản của bạn sẽ ở đây" test-id="text-to-binary-output" />
    <div mt-2 flex justify-center>
      <c-button :disabled="!binaryFromText" @click="copyBinary()">
        Sao chép nhị phân(binary) vào clipboard
      </c-button>
    </div>
  </c-card>

  <c-card title="ASCII nhị phân thành văn bản">
    <c-input-text v-model:value="inputBinary" multiline placeholder="e.g. '01001000 01100101 01101100 01101100 01101111'" label="Nhập nhị phân(binary) để chuyển đổi sang text" autosize raw-text :validation-rules="inputBinaryValidationRules" test-id="binary-to-text-input" />
    <c-input-text v-model:value="textFromBinary" label="Văn bản từ hệ nhị phân(binary) của bạn" multiline raw-text readonly mt-2 placeholder="Văn bản trình bày của nhị phân(binary) của bạn sẽ ở đây" test-id="binary-to-text-output" />
    <div mt-2 flex justify-center>
      <c-button :disabled="!textFromBinary" @click="copyText()">
        Sao chép văn bản vào clipboard
      </c-button>
    </div>
  </c-card>
</template>
