<template>
  <h2>Input</h2>
  <div style="display: flex; flex-direction: column; gap: 10px">
    <el-input placeholder="Input" />
    <el-input
      class="el-input--medium"
      placeholder="Input" />
    <el-input
      class="el-input--small"
      placeholder="Input" />
    <el-input
      class="el-input--mini"
      placeholder="Input" />
    <el-input
      placeholder="Input"
      disabled />
  </div>

  <div style="display: flex; flex-direction: column; gap: 10px">
    <el-input
      v-model="input1"
      placeholder="Please input">
      <template #prepend> Http:// </template>
    </el-input>
    <el-input
      v-model="input2"
      placeholder="Please input">
      <template #append> .com </template>
    </el-input>
    <el-input
      v-model="input3"
      placeholder="Please input"
      class="input-with-select">
      <template #prepend>
        <el-select
          v-model="select"
          placeholder="Select"
          style="width: 115px">
          <el-option
            label="Restaurant"
            value="1" />
          <el-option
            label="Order No."
            value="2" />
          <el-option
            label="Tel"
            value="3" />
        </el-select>
      </template>
      <template #append>
        <el-button :icon="InfoCircleIcon" />
      </template>
    </el-input>
    <el-input
      v-model="input3"
      placeholder="Please input"
      class="input-with-select">
      <template #prepend>
        <el-button :icon="InfoCircleIcon" />
      </template>
      <template #append>
        <el-select
          v-model="select"
          placeholder="Select"
          style="width: 115px">
          <el-option
            label="Restaurant"
            value="1" />
          <el-option
            label="Order No."
            value="2" />
          <el-option
            label="Tel"
            value="3" />
        </el-select>
      </template>
    </el-input>
  </div>

  <div
    class="demo-input-size"
    style="display: flex; flex-direction: column; gap: 10px">
    <el-input
      v-model="input2"
      placeholder="Please Input"
      :suffix-icon="InfoCircleIcon" />
    <el-input
      v-model="input3"
      placeholder="Please Input"
      :suffix-icon="InfoCircleIcon" />
  </div>
  <div class="demo-input-size">
    <el-input
      v-model="input1"
      placeholder="Please Input"
      :prefix-icon="InfoCircleIcon" />
    <el-input
      v-model="input1"
      placeholder="Please Input"
      maxlength="10"
      show-word-limit
      clearable />
  </div>

  <div>
    <el-input
      v-model="textarea1"
      autosize
      show-word-limit
      maxlength="9"
      type="textarea"
      placeholder="Please input" />
    <el-input
      v-model="textarea2"
      type="textarea"
      placeholder="Please input"
      disabled />
  </div>

  <div>
    <el-input-number
      v-model="num"
      :min="1"
      :max="10"
      @change="handleChange" />
    <el-input-number
      v-model="num"
      :min="1"
      :max="10"
      controls-position="right"
      @change="handleChange" />
    <el-input-number
      v-model="num"
      :min="1"
      :max="10"
      disabled
      @change="handleChange" />
    <el-input-number
      v-model="num"
      :min="1"
      :max="10"
      controls-position="right"
      disabled
      @change="handleChange" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import InfoCircleIcon from "@/assets/icons/InfoCircleIcon.vue";

  const select = ref("");
  const input1 = ref("");
  const input2 = ref("");
  const input3 = ref("");
  const textarea1 = ref("");
  const textarea2 = ref("");

  const num = ref(1);
  const handleChange = (value: number) => {
    console.log(value);
  };
</script>

<style scoped></style>
