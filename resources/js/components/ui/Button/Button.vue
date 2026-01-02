<script setup lang="ts">
  import type { HTMLAttributes } from "vue";
  import { cn } from "@/lib/utils";
  import type { ButtonVariants } from "./variants";
  import { buttonVariants } from "./variants";

  const props = withDefaults(
    defineProps<{
      disabled: boolean;
      type: "button" | "submit" | "reset";
      color?: ButtonVariants["color"];
      size?: ButtonVariants["size"];
      modifier?: ButtonVariants["modifier"];
      variant?: ButtonVariants["variant"];
      class?: HTMLAttributes["class"] | null;
    }>(),
    {
      disabled: false,
      type: "button",
      color: "primary",
      size: "md",
      modifier: null,
      variant: null,
      class: null,
    },
  );
</script>

<template>
  <button :type="props.type" :disabled="props.disabled" :class="cn(buttonVariants({ color, size, modifier, variant }), props.class)">
    <slot />
  </button>
</template>
