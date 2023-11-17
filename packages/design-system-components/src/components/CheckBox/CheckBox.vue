<template>
  <h2>Check Box</h2>
  <div>
    <el-checkbox
      v-model="checked1"
      label="Option 1" />
    <el-checkbox
      v-model="checked1"
      label="Option 1"
      disabled />
  </div>
  <div>
    <el-checkbox
      v-model="checkAll"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange">
      Check all
    </el-checkbox>
    <el-checkbox-group
      v-model="checkedCities"
      @change="handleCheckedCitiesChange">
      <el-checkbox
        v-for="city in cities"
        :key="city"
        :label="city">
        {{ city }}
      </el-checkbox>
    </el-checkbox-group>
  </div>
  <div>
    <el-checkbox
      v-model="checked1"
      label="Option1"
      class="el-checkbox--large"
      border />
    <el-checkbox
      v-model="checked2"
      label="Option2"
      class="el-checkbox--medium"
      border />
    <el-checkbox
      v-model="checked1"
      label="Option1"
      class="el-checkbox--small"
      border />
    <el-checkbox
      v-model="checked2"
      label="Option2"
      class="el-checkbox--mini"
      border />
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const checked1 = ref(true);
  const checked2 = ref(true);
  const checkAll = ref(false);
  const isIndeterminate = ref(true);
  const checkedCities = ref(["Shanghai", "Beijing"]);
  const cities = ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"];

  const handleCheckAllChange = (val: boolean) => {
    checkedCities.value = val ? cities : [];
    isIndeterminate.value = false;
  };
  const handleCheckedCitiesChange = (value: string[]) => {
    const checkedCount = value.length;
    checkAll.value = checkedCount === cities.length;
    isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length;
  };
</script>

<style scoped></style>
