<script setup lang="ts">
import { useBase64 } from '@vueuse/core';
import type { Ref } from 'vue';
import { useCopy } from '@/composable/copy';
import { useDownloadFileFromBase64 } from '@/composable/downloadBase64';
import { useValidation } from '@/composable/validation';
import { isValidBase64 } from '@/utils/base64';

const base64Input = ref('');
const { download } = useDownloadFileFromBase64({ source: base64Input });
const base64InputValidation = useValidation({
  source: base64Input,
  rules: [
    {
      message: 'Invalid base 64 string',
      validator: value => isValidBase64(value.trim()),
    },
  ],
});

function downloadFile() {
  if (!base64InputValidation.isValid) {
    return;
  }

  try {
    download();
  }
  catch (_) {
    //
  }
}

const fileInput = ref() as Ref<File>;
const { base64: fileBase64 } = useBase64(fileInput);
const { copy: copyFileBase64 } = useCopy({ source: fileBase64, text: 'Đã sao chép chuỗi Base64 vào bảng nhớ tạm' });

async function onUpload(file: File) {
  if (file) {
    fileInput.value = file;
  }
}
</script>

<template>
  <c-card title="Base64 to file">
    <c-input-text
      v-model:value="base64Input"
      multiline
      placeholder="Đặt chuỗi tệp base64 của bạn vào đây..."
      rows="5"
      :validation="base64InputValidation"
      mb-2
    />

    <div flex justify-center>
      <c-button :disabled="base64Input === '' || !base64InputValidation.isValid" @click="downloadFile()">
        Tải tập tin
      </c-button>
    </div>
  </c-card>

  <c-card title="File to base64">
    <c-file-upload title="Kéo và thả tệp vào đây hoặc nhấp để chọn tệp" @file-upload="onUpload" />
    <c-input-text :value="fileBase64" multiline readonly placeholder="Tệp trong base64 sẽ ở đây" rows="5" my-2 />

    <div flex justify-center>
      <c-button @click="copyFileBase64()">
        Sao chép
      </c-button>
    </div>
  </c-card>
</template>

<style lang="less" scoped>
::v-deep(.n-upload-trigger) {
  width: 100%;
}
</style>
