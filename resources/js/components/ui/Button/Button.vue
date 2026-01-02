<script setup lang="ts">
  import { computed, type HTMLAttributes } from "vue";
  import { cn } from "@/lib/utils";
  import type { ButtonVariants } from "./variants";
  import { buttonVariants } from "./variants";
  import { LoaderCircle } from "lucide-vue-next";

  const props = withDefaults(
    defineProps<{
      disabled?: boolean;
      processing?: boolean;
      type: "button" | "submit" | "reset";
      color?: ButtonVariants["color"];
      size?: ButtonVariants["size"];
      modifier?: ButtonVariants["modifier"];
      variant?: ButtonVariants["variant"];
      class?: HTMLAttributes["class"];
      label: string;
      processingLabel?: string;
    }>(),
    {
      disabled: false,
      processing: false,
      type: "button",
      color: "primary",
      size: "md",
      modifier: null,
      variant: null,
      class: null,
    },
  );

  const buttonLabel = computed(() => {
    if (props.processingLabel && props.processing) {
      return props.processingLabel;
    }

    return props.label;
  });
</script>

<template>
  <button :type="props.type" :disabled="props.disabled || props.processing" :class="cn(buttonVariants({ color, size, modifier, variant }), props.class)">
    <slot> <LoaderCircle v-if="props.processing" /> {{ buttonLabel }} </slot>
  </button>
</template>
