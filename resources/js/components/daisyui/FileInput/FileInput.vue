<script setup lang="ts">
  import { type FILEINPUTProps } from "./types";
  import { useVariantMapping } from "@/composables/useVariants";
  import { useSizeMapping } from "@/composables/useSizes";
  import { computed } from "vue";

  const props = withDefaults(defineProps<FILEINPUTProps>(), {
    disabled: false,
    variant: "default",
    size: "default",
    ghost: false,
  });

  const ghostClass = computed(() => {
    return props.ghost ? "file-input-ghost" : "";
  });

  const { colorClass } = useVariantMapping(props, "file-input");
  const { sizeClass } = useSizeMapping(props, "file-input");
</script>

<template>
  <input type="file" :disabled="disabled" :class="['file-input', colorClass, sizeClass, ghostClass]" />
</template>
