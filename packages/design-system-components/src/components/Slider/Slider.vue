<template>
  <h2>Slider</h2>

  <div>
    <span class="demonstration">Default value</span>
    <el-slider v-model="value" />
    <span class="demonstration">Customized initial value</span>
    <el-slider v-model="value" />
    <span class="demonstration">Hide Tooltip</span>
    <el-slider
      v-model="value"
      :show-tooltip="false" />
    <span class="demonstration">Format Tooltip</span>
    <el-slider
      v-model="value"
      :format-tooltip="formatTooltip" />
    <span class="demonstration">Disabled</span>
    <el-slider
      v-model="value"
      disabled />
  </div>

  <div>
    <span class="demonstration">Breakpoints not displayed</span>
    <el-slider
      v-model="value"
      :step="10" />
    <span class="demonstration">Breakpoints displayed</span>
    <el-slider
      v-model="value"
      :step="10"
      show-stops />
  </div>

  <div>
    <el-slider
      v-model="value"
      range
      show-stops
      :max="10" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const value = ref(0);

  const formatTooltip = (val: number) => val / 100;
</script>

<style scoped></style>
