<template>
  <a-upload
    v-model:file-list="fileList"
    list-type="picture"
    :max-count="1"
    :multiple="false"
    :before-upload="beforeUpload"
    @remove="handleRemove"
    action="/api/upload/"
  >
    <a-button>
      <upload-outlined></upload-outlined>
      选择图片
    </a-button>
  </a-upload>
  <a-button
    type="primary"
    :disabled="fileList.length === 0"
    :loading="uploading"
    style="margin-top: 16px"
    @click="handleUpload"
  >
    {{ uploading ? "Uploading" : "Start Upload" }}
  </a-button>
</template>

<script>
import { defineComponent, ref } from "vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { method_post_form } from "../api";

export default defineComponent({
  components: {
    UploadOutlined,
  },
  setup() {
    const fileList = ref([]);
    const uploading = ref(false);

    const handleRemove = (file) => {
      const index = fileList.value.indexOf(file);
      const newFileList = fileList.value.slice();
      newFileList.splice(index, 1);
      fileList.value = newFileList;
    };

    const beforeUpload = (file) => {
      const isLt2M = file.size / 1024 / 1024 < 5;
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isLt2M) {
        message.error("Image must smaller than 5MB!");
      } else if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG file!");
      }
      return false; //isJpgOrPng && isLt2M;
    };

    const handleUpload = () => {
      const formData = new FormData();
      formData.append("file", fileList.value[0].originFileObj);
      uploading.value = true;
      // You can use any AJAX library you like
      method_post_form("/upload/", formData)
        .then(() => {
          fileList.value = [];
          uploading.value = false;
          message.success("upload successfully.");
        })
        .catch(() => {
          fileList.value = [];
          uploading.value = false;
          message.error("upload failed.");
        });
    };

    return {
      fileList,
      uploading,
      handleRemove,
      beforeUpload,
      handleUpload,
    };
  },
});
</script>
