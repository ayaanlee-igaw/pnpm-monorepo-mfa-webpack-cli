<template>
  <h2>Dropdown</h2>

  <div>
    <el-dropdown>
      <span class="el-dropdown-link">
        Dropdown List
        <el-icon class="el-icon--right">
          <InfoCircleIcon />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item disabled>
            Action 4
          </el-dropdown-item>
          <el-dropdown-item divided>
            Action 5
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <el-dropdown disabled>
      <span class="el-dropdown-link">
        Dropdown List
        <el-icon class="el-icon--right">
          <InfoCircleIcon />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <el-dropdown>
      <span class="el-dropdown-link">
        Dropdown List<el-icon class="el-icon--right"><InfoCircleIcon /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :icon="InfoCircleIcon">
            Action 1
          </el-dropdown-item>
          <el-dropdown-item :icon="InfoCircleIcon">
            Action 2
          </el-dropdown-item>
          <el-dropdown-item :icon="InfoCircleIcon">
            Action 3
          </el-dropdown-item>
          <el-dropdown-item :icon="InfoCircleIcon">
            Action 4
          </el-dropdown-item>
          <el-dropdown-item :icon="InfoCircleIcon">
            Action 5
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>

  <div>
    <el-dropdown>
      <el-button type="primary">
        Dropdown List<el-icon class="el-icon--right">
          <InfoCircleIcon />
        </el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
          <el-dropdown-item>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <!--  둘다 disabled 주던가.. dropdown disabled 되면, 그 안 버튼 색상 바꾸던가..  -->
    <el-dropdown disabled>
      <el-button
        type="primary"
        disabled>
        Dropdown List<el-icon class="el-icon--right">
          <InfoCircleIcon />
        </el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
          <el-dropdown-item>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-dropdown
      split-button
      type="primary"
      @click="handleClick">
      Dropdown List
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
          <el-dropdown-item>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-dropdown
      split-button
      type="primary"
      disabled
      @click="handleClick">
      Dropdown List
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
          <el-dropdown-item>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import InfoCircleIcon from '@/assets/icons/InfoCircleIcon.vue';

const handleClick = () => {
  alert('button click');
};
</script>

<style scoped>

</style>
