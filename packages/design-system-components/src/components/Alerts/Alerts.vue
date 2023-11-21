<template>
  <h2>Alert</h2>

  <div class="alert-wrap">
    <DfnAlert type="success">
      <template #default>
        <div>slot binding</div>
      </template>
    </DfnAlert>
    <DfnAlert
      type="warning"
      title="Warning"
      button-label="Button"
      :handle-button="handleButton"
      description="title, button, center"
      center />
    <DfnAlert
      type="warning"
      button-label="Button"
      :handle-button="handleButton"
      description="button and center"
      center />
    <DfnAlert
      type="info"
      title="Info"
      description="title and center"
      center />
    <DfnAlert
      type="danger"
      description="danger"
      center />
    <DfnAlert
      type="danger"
      title="danger"
      center />
  </div>
</template>

<script setup lang="ts">
  function handleButton() {
    console.log("button");
  }
</script>

<style scoped>
  .alert-wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>
