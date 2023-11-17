<template>
  <h2>Radio</h2>

  <div style="display: flex; gap: 20px">
    <el-radio-group v-model="radio1">
      <el-radio label="1"> Option 1 </el-radio>
      <el-radio label="2"> Option 2 </el-radio>
    </el-radio-group>
    <el-radio-group
      v-model="radio1"
      diabled>
      <el-radio label="1"> Option 1 </el-radio>
      <el-radio label="2"> Option 2 </el-radio>
    </el-radio-group>
    <el-radio-group v-model="radio1">
      <el-radio
        label="1"
        disabled>
        Option 1
      </el-radio>
      <el-radio label="2"> Option 2 </el-radio>
    </el-radio-group>
  </div>

  <div style="display: flex; gap: 20px">
    <el-radio-group v-model="radio1">
      <el-radio
        label="1"
        class="el-radio--large"
        border>
        Option A
      </el-radio>
      <el-radio
        label="2"
        class="el-radio--large"
        border>
        Option B
      </el-radio>
    </el-radio-group>
    <el-radio-group v-model="radio1">
      <el-radio
        label="1"
        class="el-radio--medium"
        border>
        Option A
      </el-radio>
      <el-radio
        label="2"
        class="el-radio--medium"
        border>
        Option B
      </el-radio>
    </el-radio-group>
    <el-radio-group v-model="radio1">
      <el-radio
        label="1"
        class="el-radio--small"
        border>
        Option A
      </el-radio>
      <el-radio
        label="2"
        class="el-radio--small"
        border>
        Option B
      </el-radio>
    </el-radio-group>
    <el-radio-group v-model="radio1">
      <el-radio
        label="1"
        class="el-radio--mini"
        border>
        Option A
      </el-radio>
      <el-radio
        label="2"
        class="el-radio--mini"
        border>
        Option B
      </el-radio>
    </el-radio-group>
  </div>

  <div>
    <el-radio-group v-model="radio1">
      <el-radio-button
        class="el-radio-button--large"
        label="New York" />
      <el-radio-button
        class="el-radio-button--large"
        label="Washington" />
      <el-radio-button
        class="el-radio-button--large"
        label="Los Angeles" />
      <el-radio-button
        class="el-radio-button--large"
        label="Chicago" />
    </el-radio-group>
    <el-radio-group v-model="radio1">
      <el-radio-button
        class="el-radio-button--medium"
        label="New York" />
      <el-radio-button
        class="el-radio-button--medium"
        label="Washington" />
      <el-radio-button
        class="el-radio-button--medium"
        label="Los Angeles" />
      <el-radio-button
        class="el-radio-button--medium"
        label="Chicago" />
    </el-radio-group>
    <el-radio-group v-model="radio1">
      <el-radio-button
        class="el-radio-button--small"
        label="New York" />
      <el-radio-button
        class="el-radio-button--small"
        label="Washington" />
      <el-radio-button
        class="el-radio-button--small"
        label="Los Angeles" />
      <el-radio-button
        class="el-radio-button--small"
        label="Chicago" />
    </el-radio-group>
    <el-radio-group v-model="radio1">
      <el-radio-button
        class="el-radio-button--mini"
        label="New York" />
      <el-radio-button
        class="el-radio-button--mini"
        label="Washington" />
      <el-radio-button
        class="el-radio-button--mini"
        label="Los Angeles" />
      <el-radio-button
        class="el-radio-button--mini"
        label="Chicago" />
    </el-radio-group>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const radio1 = ref("1");
</script>

<style scoped></style>
