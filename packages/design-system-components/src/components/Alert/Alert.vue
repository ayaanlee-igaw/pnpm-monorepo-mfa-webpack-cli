<template>
  <div
    :class="[
      'alert-wrap',
      props.type,
      { center: isCenter },
      { 'is-description-button': isShowDescriptionButton },
    ]">
    <div class="alert">
      <div class="alert-icon-wrap">
        <AlertIcon :font-size="fontSize" />
      </div>
      <div class="alert-contents-wrap">
        <div class="alert-contents">
          <p
            v-if="title"
            class="alert-contents-title">
            {{ props.title }}
          </p>
          <slot>
            <p
              v-if="props.description"
              class="alert-contents-description">
              {{ props.description }}
            </p>
          </slot>
        </div>
        <el-button
          v-if="isShowTitleButton"
          :class="['el-button--mini', `el-button--${props.type}`]"
          plain
          @click="handleButton">
          {{ props.buttonLabel }}
        </el-button>
      </div>
    </div>
    <el-button
      v-if="isShowDescriptionButton"
      :class="['el-button--mini', `el-button--${props.type}`]"
      plain
      @click="handleButton">
      {{ props.buttonLabel }}
    </el-button>
  </div>
</template>

<script setup lang="ts">
  import { computed, defineProps, withDefaults } from "vue";
  import { AlertProps, AlertType } from "@/components/Alert/alertType";
  import InfoCircleIcon from "@/assets/icons/InfoCircleIcon.vue";
  import SuccessCircleIcon from "@/assets/icons/SuccessCircleIcon.vue";
  import DangerCircleIcon from "@/assets/icons/DangerCircleIcon.vue";
  import WarningCircleIcon from "@/assets/icons/WarningCircleIcon.vue";

  const fontSize = "var(--comp-alert-sizing-icon-prefix-2line)";

  const props = withDefaults(defineProps<AlertProps>(), {
    center: false,
  });

  const AlertIcon = computed(() => {
    switch (props.type) {
      case AlertType.success:
        return SuccessCircleIcon;
      case AlertType.warning:
        return WarningCircleIcon;
      case AlertType.info:
        return InfoCircleIcon;
      case AlertType.danger:
      default:
        return DangerCircleIcon;
    }
  });

  const isShowTitleButton = computed(() => props.buttonLabel && props.title);
  const isShowDescriptionButton = computed(
    () => props.buttonLabel && !props.title,
  );
  // title 혹은 button을 사용하면, center 속성을 이용할 수 없습니다.
  const existEveryText = computed(() => props.title && props.description);
  const isCenter = computed(
    () => !existEveryText.value && !props.buttonLabel && props.center,
  );
</script>

<style lang="scss" scoped>
  @import "alertStyle.scss";
</style>
