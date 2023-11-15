<template>
  <IconWrapper>
    <circle cx="12" cy="12" r="10" :fill="props.color"/>
    <path d="M9.42949 8.23432C9.11706 7.92189 8.61053 7.92189 8.2981 8.23432C7.98568 8.54674 7.98568 9.05328 8.2981 9.3657L10.8686 11.9362L8.23432 14.5705C7.92189 14.8829 7.92189 15.3895 8.23432 15.7019C8.54674 16.0143 9.05328 16.0143 9.3657 15.7019L12 13.0676L14.6343 15.7019C14.9467 16.0143 15.4533 16.0143 15.7657 15.7019C16.0781 15.3895 16.0781 14.8829 15.7657 14.5705L13.1314 11.9362L15.7019 9.36571C16.0143 9.05328 16.0143 8.54675 15.7019 8.23432C15.3895 7.9219 14.8829 7.9219 14.5705 8.23432L12 10.8048L9.42949 8.23432Z" fill="white"/>
  </IconWrapper>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue';
import IconWrapper from "@/components/IconWrapper/IconWrapper.vue";
interface InfoCircleProps {
  color?: string;
}

const props = withDefaults(defineProps<InfoCircleProps>(), {
  color: '#D54242',
});
</script>