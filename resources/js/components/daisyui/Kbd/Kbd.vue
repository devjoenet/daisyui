<script setup lang="ts">
  import { type Size, useSizeMapping } from "../../composables/useSizes";
  import { type KBDSize } from "./types";

  const props = withDefaults(
    defineProps<{
      size?: Size;
    }>(),
    {
      size: "default",
    },
  );

  const { sizeClass } = useSizeMapping(props, "kbd");
</script>

<template>
  <kbd :class="['kbd', sizeClass]">
    <slot></slot>
  </kbd>
</template>
