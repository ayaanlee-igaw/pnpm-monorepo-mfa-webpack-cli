<template>
  <h2>Breadcrumb</h2>

  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }"> homepage </el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">promotion management</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>

    <el-breadcrumb :separator-icon="InfoCircleIcon">
      <el-breadcrumb-item :to="{ path: '/' }"> homepage </el-breadcrumb-item>
      <el-breadcrumb-item>promotion management</el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
  import InfoCircleIcon from "@/assets/icons/InfoCircleIcon.vue";
</script>

<style scoped></style>
