<template>
  <h2>Button</h2>
  <div>
    <el-button>Default</el-button>
    <el-button class="el-button--medium"> Default </el-button>
    <el-button class="el-button--small"> Default </el-button>
    <el-button class="el-button--mini"> Default </el-button>
  </div>

  <div>
    <el-button>Default</el-button>
    <el-button type="primary"> Primary </el-button>
    <el-button type="success"> Success </el-button>
    <el-button type="info"> Info </el-button>
    <el-button type="warning"> Warning </el-button>
    <el-button type="danger"> Danger </el-button>
  </div>

  <div>
    <el-button plain> Default </el-button>
    <el-button
      plain
      type="primary">
      Primary
    </el-button>
    <el-button
      plain
      type="success">
      Success
    </el-button>
    <el-button
      plain
      type="info">
      Info
    </el-button>
    <el-button
      plain
      type="warning">
      Warning
    </el-button>
    <el-button
      plain
      type="danger">
      Danger
    </el-button>
  </div>

  <div>
    <el-button round> Round </el-button>
    <el-button
      type="primary"
      round>
      Primary
    </el-button>
    <el-button
      type="success"
      round>
      Success
    </el-button>
    <el-button
      type="info"
      round>
      Info
    </el-button>
    <el-button
      type="warning"
      round>
      Warning
    </el-button>
    <el-button
      type="danger"
      round>
      Danger
    </el-button>
  </div>

  <div>
    <el-button
      plain
      round>
      Round
    </el-button>
    <el-button
      type="primary"
      plain
      round>
      Primary
    </el-button>
    <el-button
      type="success"
      plain
      round>
      Success
    </el-button>
    <el-button
      type="info"
      plain
      round>
      Info
    </el-button>
    <el-button
      type="warning"
      plain
      round>
      Warning
    </el-button>
    <el-button
      type="danger"
      plain
      round>
      Danger
    </el-button>
  </div>

  <div>
    <el-button disabled> Default </el-button>
    <el-button
      type="primary"
      disabled>
      Primary
    </el-button>
    <el-button
      type="success"
      disabled>
      Success
    </el-button>
    <el-button
      type="info"
      disabled>
      Info
    </el-button>
    <el-button
      type="warning"
      disabled>
      Warning
    </el-button>
    <el-button
      type="danger"
      disabled>
      Danger
    </el-button>
  </div>

  <div>
    <el-button
      plain
      disabled>
      Default
    </el-button>
    <el-button
      type="primary"
      plain
      disabled>
      Primary
    </el-button>
    <el-button
      type="success"
      plain
      disabled>
      Success
    </el-button>
    <el-button
      type="info"
      plain
      disabled>
      Info
    </el-button>
    <el-button
      type="warning"
      plain
      disabled>
      Warning
    </el-button>
    <el-button
      type="danger"
      plain
      disabled>
      Danger
    </el-button>
  </div>

  <div>
    <el-button
      plain
      round
      disabled>
      Default
    </el-button>
    <el-button
      type="primary"
      plain
      round
      disabled>
      Primary
    </el-button>
    <el-button
      type="success"
      plain
      round
      disabled>
      Success
    </el-button>
    <el-button
      type="info"
      plain
      round
      disabled>
      Info
    </el-button>
    <el-button
      type="warning"
      plain
      round
      disabled>
      Warning
    </el-button>
    <el-button
      type="danger"
      plain
      round
      disabled>
      Danger
    </el-button>
  </div>

  <div>
    <el-button circle> D </el-button>
    <el-button
      circle
      type="primary">
      P
    </el-button>
    <el-button
      circle
      type="success">
      S
    </el-button>
    <el-button
      circle
      type="info">
      I
    </el-button>
    <el-button
      circle
      type="warning">
      W
    </el-button>
    <el-button
      circle
      type="danger">
      D
    </el-button>
  </div>

  <div>
    <el-button class="is-square"> D </el-button>
    <el-button
      class="is-square"
      type="primary">
      P
    </el-button>
    <el-button
      class="is-square"
      type="success">
      S
    </el-button>
    <el-button
      class="is-square"
      type="info">
      I
    </el-button>
    <el-button
      class="is-square"
      type="warning">
      W
    </el-button>
    <el-button
      class="is-square"
      type="danger">
      D
    </el-button>
  </div>

  <div>
    <el-button
      v-for="button in buttons"
      :key="button.text"
      :class="button.class"
      :type="button.type"
      link>
      {{ button.text }}
    </el-button>

    <el-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      link
      disabled>
      {{ button.text }}
    </el-button>
  </div>
</template>

<script setup lang="ts">
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const buttons: any = [
    { type: "", text: "plain" },
    { type: "primary", text: "primary", class: "el-button--large" },
    { type: "success", text: "success", class: "el-button--medium" },
    { type: "info", text: "info", class: "el-button--small" },
    { type: "warning", text: "warning", class: "el-button--mini" },
    { type: "danger", text: "danger" },
  ] as const;
</script>

<style scoped></style>
