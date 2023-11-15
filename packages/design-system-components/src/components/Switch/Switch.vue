<template>
  <h2>Switch</h2>

  <div>
    <el-switch v-model="value1" />
    <el-switch v-model="value1" disabled/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value1 = ref(true);
</script>

<style scoped>

</style>
