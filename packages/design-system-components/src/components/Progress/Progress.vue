<template>
  <h2>Progress</h2>

  <div>
    <el-progress :percentage="50" />
    <el-progress
      :percentage="100"
      :format="format" />
    <el-progress
      :percentage="100"
      status="success" />
    <el-progress
      :percentage="100"
      status="warning" />
    <el-progress
      :percentage="50"
      status="exception" />
  </div>

  <div style="display: flex;flex-direction: column;gap: 10px;">
    <el-progress
      :text-inside="true"
      :stroke-width="26"
      :percentage="70" />
    <el-progress
      :text-inside="true"
      :stroke-width="24"
      :percentage="100"
      status="success" />
    <el-progress
      :text-inside="true"
      :stroke-width="22"
      :percentage="80"
      status="warning" />
    <el-progress
      :text-inside="true"
      :stroke-width="20"
      :percentage="50"
      status="exception" />
  </div>

  <div>
    <el-progress
      type="circle"
      :percentage="0" />
    <el-progress
      type="circle"
      :percentage="25" />
    <el-progress
      type="circle"
      :percentage="100"
      status="success" />
    <el-progress
      type="circle"
      :percentage="70"
      status="warning" />
    <el-progress
      type="circle"
      :percentage="50"
      status="exception" />
  </div>
</template>

<script setup lang="ts">
const format = (percentage: number) => (percentage === 100 ? 'Full' : `${percentage}%`);
</script>

<style scoped>

</style>
