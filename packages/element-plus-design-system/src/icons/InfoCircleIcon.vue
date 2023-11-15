<template>
  <IconWrapper>
    <circle cx="12" cy="12" r="10" :fill="props.color"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 7H11V9H13V7ZM13 11H11L11 17H13L13 11Z" fill="white"/>
  </IconWrapper>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue';
import IconWrapper from "@/components/IconWrapper/IconWrapper.vue";
interface InfoCircleProps {
  color?: string;
}

const props = withDefaults(defineProps<InfoCircleProps>(), {
  color: '#676A7E',
});

</script>

<style scoped>
</style>