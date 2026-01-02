<script setup lang="ts">
  import { type LISTProps } from "./types";

  const props = defineProps<LISTProps>();
</script>

<template>
  <ul :class="['list', props.class]">
    <slot></slot>
  </ul>
</template>
