<template>
  <h2>Tag</h2>

  <div>
    <el-tag>Tag 1</el-tag>
    <el-tag type="success"> Tag 2 </el-tag>
    <el-tag type="info"> Tag 3 </el-tag>
    <el-tag type="warning"> Tag 4 </el-tag>
    <el-tag type="danger"> Tag 5 </el-tag>
  </div>

  <div>
    <el-tag
      v-for="tag in tags"
      :key="tag.name"
      class="mx-1"
      closable
      :type="tag.type">
      {{ tag.name }}
    </el-tag>
  </div>

  <div>
    <el-tag class="el-tag--large"> Large </el-tag>
    <el-tag class="el-tag--medium"> Default </el-tag>
    <el-tag class="el-tag--small"> Small </el-tag>
    <el-tag class="el-tag--mini"> Mini </el-tag>
    <el-tag
      class="el-tag--large"
      closable>
      Large
    </el-tag>
    <el-tag
      class="el-tag--medium"
      closable>
      Default
    </el-tag>
    <el-tag
      class="el-tag--small"
      closable>
      Small
    </el-tag>
    <el-tag
      class="el-tag--mini"
      closable>
      Mini
    </el-tag>
  </div>

  <div>
    <el-tag effect="plain"> Tag 2 </el-tag>
    <el-tag effect="dark"> Tag 1 </el-tag>
    <el-tag
      type="success"
      effect="dark">
      Tag 2
    </el-tag>
    <el-tag
      type="info"
      effect="dark">
      Tag 3
    </el-tag>
    <el-tag
      type="warning"
      effect="dark">
      Tag 4
    </el-tag>
    <el-tag
      type="danger"
      effect="dark">
      Tag 5
    </el-tag>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const tags = ref([
    { name: "Tag 1", type: "" },
    { name: "Tag 2", type: "success" },
    { name: "Tag 3", type: "info" },
    { name: "Tag 4", type: "warning" },
    { name: "Tag 5", type: "danger" },
  ]);
</script>

<style scoped></style>
