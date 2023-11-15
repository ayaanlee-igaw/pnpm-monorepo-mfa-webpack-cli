<template>
  <h2>Message</h2>

  <div>
    <el-button :plain="true" @click="open2">success</el-button>
    <el-button :plain="true" @click="open3">warning</el-button>
    <el-button :plain="true" @click="open1">message</el-button>
    <el-button :plain="true" @click="open4">error</el-button>
  </div>

  <div>
    <el-button :plain="true" @click="open5">message</el-button>
  </div>

  <div>
    <el-button plain @click="openCenter">Centered text</el-button>
    <el-button :plain="true" @click="open">Show message</el-button>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus';
import InfoCircleIcon from '@/assets/icons/InfoCircleIcon.vue';
import SuccessCircleIcon from '@/assets/icons/SuccessCircleIcon.vue';
import WarningCircleIcon from '@/assets/icons/WarningCircleIcon.vue';
import DangerCircleIcon from '@/assets/icons/DangerCircleIcon.vue';

const open = () => {
  ElMessage({
    message: 'this is a message.',
    grouping: true,
    type: 'success',
  });
};

const openCenter = () => {
  ElMessage({
    showClose: true,
    message: 'Centered text',
    center: true,
  });
};

const open1 = () => {
  ElMessage({
    message: 'this is a message.',
    icon: InfoCircleIcon,
  });
};
const open2 = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
    icon: SuccessCircleIcon,
  });
};
const open3 = () => {
  ElMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
    icon: WarningCircleIcon,
  });
};
const open4 = () => {
  ElMessage.error({
    message: 'Oops, this is a error message.',
    icon: DangerCircleIcon,
  });
};

const open5 = () => {
  ElMessage({
    showClose: true,
    message: 'This is a message.',
    icon: InfoCircleIcon,
  });
};
</script>

<style scoped>
</style>
