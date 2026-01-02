<script setup lang="ts">
  import { type TABLEItemProps } from "./types";

  const props = withDefaults(defineProps<TABLEItemProps>(), {
    customClass: "",
    isHeader: false,
    colspan: undefined,
    rowspan: undefined,
  });
</script>

<template>
  <component :is="isHeader ? 'th' : 'td'" :class="customClass" :colspan="colspan" :rowspan="rowspan">
    <slot></slot>
  </component>
</template>
