<template>
  <h2>Upload</h2>

  <div>
    <el-upload
      v-model:file-list="fileList"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      multiple
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :limit="3"
      :on-exceed="handleExceed">
      <el-button type="primary"> Click to upload </el-button>
      <template #tip>
        <div class="el-upload__tip">
          jpg/png files with a size less than 500KB.
        </div>
      </template>
    </el-upload>
  </div>

  <div>
    <el-upload
      class="avatar-uploader"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img
        v-if="imageUrl"
        :src="imageUrl"
        class="avatar"
        alt="avatar" />
      <el-icon
        v-else
        class="avatar-uploader-icon">
        <InfoCircleIcon />
      </el-icon>
    </el-upload>
  </div>

  <div>
    <el-upload
      drag
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      multiple>
      <div class="upload-wrap">
        <el-icon class="el-icon--upload">
          <InfoCircleIcon />
        </el-icon>
        <div class="el-upload__text">Drop file here or click to upload</div>
      </div>
      <template #tip>
        <div class="el-upload__tip">
          jpg/png files with a size less than 500kb
        </div>
      </template>
    </el-upload>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import {
    ElMessage,
    ElMessageBox,
    UploadProps,
    UploadUserFile,
  } from "element-plus";
  import InfoCircleIcon from "@/assets/icons/InfoCircleIcon.vue";

  const imageUrl = ref("");

  const handleAvatarSuccess: UploadProps["onSuccess"] = (
    response,
    uploadFile,
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    imageUrl.value = URL.createObjectURL(uploadFile.raw!);
  };

  const beforeAvatarUpload: UploadProps["beforeUpload"] = (rawFile) => {
    if (rawFile.type !== "image/jpeg") {
      ElMessage.error("Avatar picture must be JPG format!");
      return false;
    }
    if (rawFile.size / 1024 / 1024 > 2) {
      ElMessage.error("Avatar picture size can not exceed 2MB!");
      return false;
    }
    return true;
  };

  const fileList = ref<UploadUserFile[]>([
    {
      name: "element-plus-logo.svg",
      url: "https://element-plus.org/images/element-plus-logo.svg",
    },
    {
      name: "element-plus-logo2.svg",
      url: "https://element-plus.org/images/element-plus-logo.svg",
    },
  ]);

  const handleRemove: UploadProps["onRemove"] = (file, uploadFiles) => {
    console.log(file, uploadFiles);
  };

  const handlePreview: UploadProps["onPreview"] = (uploadFile) => {
    console.log(uploadFile);
  };

  const handleExceed: UploadProps["onExceed"] = (files, uploadFiles) => {
    ElMessage.warning(
      `The limit is 3, you selected ${
        files.length
      } files this time, add up to ${
        files.length + uploadFiles.length
      } totally`,
    );
  };

  const beforeRemove: UploadProps["beforeRemove"] = (uploadFile) =>
    ElMessageBox.confirm(`Cancel the transfer of ${uploadFile.name} ?`).then(
      () => true,
      () => false,
    );
</script>

<style scoped></style>
