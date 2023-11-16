<template>
  <h2>Select</h2>
  <div>
    <el-select
      v-model="value"
      class="el-select--large"
      placeholder="Select"
      disabled>
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value" />
    </el-select>
    <el-select
      v-model="value"
      class="el-select--medium"
      placeholder="Select"
      clearable
      filterable>
      <el-option
        v-for="(item, index) in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="index === 0" />
    </el-select>
    <el-select
      v-model="value"
      class="el-select--small"
      placeholder="Select">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value" />
    </el-select>
    <el-select
      v-model="value"
      class="el-select--mini"
      placeholder="Select">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value" />
    </el-select>
  </div>

  <div>
    <el-select
      v-model="value1"
      class="el-select--large"
      multiple
      filterable
      placeholder="Select"
      style="width: 240px">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value" />
    </el-select>
    <el-select
      v-model="value1"
      class="el-select--medium"
      multiple
      collapse-tags
      placeholder="Select"
      style="width: 240px">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value" />
    </el-select>
    <el-select
      v-model="value1"
      class="el-select--small"
      multiple
      collapse-tags
      collapse-tags-tooltip
      placeholder="Select"
      style="width: 240px">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value" />
    </el-select>
    <el-select
      v-model="value1"
      class="el-select--mini"
      multiple
      collapse-tags
      collapse-tags-tooltip
      :max-collapse-tags="3"
      placeholder="Select"
      style="width: 240px">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value" />
    </el-select>
  </div>

  <div>
    <el-select
      v-model="value3"
      placeholder="Select">
      <el-option-group
        v-for="group in options3"
        :key="group.label"
        :label="group.label">
        <el-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.value" />
      </el-option-group>
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
const value1 = ref([]);
const value3 = ref('');

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
];

const options3 = [
  {
    label: 'Popular cities',
    options: [
      {
        value: 'Shanghai',
        label: 'Shanghai',
      },
      {
        value: 'Beijing',
        label: 'Beijing',
      },
    ],
  },
  {
    label: 'City name',
    options: [
      {
        value: 'Chengdu',
        label: 'Chengdu',
      },
      {
        value: 'Shenzhen',
        label: 'Shenzhen',
      },
      {
        value: 'Guangzhou',
        label: 'Guangzhou',
      },
      {
        value: 'Dalian',
        label: 'Dalian',
      },
    ],
  },
];
</script>

<style scoped>

</style>
