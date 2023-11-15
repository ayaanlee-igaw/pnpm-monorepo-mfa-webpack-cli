<template>
  <IconWrapper>
    <circle cx="12" cy="12" r="10" :fill="props.color"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0248 13.6105L8.70718 11.2929L7.29297 12.7071L11.0248 16.4389L17.3887 10.0749L15.9745 8.66074L11.0248 13.6105Z" fill="white"/>
  </IconWrapper>
</template>

<script setup lang="ts">
import IconWrapper from "@/components/IconWrapper/IconWrapper.vue";
import { withDefaults, defineProps } from 'vue';
interface InfoCircleProps {
  color?: string;
}

const props = withDefaults(defineProps<InfoCircleProps>(), {
  color: '#299B17',
});
</script>

<style scoped>
</style>