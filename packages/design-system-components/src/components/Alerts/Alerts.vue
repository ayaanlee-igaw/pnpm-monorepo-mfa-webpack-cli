<template>
  <h2>Alert</h2>

  <div class="alert-wrap">
    <Alert :type="AlertType.success">
      <template #default>
        <div>slot binding</div>
      </template>
    </Alert>
    <Alert
      :type="AlertType.warning"
      title="Warning"
      button-label="Button"
      :handle-button="handleButton"
      description="title, button, center"
      center />
    <Alert
      :type="AlertType.warning"
      button-label="Button"
      :handle-button="handleButton"
      description="button and center"
      center />
    <Alert
      :type="AlertType.info"
      title="Info"
      description="title and center"
      center />
    <Alert
      :type="AlertType.danger"
      description="danger"
      center />
    <Alert
      :type="AlertType.danger"
      title="danger"
      center />
  </div>
</template>

<script setup lang="ts">
import Alert from '@/components/Alert/Alert.vue';
import { AlertType } from '@/components/Alert/alertType';

function handleButton() {
  console.log('button');
}
</script>

<style scoped>
.alert-wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
