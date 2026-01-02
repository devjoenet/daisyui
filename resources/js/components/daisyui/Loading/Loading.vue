<script setup lang="ts">
  import { computed } from "vue";
  import { useVariantMapping } from "../../composables/useVariants";
  import { useSizeMapping } from "../../composables/useSizes";
  import { type LoadingProps } from "./types";

  const props = withDefaults(defineProps<LoadingProps>(), {
    animation: "spinner",
    size: "default",
    variant: "default",
  });

  const animationClass = computed(() => {
    return {
      spinner: "loading-spinner",
      dots: "loading-dots",
      ring: "loading-ring",
      ball: "loading-ball",
      bars: "loading-bars",
      infinity: "loading-infinity",
    }[props.animation];
  });

  const { sizeClass } = useSizeMapping(props, "loading");
  const { colorClass } = useVariantMapping(props, "text");
</script>

<template>
  <span :class="['loading', sizeClass, animationClass, colorClass]"></span>
</template>
