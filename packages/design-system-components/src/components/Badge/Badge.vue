<template>
  <h2>Badge</h2>

  <div>
    <el-badge
      :value="12"
      class="item">
      <el-button>comments</el-button>
    </el-badge>
    <el-badge
      :value="3"
      class="item">
      <el-button>replies</el-button>
    </el-badge>
    <el-badge
      :value="1"
      class="item"
      type="primary">
      <el-button>comments</el-button>
    </el-badge>
    <el-badge
      :value="2"
      class="item"
      type="warning">
      <el-button>replies</el-button>
    </el-badge>

    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        Click Me
        <el-icon class="el-icon--right"><InfoCircleIcon /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item class="clearfix">
            comments
            <el-badge
              class="mark"
              :value="12" />
          </el-dropdown-item>
          <el-dropdown-item class="clearfix">
            replies
            <el-badge
              class="mark"
              :value="3" />
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>

  <div>
    <el-badge
      :value="200"
      :max="99"
      class="item">
      <el-button>comments</el-button>
    </el-badge>
    <el-badge
      :value="100"
      :max="10"
      class="item">
      <el-button>replies</el-button>
    </el-badge>
  </div>

  <div>
    <el-badge
      is-dot
      class="item">
      query
    </el-badge>
    <el-badge
      is-dot
      class="item el-badge--flash">
      <el-button
        class="share-button"
        :icon="InfoCircleIcon"
        type="primary" />
    </el-badge>
  </div>
</template>

<script setup lang="ts">
import InfoCircleIcon from '@/assets/icons/InfoCircleIcon.vue';
</script>

<style scoped>

</style>
