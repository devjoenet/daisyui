<script setup lang="ts">
  import { computed } from "vue";
  import { type LinkProps } from "./types";
  import { useVariantMapping } from "../../composables/useVariants";

  const props = withDefaults(defineProps<LinkProps>(), {
    variant: "default",
    onlyUnderlineOnHover: false,
    ghost: false,
  });
  const { colorClass } = useVariantMapping(props, "link");
  const hoverClass = computed(() => {
    return props.onlyUnderlineOnHover ? "link-hover" : "";
  });
  const ghostClass = computed(() => {
    return props.ghost ? "link-ghost" : "";
  });
</script>

<template>
  <a :class="['link', colorClass, hoverClass, ghostClass]"><slot /></a>
</template>
